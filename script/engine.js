/**
 * Engine 模块 - 游戏的“大脑”和核心控制器。
 * 它负责整个游戏的生命周期管理，包括：
 * 1. 初始化 (init)：启动所有子系统（音频、存档、UI 容器）。
 * 2. 存档管理 (saveGame/loadGame)：将游戏进度保存到 localStorage 或从中恢复。
 * 3. 场景切换 (travelTo)：在“房间”、“森林”、“小径”、“世界”等不同模块之间导航。
 * 4. 特长系统 (Perks)：定义和管理玩家获得的各种永久增益。
 * 5. 全局设置：语言切换、音量控制、夜间模式（Lights off）、极速模式 (Hyper Mode) 以及导出存档。
 */
(function() {
  var Engine = window.Engine = {

    SITE_URL: encodeURIComponent("http://adarkroom.doublespeakgames.com"),
    VERSION: 1.3,
    MAX_STORE: 99999999999999,
    SAVE_DISPLAY: 30 * 1000,
    GAME_OVER: false,

    // 对象事件类型
    topics: {},

    /**
     * 特长 (Perks) 定义
     * 玩家在特定事件中或达成特定条件后获得的永久性被动加成。
     */
    Perks: {
      'boxer': {
        name: _('boxer'),
        desc: _('punches do more damage'),
        /// TRANSLATORS : means with more force.
        notify: _('learned to throw punches with purpose')
      },
      'martial artist': {
        name: _('martial artist'),
        desc: _('punches do even more damage.'),
        notify: _('learned to fight quite effectively without weapons')
      },
      'unarmed master': {
        /// TRANSLATORS : master of unarmed combat
        name: _('unarmed master'),
        desc: _('punch twice as fast, and with even more force'),
        notify: _('learned to strike faster without weapons')
      },
      'barbarian': {
        name: _('barbarian'),
        desc: _('melee weapons deal more damage'),
        notify: _('learned to swing weapons with force')
      },
      'slow metabolism': {
        name: _('slow metabolism'),
        desc: _('go twice as far without eating'),
        notify: _('learned how to ignore the hunger')
      },
      'desert rat': {
        name: _('desert rat'),
        desc: _('go twice as far without drinking'),
        notify: _('learned to love the dry air')
      },
      'evasive': {
        name: _('evasive'),
        desc: _('dodge attacks more effectively'),
        notify: _("learned to be where they're not")
      },
      'precise': {
        name: _('precise'),
        desc: _('land blows more often'),
        notify: _('learned to predict their movement')
      },
      'scout': {
        name: _('scout'),
        desc: _('see farther'),
        notify: _('learned to look ahead')
      },
      'stealthy': {
        name: _('stealthy'),
        desc: _('better avoid conflict in the wild'),
        notify: _('learned how not to be seen')
      },
      'gastronome': {
        name: _('gastronome'),
        desc: _('restore more health when eating'),
        notify: _('learned to make the most of food')
      }
    },

    options: {
      state: null,
      debug: false,
      log: false,
      dropbox: false,
      doubleTime: false
    },

    /**
     * 游戏初始化入口
     * 执行环境检查（浏览器/移动端）、创建全局 UI 元素（菜单栏）、初始化所有核心子模块。
     */
    init: function(options) {
      this.options = $.extend(
        this.options,
        options
      );
      this._debug = this.options.debug;
      this._log = this.options.log;

      // 检查 HTML5 支持
      if(!Engine.browserValid()) {
        window.location = 'browserWarning.html';
      }

      // 检查移动端
      if(Engine.isMobile()) {
        window.location = 'mobileWarning.html';
      }

      Engine.disableSelection();

      // 加载存档或初始化新状态
      if(this.options.state != null) {
        window.State = this.options.state;
      } else {
        Engine.loadGame();
      }

      // 提前开始加载音频和音效文件
      for (var key in AudioLibrary) {
        if (
          key.toString().indexOf('MUSIC_') > -1 ||
          key.toString().indexOf('EVENT_') > -1) {
            AudioEngine.loadAudioFile(AudioLibrary[key]);
          }
      }

      // 创建位置滑动容器（用于在不同地点间切换的动画效果）
      $('<div>').attr('id', 'locationSlider').appendTo('#main');

      // 构建侧边/顶部菜单按钮
      var menu = $('<div>')
        .addClass('menu')
        .appendTo('body');

      // 1. 语言选择按钮
      if(typeof langs != 'undefined'){
        var customSelect = $('<span>')
          .addClass('customSelect')
          .addClass('menuBtn')
          .appendTo(menu);
        var selectOptions = $('<span>')
          .addClass('customSelectOptions')
          .appendTo(customSelect);
        var optionsList = $('<ul>')
          .appendTo(selectOptions);
        $('<li>')
          .text("language.")
          .appendTo(optionsList);

        $.each(langs, function(name,display){
          $('<li>')
            .text(display)
            .attr('data-language', name)
            .on("click", function() { Engine.switchLanguage(this); })
            .appendTo(optionsList);
        });
      }

      // 2. 音量开关
      $('<span>')
        .addClass('volume menuBtn')
        .text(_('sound on.'))
        .click(() => Engine.toggleVolume())
        .appendTo(menu);

      // 3. 应用推荐 (iOS/Android)
      $('<span>')
        .addClass('appStore menuBtn')
        .text(_('get the app.'))
        .click(Engine.getApp)
        .appendTo(menu);

      // 4. 夜间模式开关 (Lights Off)
      $('<span>')
        .addClass('lightsOff menuBtn')
        .text(_('lights off.'))
        .click(Engine.turnLightsOff)
        .appendTo(menu);

      // 5. 极速模式开关 (Hyper Mode)
      $('<span>')
        .addClass('hyper menuBtn')
        .text(_('hyper.'))
        .click(Engine.confirmHyperMode)
        .appendTo(menu);

      // 6. 重新开始按钮 (删除所有存档)
      $('<span>')
        .addClass('menuBtn')
        .text(_('restart.'))
        .click(Engine.confirmDelete)
        .appendTo(menu);

      // 7. 分享按钮
      $('<span>')
        .addClass('menuBtn')
        .text(_('share.'))
        .click(Engine.share)
        .appendTo(menu);

      // 8. 存档导入/导出按钮
      $('<span>')
        .addClass('menuBtn')
        .text(_('save.'))
        .click(Engine.exportImport)
        .appendTo(menu);

      if(this.options.dropbox && Engine.Dropbox) {
        this.dropbox = Engine.Dropbox.init();

        $('<span>')
          .addClass('menuBtn')
          .text(_('dropbox.'))
          .click(Engine.Dropbox.startDropbox)
          .appendTo(menu);
      }

      // 9. GitHub 链接
      $('<span>')
        .addClass('menuBtn')
        .text(_('github.'))
        .click(function() { window.open('https://github.com/doublespeakgames/adarkroom'); })
        .appendTo(menu);

      // 注册全局键盘和滑动事件
      $('body').off('keydown').keydown(Engine.keyDown);
      $('body').off('keyup').keyup(Engine.keyUp);

      swipeElement = $('#outerSlider');
      swipeElement.on('swipeleft', Engine.swipeLeft);
      swipeElement.on('swiperight', Engine.swipeRight);
      swipeElement.on('swipeup', Engine.swipeUp);
      swipeElement.on('swipedown', Engine.swipeDown);

      // 订阅状态更新分发器 (用于响应资源的增减等变化)
      $.Dispatch('stateUpdate').subscribe(Engine.handleStateUpdates);

      // 核心业务子模块初始化
      $SM.init(); // 状态管理 (Save Manager)
      AudioEngine.init(); // 音频引擎
      Notifications.init(); // 消息通知栏
      Events.init(); // 随机事件系统
      Room.init(); // 起始“房间”模块


      // 根据当前进度恢复已解锁的模块
      if(typeof $SM.get('stores.wood') != 'undefined') {
        Outside.init();
      }
      if($SM.get('stores.compass', true) > 0) {
        Path.init();
      }
      if ($SM.get('features.location.fabricator')) {
        Fabricator.init();
      }
      if($SM.get('features.location.spaceShip')) {
        Ship.init();
      }

      // 恢复配置设置
      if($SM.get('config.lightsOff', true)){
        Engine.turnLightsOff();
      }

      if($SM.get('config.hyperMode', true)){
        Engine.triggerHyperMode();
      }

      Engine.toggleVolume(Boolean($SM.get('config.soundOn')));
      if(!AudioEngine.isAudioContextRunning()){
        document.addEventListener('click', Engine.resumeAudioContext, true);
      }
      
      Engine.saveLanguage();
      // 默认跳转到“房间”界面
      Engine.travelTo(Room);

      setTimeout(notifyAboutSound, 3000);

    },
    resumeAudioContext: function () {
      AudioEngine.tryResumingAudioContext();
      
      // turn on music!
          AudioEngine.setMasterVolume($SM.get('config.soundOn') ? 1.0 : 0.0, 0);

      document.removeEventListener('click', Engine.resumeAudioContext);
    },
    browserValid: function() {
      return ( location.search.indexOf( 'ignorebrowser=true' ) >= 0 || ( typeof Storage != 'undefined' && !oldIE ) );
    },

    isMobile: function() {
      return ( location.search.indexOf( 'ignorebrowser=true' ) < 0 && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent ) );
    },

    /**
     * 保存游戏
     * 将当前的 State 对象序列化为 JSON 字符串并存入 localStorage。
     * 同时会在界面左上角短暂显示“已保存”提示。
     */
    saveGame: function() {
      if(typeof Storage != 'undefined' && localStorage) {
        if(Engine._saveTimer != null) {
          clearTimeout(Engine._saveTimer);
        }
        // 控制保存提示的显示频率，避免过于频繁
        if(typeof Engine._lastNotify == 'undefined' || Date.now() - Engine._lastNotify > Engine.SAVE_DISPLAY){
          $('#saveNotify').css('opacity', 1).animate({opacity: 0}, 1000, 'linear');
          Engine._lastNotify = Date.now();
        }
        localStorage.gameState = JSON.stringify(State);
      }
    },

    /**
     * 加载游戏
     * 从 localStorage 读取 JSON 字符串并反序列化恢复 State 对象。
     * 如果没有存档，则初始化一个新的游戏状态。
     */
    loadGame: function() {
      try {
        var savedState = JSON.parse(localStorage.gameState);
        if(savedState) {
          State = savedState;
          $SM.updateOldState(); // 处理旧版本存档的兼容性
          Engine.log("loaded save!");
        }
      } catch(e) {
        State = {};
        $SM.set('version', Engine.VERSION);
        Engine.event('progress', 'new game');
      }
    },

    exportImport: function() {
      Events.startEvent({
        title: _('Export / Import'),
        scenes: {
          start: {
            text: [
              _('export or import save data, for backing up'),
              _('or migrating computers')
            ],
            buttons: {
              'export': {
                text: _('export'),
                nextScene: {1: 'inputExport'}
              },
              'import': {
                text: _('import'),
                nextScene: {1: 'confirm'}
              },
              'cancel': {
                text: _('cancel'),
                nextScene: 'end'
              }
            }
          },
          'inputExport': {
            text: [_('save this.')],
            textarea: Engine.export64(),
            onLoad: function() { Engine.event('progress', 'export'); },
            readonly: true,
            buttons: {
              'done': {
                text: _('got it'),
                nextScene: 'end',
                onChoose: Engine.disableSelection
              }
            }
          },
          'confirm': {
            text: [
              _('are you sure?'),
              _('if the code is invalid, all data will be lost.'),
              _('this is irreversible.')
            ],
            buttons: {
              'yes': {
                text: _('yes'),
                nextScene: {1: 'inputImport'},
                onChoose: Engine.enableSelection
              },
              'no': {
                text: _('no'),
                nextScene: {1: 'start'}
              }
            }
          },
          'inputImport': {
            text: [_('put the save code here.')],
            textarea: '',
            buttons: {
              'okay': {
                text: _('import'),
                nextScene: 'end',
                onChoose: Engine.import64
              },
              'cancel': {
                text: _('cancel'),
                nextScene: 'end'
              }
            }
          }
        }
      });
    },

    generateExport64: function(){
      var string64 = Base64.encode(localStorage.gameState);
      string64 = string64.replace(/\s/g, '');
      string64 = string64.replace(/\./g, '');
      string64 = string64.replace(/\n/g, '');

      return string64;
    },

    export64: function() {
      Engine.saveGame();
      Engine.enableSelection();
      return Engine.generateExport64();
    },

    import64: function(string64) {
      Engine.event('progress', 'import');
      Engine.disableSelection();
      string64 = string64.replace(/\s/g, '');
      string64 = string64.replace(/\./g, '');
      string64 = string64.replace(/\n/g, '');
      var decodedSave = Base64.decode(string64);
      localStorage.gameState = decodedSave;
      location.reload();
    },

    event: function(cat, act) {
      if(typeof ga === 'function') {
        ga('send', 'event', cat, act);
      }
    },

    confirmDelete: function() {
      Events.startEvent({
        title: _('Restart?'),
        scenes: {
          start: {
            text: [_('restart the game?')],
            buttons: {
              'yes': {
                text: _('yes'),
                nextScene: 'end',
                onChoose: Engine.deleteSave
              },
              'no': {
                text: _('no'),
                nextScene: 'end'
              }
            }
          }
        }
      });
    },

    deleteSave: function(noReload) {
      if(typeof Storage != 'undefined' && localStorage) {
        var prestige = Prestige.get();
        window.State = {};
        localStorage.clear();
        Prestige.set(prestige);
      }
      if(!noReload) {
        location.reload();
      }
    },

    getApp: function() {
      Events.startEvent({
        title: _('Get the App'),
        scenes: {
          start: {
            text: [_('bring the room with you.')],
            buttons: {
              'ios': {
                text: _('ios'),
                nextScene: 'end',
                onChoose: function () {
                  window.open('https://itunes.apple.com/app/apple-store/id736683061?pt=2073437&ct=adrproper&mt=8');
                }
              },
              'android': {
                text: _('android'),
                nextScene: 'end',
                onChoose: function() {
                  window.open('https://play.google.com/store/apps/details?id=com.yourcompany.adarkroom');
                }
              },
              'close': {
                text: _('close'),
                nextScene: 'end'
              }
            }
          }
        }
      });
    },

    share: function() {
      Events.startEvent({
        title: _('Share'),
        scenes: {
          start: {
            text: [_('bring your friends.')],
            buttons: {
              'facebook': {
                text: _('facebook'),
                nextScene: 'end',
                onChoose: function() {
                  window.open('https://www.facebook.com/sharer/sharer.php?u=' + Engine.SITE_URL, 'sharer', 'width=626,height=436,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no');
                }
              },
              'google': {
                text:_('google+'),
                nextScene: 'end',
                onChoose: function() {
                  window.open('https://plus.google.com/share?url=' + Engine.SITE_URL, 'sharer', 'width=480,height=436,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no');
                }
              },
              'twitter': {
                text: _('twitter'),
                nextScene: 'end',
                onChoose: function() {
                  window.open('https://twitter.com/intent/tweet?text=A%20Dark%20Room&url=' + Engine.SITE_URL, 'sharer', 'width=660,height=260,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
                }
              },
              'reddit': {
                text: _('reddit'),
                nextScene: 'end',
                onChoose: function() {
                  window.open('http://www.reddit.com/submit?url=' + Engine.SITE_URL, 'sharer', 'width=960,height=700,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
                }
              },
              'close': {
                text: _('close'),
                nextScene: 'end'
              }
            }
          }
        }
      },
      {
        width: '400px'
      });
    },

    findStylesheet: function(title) {
      for(var i=0; i<document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if(sheet.title == title) {
          return sheet;
        }
      }
      return null;
    },

    isLightsOff: function() {
      var darkCss = Engine.findStylesheet('darkenLights');
      if ( darkCss != null && !darkCss.disabled ) {
        return true;
      }
      return false;
    },

    turnLightsOff: function() {
      var darkCss = Engine.findStylesheet('darkenLights');
      if (darkCss == null) {
        $('head').append('<link rel="stylesheet" href="css/dark.css" type="text/css" title="darkenLights" />');
        $('.lightsOff').text(_('lights on.'));
        $SM.set('config.lightsOff', true, true);
      } else if (darkCss.disabled) {
        darkCss.disabled = false;
        $('.lightsOff').text(_('lights on.'));
        $SM.set('config.lightsOff', true,true);
      } else {
        $("#darkenLights").attr("disabled", "disabled");
        darkCss.disabled = true;
        $('.lightsOff').text(_('lights off.'));
        $SM.set('config.lightsOff', false, true);
      }
    },

    confirmHyperMode: function(){
      if (!Engine.options.doubleTime) {
        Events.startEvent({
          title: _('Go Hyper?'),
          scenes: {
            start: {
              text: [_('turning hyper mode speeds up the game to x2 speed. do you want to do that?')],
              buttons: {
                'yes': {
                  text: _('yes'),
                  nextScene: 'end',
                  onChoose: Engine.triggerHyperMode
                },
                'no': {
                  text: _('no'),
                  nextScene: 'end'
                }
              }
            }
          }
        });
      } else {
        Engine.triggerHyperMode();
      }
    },

    triggerHyperMode: function() {
      Engine.options.doubleTime = !Engine.options.doubleTime;
      if(Engine.options.doubleTime)
        $('.hyper').text(_('classic.'));
      else
        $('.hyper').text(_('hyper.'));

      $SM.set('config.hyperMode', Engine.options.doubleTime, false);
    },

    // Gets a guid
    getGuid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    },

    activeModule: null,

    /**
     * 场景/地点切换
     * @param {Object} module - 目标模块对象（如 Room, Outside, Path 等）。
     * 该函数负责：
     * 1. 切换顶部导航栏的选择状态。
     * 2. 执行左右滑动的面板动画。
     * 3. 触发目标模块的 onArrival 回调。
     * 4. 打印目标模块在后台时积累的消息队列。
     */
    travelTo: function(module) {
      if(Engine.activeModule == module) {
        return;
      }

      var currentIndex = Engine.activeModule ? $('.location').index(Engine.activeModule.panel) : 1;
      $('div.headerButton').removeClass('selected');
      module.tab.addClass('selected');

      var slider = $('#locationSlider');
      var stores = $('#storesContainer');
      var panelIndex = $('.location').index(module.panel);
      var diff = Math.abs(panelIndex - currentIndex);
      // 执行左右切换的动画
      slider.animate({left: -(panelIndex * 700) + 'px'}, 300 * diff);

      if($SM.get('stores.wood') !== undefined) {
        // 让资源面板也随之移动，以保持 UI 对齐
        stores.animate({right: -(panelIndex * 700) + 'px'}, 300 * diff);
      }

      // 控制武器面板的可见性（仅在特定场景显示）
      if(Engine.activeModule == Room || Engine.activeModule == Path || Engine.activeModule == Fabricator) {
        if (module != Room && module != Path && module != Fabricator) {
          $('div#weapons').animate({opacity: 0}, 300);
        }
      }

      if(module == Room || module == Path || module == Fabricator) {
        $('div#weapons').animate({opacity: 1}, 300);
      }

      Engine.activeModule = module;
      // 触发模块到达事件
      module.onArrival(diff);
      // 打印在该模块处于非活动状态时产生的通知
      Notifications.printQueue(module);
    },

    /* Move the stores panel beneath top_container (or to top: 0px if top_container
     * either hasn't been filled in or is null) using transition_diff to sync with
     * the animation in Engine.travelTo().
     */
    moveStoresView: function(top_container, transition_diff) {
      var stores = $('#storesContainer');

      // If we don't have a storesContainer yet, leave.
      if(typeof(stores) === 'undefined') return;

      if(typeof(transition_diff) === 'undefined') transition_diff = 1;

      if(top_container === null) {
        stores.animate({top: '0px'}, {queue: false, duration: 300 * transition_diff});
      }
      else if(!top_container.length) {
        stores.animate({top: '0px'}, {queue: false, duration: 300 * transition_diff});
      }
      else {
        stores.animate({
          top: top_container.height() + 26 + 'px'
        }, {
          queue: false,
          duration: 300 * transition_diff
        });
      }
    },

    log: function(msg) {
      if(this._log) {
        console.log(msg);
      }
    },

    updateSlider: function() {
      var slider = $('#locationSlider');
      slider.width((slider.children().length * 700) + 'px');
    },

    updateOuterSlider: function() {
      var slider = $('#outerSlider');
      slider.width((slider.children().length * 700) + 'px');
    },

    getIncomeMsg: function(num, delay) {
      return _("{0} per {1}s", (num > 0 ? "+" : "") + num, delay);
      //return (num > 0 ? "+" : "") + num + " per " + delay + "s";
    },

    keyLock: false,
    tabNavigation: true,
    restoreNavigation: false,

    keyDown: function(e) {
      e = e || window.event;
      if(!Engine.keyPressed && !Engine.keyLock) {
        Engine.pressed = true;
        if(Engine.activeModule.keyDown) {
          Engine.activeModule.keyDown(e);
        }
      }
      return jQuery.inArray(e.keycode, [37,38,39,40]) < 0;
    },

    keyUp: function(e) {
      Engine.pressed = false;
      if(Engine.activeModule.keyUp) {
        Engine.activeModule.keyUp(e);
      } else {
        switch(e.which) {
          case 38: // Up
          case 87:
            Engine.log('up');
            break;
          case 40: // Down
          case 83:
            Engine.log('down');
            break;
          case 37: // Left
          case 65:
            if (Engine.tabNavigation) {
              if (Engine.activeModule == Ship && Fabricator.tab) {
                Engine.travelTo(Fabricator);
              }
              else if ((Engine.activeModule == Ship || Engine.activeModule == Fabricator) && Path.tab) {
                Engine.travelTo(Path);
              }
              else if (Engine.activeModule == Path && Outside.tab) {
                Engine.travelTo(Outside);
              } 
              else if (Engine.activeModule == Outside && Room.tab) {
                Engine.travelTo(Room);
              }
            }
            Engine.log('left');
            break;
          case 39: // Right
          case 68:
            if (Engine.tabNavigation){
              if (Engine.activeModule == Room && Outside.tab) {
                Engine.travelTo(Outside);
              }
              else if (Engine.activeModule == Outside && Path.tab){
                Engine.travelTo(Path);
              }
              else if(Engine.activeModule == Path && Fabricator.tab) {
                Engine.travelTo(Fabricator);
              }
              else if ((Engine.activeModule == Path || Engine.activeModule == Fabricator) && Ship.tab){
                Engine.travelTo(Ship);
              }
            }
            Engine.log('right');
            break;
        }
      }
      if(Engine.restoreNavigation){
        Engine.tabNavigation = true;
        Engine.restoreNavigation = false;
      }
      return false;
    },

    swipeLeft: function(e) {
      if(Engine.activeModule.swipeLeft) {
        Engine.activeModule.swipeLeft(e);
      }
    },

    swipeRight: function(e) {
      if(Engine.activeModule.swipeRight) {
        Engine.activeModule.swipeRight(e);
      }
    },

    swipeUp: function(e) {
      if(Engine.activeModule.swipeUp) {
        Engine.activeModule.swipeUp(e);
      }
    },

    swipeDown: function(e) {
      if(Engine.activeModule.swipeDown) {
        Engine.activeModule.swipeDown(e);
      }
    },

    disableSelection: function() {
      document.onselectstart = eventNullifier; // this is for IE
      document.onmousedown = eventNullifier; // this is for the rest
    },

    enableSelection: function() {
      document.onselectstart = eventPassthrough;
      document.onmousedown = eventPassthrough;
    },

    autoSelect: function(selector) {
      $(selector).focus().select();
    },

    handleStateUpdates: function(e){

    },

    switchLanguage: function(dom){
      var lang = $(dom).data("language");
      if(document.location.href.search(/[\?\&]lang=[a-z_]+/) != -1){
        document.location.href = document.location.href.replace( /([\?\&]lang=)([a-z_]+)/gi , "$1"+lang );
      }else{
        document.location.href = document.location.href + ( (document.location.href.search(/\?/) != -1 )?"&":"?") + "lang="+lang;
      }
    },

    saveLanguage: function(){
      var lang = decodeURIComponent((new RegExp('[?|&]lang=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
      if(lang && typeof Storage != 'undefined' && localStorage) {
        localStorage.lang = lang;
      }
    },

    toggleVolume: function(enabled /* optional */) {
      if (enabled == null) {
        enabled = !$SM.get('config.soundOn');
      }
      if (!enabled) {
        $('.volume').text(_('sound on.'));
        $SM.set('config.soundOn', false);
        AudioEngine.setMasterVolume(0.0);
      } else {
        $('.volume').text(_('sound off.'));
        $SM.set('config.soundOn', true);
        AudioEngine.setMasterVolume(1.0);
      }
    },

    setInterval: function(callback, interval, skipDouble){
      if( Engine.options.doubleTime && !skipDouble ){
        Engine.log('Double time, cutting interval in half');
        interval /= 2;
      }

      return setInterval(callback, interval);

    },

    setTimeout: function(callback, timeout, skipDouble){

      if( Engine.options.doubleTime && !skipDouble ){
        Engine.log('Double time, cutting timeout in half');
        timeout /= 2;
      }

      return setTimeout(callback, timeout);

    }
  };

  function eventNullifier(e) {
    return $(e.target).hasClass('menuBtn');
  }

  function eventPassthrough(e) {
    return true;
  }

  function notifyAboutSound() {
    if ($SM.get('playStats.audioAlertShown')) {
      return;
    }

    // Tell new users that there's sound now!
    $SM.set('playStats.audioAlertShown', true);
    Events.startEvent({
      title: _('Sound Available!'),
      scenes: {
        start: {
          text: [
            _('ears flooded with new sensations.'),
            _('perhaps silence is safer?')
          ],
          buttons: {
            'yes': {
              text: _('enable audio'),
              nextScene: 'end',
              onChoose: () => Engine.toggleVolume(true)
            },
            'no': {
              text: _('disable audio'),
              nextScene: 'end',
              onChoose: () => Engine.toggleVolume(false)
            }
          }
        }
      }
    });
  }

})();

function inView(dir, elem){

  var scTop = $('#main').offset().top;
  var scBot = scTop + $('#main').height();

  var elTop = elem.offset().top;
  var elBot = elTop + elem.height();

  if( dir == 'up' ){
    // STOP MOVING IF BOTTOM OF ELEMENT IS VISIBLE IN SCREEN
    return ( elBot < scBot );
  } else if( dir == 'down' ){
    return ( elTop > scTop );
  } else {
    return ( ( elBot <= scBot ) && ( elTop >= scTop ) );
  }

}

function setYPosition(elem, y) {
  var elTop = parseInt( elem.css('top'), 10 );
  elem.css('top', `${y}px`);
}


//create jQuery Callbacks() to handle object events
$.Dispatch = function( id ) {
  var callbacks, topic = id && Engine.topics[ id ];
  if ( !topic ) {
    callbacks = jQuery.Callbacks();
    topic = {
      publish: callbacks.fire,
      subscribe: callbacks.add,
      unsubscribe: callbacks.remove
    };
    if ( id ) {
      Engine.topics[ id ] = topic;
    }
  }
  return topic;
};

$(function() {
  Engine.init();
});
