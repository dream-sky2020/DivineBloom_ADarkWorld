/**
 * Marketing 模块 - 用于触发游戏内的推广消息。
 * 这些事件通常是以符合游戏氛围的文字描述，向玩家推荐开发商 (Doublespeak Games) 的其他作品。
 * @author mtownsend
 * @since Jan 2021
 */

Events.Marketing = [{
  /* 推广 Penrose 游戏的事件 */
  title: _('Penrose'),
  /**
   * 触发条件：
   * 检查玩家是否已经点击或看过这个推广消息 ($SM.get('marketing.penrose'))。
   */
  isAvailable: () => !$SM.get('marketing.penrose'),
  scenes: {
    'start': {
      text: [
        _('a strange thrumming, pounding and crashing. visions of people and places, of a huge machine and twisting curves.'), // 一种奇怪的震动、撞击和轰鸣声。人们和地点的幻象，巨大的机器和扭曲的曲线。
        _('inviting. it would be so easy to give in, completely.') // 吸引着你。完全屈服似乎是如此容易。
      ],
      notification: _('a strange thrumming, pounding and crashing. and then gone.'), // 通知：一种奇怪的震动、撞击和轰鸣声，然后消失了。
      blink: true,
      buttons: {
        'give in': {
          text: _('give in'), // 屈服（点击后跳转到其他游戏的链接）
          onClick: () => {
            $SM.set('marketing.penrose', true); // 标记为已查看
          },
          link: 'https://penrose.doublespeakgames.com/?utm_source=adarkroom&utm_medium=crosspromote&utm_campaign=event'
        },
        'ignore': {
          text: _('ignore it'), // 忽略
          nextScene: 'end'
        }
      }
    }
  },
  audio: AudioLibrary.EVENT_NOISES_INSIDE
}];
