import os

# 配置路径
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
WORKSPACE_DIR = os.path.dirname(os.path.dirname(SCRIPT_DIR))
ITEM_MAP_DIR = os.path.join(WORKSPACE_DIR, "script", "game", "definitions", "maps", "ItemMap")
COMPONENTS_DIR = os.path.join(WORKSPACE_DIR, "script", "game", "definitions", "components")

# 中央材质/金属定义
# durability: 0-1, power: 乘数, elements: 构成元素, is_tool_material: 是否可制作工具
METALS = [
    {'id': 'iron', 'name': '铁', 'desc': '工业的基石，用途极广。', 'vol': 1, 'is_tool_mat': False, 'elements': {'iron': 1.0}},
    {'id': 'steel', 'name': '钢', 'desc': '经过精炼的铁碳合金，极度坚硬。', 'vol': 1, 'is_tool_mat': True, 'durability': 0.5, 'power': 2.5, 'elements': {'iron': 0.8, 'carbon': 0.1}},
    {'id': 'gold', 'name': '金', 'desc': '稀有的贵金属，具有极高的导电性和延展性。', 'vol': 1, 'is_tool_mat': False, 'elements': {'gold': 1.0}},
    {'id': 'silver', 'name': '银', 'desc': '优秀的导体，常用于精密仪器。', 'vol': 1, 'is_tool_mat': False, 'elements': {'silver': 1.0}},
    {'id': 'copper', 'name': '铜', 'desc': '重要的基础金属，电力工业的核心。', 'vol': 1, 'is_tool_mat': False, 'elements': {'copper': 1.0}},
    {'id': 'titanium', 'name': '钛', 'desc': '质轻且强度极高，是航天工业的宠儿。', 'vol': 1, 'is_tool_mat': True, 'durability': 1.0, 'power': 5.0, 'elements': {'titanium': 0.9, 'aluminum': 0.05}},
    {'id': 'lead', 'name': '铅', 'desc': '密度极高的沉重金属，能有效阻挡辐射。', 'vol': 1, 'is_tool_mat': False, 'elements': {'lead': 1.0}},
    {'id': 'tin', 'name': '锡', 'desc': '低熔点金属，常用于合金制造。', 'vol': 1, 'is_tool_mat': False, 'elements': {'tin': 1.0}},
    {'id': 'aluminum', 'name': '铝', 'desc': '轻质金属，广泛应用于现代生活。', 'vol': 1, 'is_tool_mat': False, 'elements': {'aluminum': 1.0}},
    {'id': 'zinc', 'name': '锌', 'desc': '常用于防腐处理。', 'vol': 1, 'is_tool_mat': False, 'elements': {'zinc': 1.0}},
    {'id': 'mercury', 'name': '汞', 'desc': '常温下唯一的液态金属，剧毒。', 'vol': 1, 'is_tool_mat': False, 'elements': {'mercury': 1.0}},
    {'id': 'chromium', 'name': '铬', 'desc': '银白色金属，质地坚硬，常用于制造不锈钢。', 'vol': 1, 'is_tool_mat': False, 'elements': {'chromium': 1.0}},
    {'id': 'nickel', 'name': '镍', 'desc': '具有良好机械强度和延展性的金属，常用于合金。', 'vol': 1, 'is_tool_mat': False, 'elements': {'nickel': 1.0}},
    {'id': 'platinum', 'name': '铂', 'desc': '极稀有的贵金属，化学性质极稳定，催化性能优异。', 'vol': 1, 'is_tool_mat': False, 'elements': {'platinum': 1.0}},
    {'id': 'indium', 'name': '铟', 'desc': '非常柔软的银白色金属，广泛用于半导体工业。', 'vol': 1, 'is_tool_mat': False, 'elements': {'indium': 1.0}},
    {'id': 'cobalt', 'name': '钴', 'desc': '具有磁性的钢灰色硬金属，是制造高温合金和电池的重要原料。', 'vol': 1, 'is_tool_mat': False, 'elements': {'cobalt': 1.0}},
    {'id': 'uranium', 'name': '铀', 'desc': '沉重的银白色金属，具有强放射性，是核工业的基础。', 'vol': 2, 'radio': 50.0, 'is_tool_mat': False, 'elements': {'uranium': 1.0}},
    {'id': 'lithium', 'name': '锂', 'desc': '自然界中最轻的金属，极度活泼，常用于高性能电池。', 'vol': 1, 'is_tool_mat': False, 'elements': {'lithium': 1.0}},
    {'id': 'tungsten', 'name': '钨', 'desc': '熔点最高的金属，极度坚硬，常用于耐高温材料。', 'vol': 1, 'is_tool_mat': False, 'elements': {'tungsten': 1.0}},
    {'id': 'magnesium', 'name': '镁', 'desc': '质轻且活泼的银白色金属，常用于航空航天合金。', 'vol': 1, 'is_tool_mat': False, 'elements': {'magnesium': 1.0}},
    {'id': 'silicon', 'name': '硅', 'desc': '重要的半导体材料，是现代电子工业的基础。', 'vol': 1, 'is_tool_mat': False, 'elements': {'silicon': 1.0}},
    {'id': 'carbon', 'name': '碳', 'desc': '生命的基石，也是制造钢铁和高级复合材料的关键。', 'vol': 1, 'is_tool_mat': False, 'elements': {'carbon': 1.0}},
    # 这里的 stone 是个特殊材质，不属于 metal 文件但属于工具材质
    {'id': 'stone', 'name': '石', 'desc': '随处可见的石材。', 'vol': 1, 'is_tool_mat': True, 'durability': 0.1, 'power': 1.0, 'is_metal': False, 'elements': {'stone': 1.0}},
]

def generate_metals():
    lines = [
        "import { ItemDefinition } from './types';",
        "",
        "export const MetalItems = {"
    ]
    item_data_lines = [
        "export const MetalItemData: Record<string, ItemDefinition> = {"
    ]

    for m in METALS:
        if m.get('is_metal', True) == False:
            continue
            
        key = m['id'].upper()
        id_str = m['id']
        lines.append(f"    {key}: \"{id_str}\",")
        
        item_data_lines.append(f"    [\"{id_str}\"]: {{")
        item_data_lines.append(f"        id: \"{id_str}\",")
        item_data_lines.append(f"        name: \"{m['name']}\",")
        item_data_lines.append(f"        description: \"{m['desc']}\",")
        item_data_lines.append(f"        volume: {m['vol']},")
        if 'radio' in m:
            item_data_lines.append(f"        radioactivity: {m['radio']},")
        if m['elements']:
            item_data_lines.append(f"        elements: {m['elements']},")
        item_data_lines.append("    },")

    lines.append("} as const;")
    lines.append("")
    lines.extend(item_data_lines)
    lines.append("};")

    with open(os.path.join(ITEM_MAP_DIR, "metals.ts"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

def generate_meats():
    animals = [
        {'id': 'crocodile', 'name': '鳄鱼肉', 'p': 22, 'f': 5, 'v': 2, 'w': 70, 'm': 1},
        {'id': 'chicken', 'name': '鸡肉', 'p': 20, 'f': 10, 'v': 3, 'w': 65, 'm': 2},
        {'id': 'beef', 'name': '牛肉', 'p': 21, 'f': 15, 'v': 4, 'w': 60, 'm': 3},
        {'id': 'pork', 'name': '猪肉', 'p': 18, 'f': 20, 'v': 2, 'w': 60, 'm': 2},
        {'id': 'goat', 'name': '山羊肉', 'p': 20, 'f': 8, 'v': 3, 'w': 68, 'm': 2},
        {'id': 'sheep', 'name': '绵羊肉', 'p': 19, 'f': 18, 'v': 3, 'w': 60, 'm': 2},
        {'id': 'deer', 'name': '鹿肉', 'p': 23, 'f': 3, 'v': 5, 'w': 70, 'm': 3},
        {'id': 'rabbit', 'name': '兔肉', 'p': 21, 'f': 6, 'v': 4, 'w': 70, 'm': 2},
        {'id': 'rat', 'name': '鼠肉', 'p': 15, 'f': 12, 'v': 1, 'w': 72, 'm': 1},
        {'id': 'frog', 'name': '青蛙肉', 'p': 18, 'f': 1, 'v': 2, 'w': 78, 'm': 1},
    ]
    forms = [
        {'id': 'raw', 'prefix': '生', 'suffix': '', 'nutri_mult': 1.0, 'water_mult': 1.0},
        {'id': 'cooked', 'prefix': '熟', 'suffix': '', 'nutri_mult': 1.2, 'water_mult': 0.8},
        {'id': 'dried', 'prefix': '', 'suffix': '干', 'nutri_mult': 1.5, 'water_mult': 0.3},
        {'id': 'salted_dried', 'prefix': '腌', 'suffix': '干', 'nutri_mult': 1.6, 'water_mult': 0.2},
        {'id': 'smoked_dried', 'prefix': '熏', 'suffix': '干', 'nutri_mult': 1.6, 'water_mult': 0.2},
    ]
    stages = [
        {'id': 'fresh', 'name': '新鲜', 'nutri_mult': 1.1, 'water_mult': 1.05, 'prob': 0.1},
        {'id': 'normal', 'name': '', 'nutri_mult': 1.0, 'water_mult': 1.0, 'prob': 0.05},
        {'id': 'dull', 'name': '腐败：暗淡', 'nutri_mult': 0.8, 'water_mult': 0.9, 'prob': 0.05},
        {'id': 'stinking', 'name': '腐败：恶臭', 'nutri_mult': 0.5, 'water_mult': 0.8, 'prob': 0.05},
        {'id': 'slimy', 'name': '腐败：粘稠', 'nutri_mult': 0.2, 'water_mult': 0.7, 'prob': 0.0},
    ]

    items = []
    lines = [
        "import { ItemDefinition, ItemTransformTrigger } from './types';",
        "",
        "export const MeatItems = {"
    ]

    item_data_lines = [
        "export const MeatItemData: Record<string, ItemDefinition> = {"
    ]

    for a in animals:
        for f in forms:
            for i, s in enumerate(stages):
                key = f"{a['id'].upper()}_{f['id'].upper()}_{s['id'].upper()}"
                id_str = f"{a['id']}_{f['id']}_{s['id']}"
                name = f"{s['name']}{f['prefix']}{a['name']}{f['suffix']}"
                
                lines.append(f"    {key}: \"{id_str}\",")
                
                nutrition = f"{{ protein: {(a['p'] * f['nutri_mult'] * s['nutri_mult']):.1f}, fat: {(a['f'] * f['nutri_mult'] * s['nutri_mult']):.1f}, carbs: 0, vitamin: {(a['v'] * s['nutri_mult']):.1f}, water: {(a['w'] * f['water_mult'] * s['water_mult']):.1f}, minerals: {a['m']} }}"
                
                item_data_lines.append(f"    [\"{id_str}\"]: {{")
                item_data_lines.append(f"        id: \"{id_str}\",")
                item_data_lines.append(f"        name: \"{name}\",")
                item_data_lines.append(f"        description: \"{name}。\",")
                item_data_lines.append(f"        volume: {0.5 if 'dried' in f['id'] else 1},")
                item_data_lines.append(f"        nutrition: {nutrition},")
                
                if i < len(stages) - 1:
                    next_sid = stages[i+1]['id']
                    prob = s['prob'] * 0.2 if 'dried' in f['id'] else s['prob']
                    item_data_lines.append(f"        transform: {{ triggerMask: ItemTransformTrigger.TIME, to: \"{a['id']}_{f['id']}_{next_sid}\", probability: {prob} }},")
                
                item_data_lines.append("    },")
                items.append(id_str)

    lines.append("} as const;")
    lines.append("")
    lines.extend(item_data_lines)
    lines.append("};")

    with open(os.path.join(ITEM_MAP_DIR, "meats.ts"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    
    return items

def generate_fruits():
    fruits = [
        {'id': 'banana', 'name': '香蕉', 'desc': '香甜软糯，富含钾。', 'p': 1, 'f': 0, 'c': 23, 'v': 5, 'w': 70, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'grape', 'name': '葡萄', 'desc': '小巧多汁，富含抗氧化剂。', 'p': 1, 'f': 0, 'c': 18, 'v': 4, 'w': 80, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'pear', 'name': '梨', 'desc': '清甜多汁，清热降火。', 'p': 0, 'f': 0, 'c': 15, 'v': 3, 'w': 84, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'mango', 'name': '芒果', 'desc': '热带水果之王，香气浓郁。', 'p': 1, 'f': 0, 'c': 15, 'v': 10, 'w': 83, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'watermelon', 'name': '西瓜', 'desc': '消暑圣品，水分充足。', 'p': 1, 'f': 0, 'c': 8, 'v': 3, 'w': 91, 'm': 1, 'vol': 3, 'slow_decay': False},
        {'id': 'orange', 'name': '橙子', 'desc': '富含维生素C，酸甜可口。', 'p': 1, 'f': 0, 'c': 12, 'v': 15, 'w': 86, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'lemon', 'name': '柠檬', 'desc': '极酸，常用于调味或补充维生素。', 'p': 1, 'f': 0, 'c': 9, 'v': 20, 'w': 88, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'lime', 'name': '青柠', 'desc': '带有独特香气的酸味水果。', 'p': 1, 'f': 0, 'c': 10, 'v': 18, 'w': 88, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'kiwi', 'name': '猕猴桃', 'desc': '维C之王，营养极高。', 'p': 1, 'f': 0, 'c': 15, 'v': 25, 'w': 83, 'm': 1, 'vol': 1, 'slow_decay': False},
        {'id': 'walnut', 'name': '核桃', 'desc': '坚硬的坚果，补脑益智。', 'p': 15, 'f': 65, 'c': 14, 'v': 2, 'w': 4, 'm': 2, 'vol': 1, 'slow_decay': True},
    ]
    stages = [
        {'id': 'fresh', 'prefix': '新鲜的', 'nutri_mult': 1.1, 'water_mult': 1.05, 'prob': 0.08},
        {'id': 'normal', 'prefix': '', 'nutri_mult': 1.0, 'water_mult': 1.0, 'prob': 0.04},
        {'id': 'withered', 'prefix': '蔫枯的', 'nutri_mult': 0.8, 'water_mult': 0.7, 'prob': 0.04},
        {'id': 'moldy', 'prefix': '发霉的', 'nutri_mult': 0.3, 'water_mult': 0.8, 'prob': 0.04},
        {'id': 'rotten', 'prefix': '腐烂的', 'nutri_mult': 0.1, 'water_mult': 0.6, 'prob': 0.0},
    ]

    items = []
    lines = [
        "import { ItemDefinition, ItemTransformTrigger } from './types';",
        "",
        "export const FruitItems = {"
    ]
    item_data_lines = [
        "export const FruitItemData: Record<string, ItemDefinition> = {"
    ]

    for f in fruits:
        for i, s in enumerate(stages):
            id_str = f['id'] if s['id'] == 'normal' else f"{f['id']}_{s['id']}"
            key_base = f['id'].upper()
            
            if s['id'] == 'normal':
                lines.append(f"    {key_base}: \"{id_str}\",")
            
            key = f"{key_base}_{s['id'].upper()}"
            lines.append(f"    {key}: \"{id_str}\",")
            
            name = f"{s['prefix']}{f['name']}"
            nutrition = f"{{ protein: {(f['p'] * s['nutri_mult']):.1f}, fat: {(f['f'] * s['nutri_mult']):.1f}, carbs: {(f['c'] * s['nutri_mult']):.1f}, vitamin: {(f['v'] * s['nutri_mult']):.1f}, water: {(f['w'] * s['water_mult']):.1f}, minerals: {f['m']} }}"
            
            item_data_lines.append(f"    [\"{id_str}\"]: {{")
            item_data_lines.append(f"        id: \"{id_str}\",")
            item_data_lines.append(f"        name: \"{name}\",")
            item_data_lines.append(f"        description: \"{name}。{f['desc']}\",")
            item_data_lines.append(f"        volume: {f['vol']},")
            item_data_lines.append(f"        nutrition: {nutrition},")
            
            if i < len(stages) - 1:
                next_sid = stages[i+1]['id']
                next_id = f['id'] if next_sid == 'normal' else f"{f['id']}_{next_sid}"
                prob = s['prob'] * 0.1 if f['slow_decay'] else s['prob']
                item_data_lines.append(f"        transform: {{ triggerMask: ItemTransformTrigger.TIME, to: \"{next_id}\", probability: {prob} }},")
            
            item_data_lines.append("    },")
            items.append(id_str)

    lines.append("} as const;")
    lines.append("")
    lines.extend(item_data_lines)
    lines.append("};")

    with open(os.path.join(ITEM_MAP_DIR, "fruits.ts"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    
    return items

def generate_tools():
    # 从中央 METALS 提取工具材质
    tool_materials = [m for m in METALS if m.get('is_tool_mat', False)]

    # 基础工具定义
    base_tools = [
        {'id': 'axe', 'name': '斧头', 'desc': '用于采集木材。', 'vol': 4, 'has_mat': True},
        {'id': 'pickaxe', 'name': '镐', 'desc': '开采矿石。高级镐能开采硬度更高的金属。', 'vol': 4, 'has_mat': True},
        {'id': 'shovel', 'name': '铲子', 'desc': '采集土壤、沙子，或清理矿渣。', 'vol': 3, 'has_mat': True},
        {'id': 'saw', 'name': '锯子', 'desc': '将木材加工成更高级的结构件。', 'vol': 2, 'has_mat': False},
        {'id': 'crowbar', 'name': '撬棍', 'desc': '专门用于破坏人造结构，具有较高的 Demolition Power。', 'vol': 3, 'has_mat': False, 'demo': 5},
        {'id': 'hammer', 'name': '锤子', 'desc': '锻造合金的基础工具。', 'vol': 2, 'has_mat': False},
        {'id': 'pliers', 'name': '钳子', 'desc': '夹取高温金属或进行精密电子组装。', 'vol': 1, 'has_mat': False},
        {'id': 'file', 'name': '锉刀', 'desc': '精加工金属表面，减少工具磨损。', 'vol': 1, 'has_mat': False},
        {'id': 'mortar_pestle', 'name': '研钵与研杵', 'desc': '将矿石磨成粉末，或粉碎火药原料。', 'vol': 2, 'has_mat': False},
        {'id': 'fire_starter', 'name': '打火工具', 'desc': '开启“烹饪转换”的必备触发工具。', 'vol': 1, 'has_mat': False},
        {'id': 'whetstone', 'name': '磨刀石', 'desc': '特殊的“维修工具”。', 'vol': 1, 'has_mat': False},
        {'id': 'thermometer', 'name': '温度计', 'desc': '监测存储区域温度。', 'vol': 1, 'has_mat': False},
        {'id': 'geiger_counter', 'name': '盖革计数器', 'desc': '检测放射性毒素。', 'vol': 2, 'has_mat': False},
        {'id': 'pot', 'name': '锅', 'desc': '最通用的厨具。用于煮汤或炖菜。', 'vol': 3, 'has_mat': False},
        {'id': 'pan', 'name': '平底锅', 'desc': '用于煎炸。', 'vol': 2, 'has_mat': False},
        {'id': 'strainer', 'name': '滤网', 'desc': '过滤杂质。', 'vol': 2, 'has_mat': False},
        {'id': 'chef_knife', 'name': '厨刀', 'desc': '处理食材。', 'vol': 1, 'has_mat': False},
        {'id': 'survival_knife', 'name': '多功能生存刀', 'desc': '野外生存全能助手。', 'vol': 1, 'has_mat': False},
        {'id': 'skinning_knife', 'name': '剥皮刀', 'desc': '更高效地从动物尸体上剥取皮毛。', 'vol': 1, 'has_mat': False},
    ]

    # 工具状态定义
    qualities = [
        {'id': 'perfect', 'name': '崭新', 'mult': 1.0, 'prob': 0.1},
        {'id': 'slightly_worn', 'name': '磨损', 'mult': 0.8, 'prob': 0.1},
        {'id': 'damaged', 'name': '破损', 'mult': 0.5, 'prob': 0.1},
        {'id': 'critical', 'name': '报废边缘', 'mult': 0.2, 'prob': 0.1},
        {'id': 'scrap', 'name': '残骸', 'mult': 0.0, 'prob': 0.0},
    ]

    items = []
    lines = [
        "import { ItemDefinition, ItemTransformTrigger } from './types';",
        "",
        "export const ToolItems = {"
    ]
    item_data_lines = [
        "export const ToolItemData: Record<string, ItemDefinition> = {"
    ]

    for bt in base_tools:
        # 如果该工具支持不同材质
        mats = tool_materials if bt['has_mat'] else [{'id': '', 'name': '', 'durability': 0.5, 'power': 1.0, 'elements': {'iron': 0.5}}]
        
        for m in mats:
            for i, q in enumerate(qualities):
                # 生成唯一 ID 和 Key
                mat_id_part = f"{m['id']}_" if m['id'] else ""
                mat_name_part = f"{m['name']}制" if m['name'] else ""
                
                id_str = f"{mat_id_part}{bt['id']}_{q['id']}"
                key_base = f"{bt['id'].upper()}_{m['id'].upper() if m['id'] else 'BASE'}"
                key = f"{key_base}_{q['id'].upper()}"
                
                # 兼容性 Key：如果是崭新的，额外增加一个简写 Key
                if q['id'] == 'perfect':
                    lines.append(f"    {key_base}: \"{id_str}\",")
                
                lines.append(f"    {key}: \"{id_str}\",")
                
                name = f"{q['name']}{mat_name_part}{bt['name']}"
                desc = f"{bt['desc']}当前状态：{q['name']}。"
                
                item_data_lines.append(f"    [\"{id_str}\"]: {{")
                item_data_lines.append(f"        id: \"{id_str}\",")
                item_data_lines.append(f"        name: \"{name}\",")
                item_data_lines.append(f"        description: \"{desc}\",")
                item_data_lines.append(f"        volume: {bt['vol']},")
                
                if 'demo' in bt:
                    item_data_lines.append(f"        demolitionPower: {bt['demo'] * q['mult']},")
                
                if m['elements']:
                    item_data_lines.append(f"        elements: {m['elements']},")
                
                # 磨损转换逻辑
                if i < len(qualities) - 1:
                    next_id = f"{mat_id_part}{bt['id']}_{qualities[i+1]['id']}"
                    prob = q['prob'] / m['durability'] # 耐久度越高，损坏概率越低
                    item_data_lines.append(f"        transform: {{ triggerMask: ItemTransformTrigger.USAGE | ItemTransformTrigger.TIME, to: \"{next_id}\", probability: {prob:.4f} }},")
                
                item_data_lines.append("    },")
                items.append(id_str)

    lines.append("} as const;")
    lines.append("")
    lines.extend(item_data_lines)
    lines.append("};")

    with open(os.path.join(ITEM_MAP_DIR, "tools.ts"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    
    return items

def generate_misc():
    # 棍系列
    stick_materials = [
        {'id': 'wood', 'name': '木棍', 'desc': '基础的木制棍状物。', 'vol': 1},
        {'id': 'steel', 'name': '钢管', 'desc': '坚固的钢制棍状物。', 'vol': 1},
        {'id': 'titanium', 'name': '钛合金管', 'desc': '极轻且极强的钛制棍状物。', 'vol': 1},
    ]
    
    # 毛皮系列
    fur_animals = [
        {'id': 'rabbit', 'name': '兔皮', 'desc': '柔软且保暖。', 'vol': 1},
        {'id': 'deer', 'name': '鹿皮', 'desc': '坚韧且耐磨。', 'vol': 1},
        {'id': 'sheep', 'name': '绵羊皮', 'desc': '极佳的保暖效果。', 'vol': 1},
        {'id': 'goat', 'name': '山羊皮', 'desc': '质地紧密，韧性好。', 'vol': 1},
    ]
    
    # 电池系列
    battery_types = [
        {'id': 'lead_acid', 'name': '铅酸电池', 'desc': '笨重且功率较低。', 'vol': 2, 'radio': 1.0},
        {'id': 'lithium', 'name': '锂电池', 'desc': '标准的高能密度电池。', 'vol': 1, 'radio': 0.5},
        {'id': 'alien', 'name': '能量电池', 'desc': '核心极不稳定，散发着幽光。', 'vol': 3, 'radio': 15.0},
    ]

    items = []
    lines = [
        "import { ItemDefinition } from './types';",
        "",
        "export const MiscItems = {"
    ]
    item_data_lines = [
        "export const MiscItemData: Record<string, ItemDefinition> = {"
    ]

    # 生成棍
    for s in stick_materials:
        key = f"STICK_{s['id'].upper()}"
        id_str = f"{s['id']}_stick"
        lines.append(f"    {key}: \"{id_str}\",")
        item_data_lines.append(f"    [\"{id_str}\"]: {{ id: \"{id_str}\", name: \"{s['name']}\", description: \"{s['desc']}\", volume: {s['vol']} }},")
        items.append(id_str)

    # 生成毛皮
    for f in fur_animals:
        key = f"FUR_{f['id'].upper()}"
        id_str = f"{f['id']}_fur"
        lines.append(f"    {key}: \"{id_str}\",")
        item_data_lines.append(f"    [\"{id_str}\"]: {{ id: \"{id_str}\", name: \"{f['name']}\", description: \"{f['desc']}\", volume: {f['vol']} }},")
        items.append(id_str)

    # 生成电池
    for b in battery_types:
        key = f"BATTERY_{b['id'].upper()}"
        id_str = f"{b['id']}_battery"
        lines.append(f"    {key}: \"{id_str}\",")
        item_data_lines.append(f"    [\"{id_str}\"]: {{ id: \"{id_str}\", name: \"{b['name']}\", description: \"{b['desc']}\", volume: {b['vol']}, radioactivity: {b['radio']} }},")
        items.append(id_str)

    lines.append("} as const;")
    lines.append("")
    lines.extend(item_data_lines)
    lines.append("};")

    with open(os.path.join(ITEM_MAP_DIR, "misc.ts"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    
    return items

def generate_inventory():
    # 重新生成所有定义
    generate_metals()
    generate_meats()
    generate_fruits()
    generate_tools()
    generate_misc()
    
    lines = [
        "import { ECSWorld } from '../../core/ECSCore';",
        "import { formatLargeNumberWithUnits } from '../../tool/LargeNumberUnitFormatter';",
        "import { ItemID } from '../maps/ItemMap';",
        "",
        "/**",
        " * Inventory 组件 - 对象映射型存储",
        " * 使用 Record<ItemID, bigint> 存储，优化稀疏物品存储性能",
        " */",
        "export const Inventory = {",
        "    data: Array.from({ length: ECSWorld.MAX_ENTITIES }, () => ({} as Record<string, bigint>)),",
        "",
        "    /**",
        "     * 获取格式化的物品数量字符串",
        "     */",
        "    getFormatted(eid: number, resource: ItemID): string {",
        "        const val = this.data[eid][resource] || 0n;",
        "        return formatLargeNumberWithUnits(val);",
        "    },",
        "",
        "    /**",
        "     * 增加或减少物品数量",
        "     */",
        "    add(eid: number, resource: ItemID, amount: bigint) {",
        "        const current = this.data[eid][resource] || 0n;",
        "        this.data[eid][resource] = current + amount;",
        "    },",
        "",
        "    /**",
        "     * 直接获取物品数量",
        "     */",
        "    get(eid: number, resource: ItemID): bigint {",
        "        return this.data[eid][resource] || 0n;",
        "    },",
        "",
        "    /**",
        "     * 设置物品数量",
        "     */",
        "    set(eid: number, resource: ItemID, amount: bigint) {",
        "        this.data[eid][resource] = amount;",
        "    },",
        "",
        "    /**",
        "     * 获取实体拥有的所有物品",
        "     */",
        "    getAll(eid: number): Record<string, bigint> {",
        "        return this.data[eid];",
        "    }",
        "};"
    ]
    
    with open(os.path.join(COMPONENTS_DIR, "Inventory.ts"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Successfully generated all definitions and Inventory.ts.")

if __name__ == "__main__":
    generate_inventory()
