export const seasons = {
  spring: '春季',
  summer: '夏季',
  fall: '秋季',
  winter: '冬季',
};
export const farmTypes = {
  0: '标准农场',
  1: '河边农场',
  2: '森林农场',
  3: '山顶农场',
  4: '荒野农场',
  5: '四角农场',
  6: '海滩农场',
  MeadowlandsFarm: '草原农场',
};

export const levelToPoints = [100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];
export const masteryLevelToPoints = [0, 10000, 25000, 45000, 70000, 100000];
export const skills = ['耕种', '钓鱼', '采集', '采矿', '战斗'];

export const specialOrders: {
  [key: string]: { name: string; id: string };
} = {
  Caroline: { name: '岛屿食材', id: 'Island_Ingredients' },
  Clint: { name: '洞穴巡查', id: 'Cave_Patrol' },
  Demetrius: { name: '水生物泛滥', id: 'Aquatic_Overpopulation' },
  Demetrius2: { name: '生态平衡', id: 'Biome_Balance' },
  Emily: { name: '宝石能量', id: 'Rock_Rejuvenation' },
  Evelyn: { name: '给乔治的礼物', id: 'Gifts_for_George' },
  Gunther: { name: '历史的碎片', id: 'Fragments_of_the_past' },
  Gus: { name: '格斯的著名煎蛋卷', id: 'Gus.27_Famous_Omelet' },
  Lewis: { name: '农作物订单', id: 'Crop_Order' },
  Linus: { name: '社区清理', id: 'Community_Cleanup' },
  Pam: { name: '烈酒', id: 'The_Strong_Stuff' },
  Pierre: { name: '皮埃尔优选', id: 'Pierre.27s_Prime_Produce' },
  Robin: { name: '罗宾的项目', id: 'Robin.27s_Project' },
  Robin2: { name: '罗宾的资源活动', id: 'Robin.27s_Resource_Rush' },
  Willy: { name: '需要多汁的虫子！', id: 'Juicy_Bugs_Wanted' },
  Willy2: { name: '热带鱼', id: 'Tropical_Fish' },
  Wizard: { name: '奇特物质', id: 'A_Curious_Substance' },
  Wizard2: { name: '五彩胶冻', id: 'Prismatic_Jelly' },
};

export const monstersData = [
  {
    name: '史莱姆',
    goal: 1000,
    sub: ['Green Slime', 'Frost Jelly', 'Sludge', 'Tiger Slime'],
    id: 'Slime',
  },
  {
    name: '虚空怪',
    goal: 150,
    sub: ['Shadow Brute', 'Shadow Shaman', 'Shadow Sniper'],
    id: 'Void_Spirit',
  },
  {
    name: '蝙蝠',
    goal: 200,
    sub: ['Bat', 'Frost Bat', 'Lava Bat', 'Iridium Bat'],
    id: 'Bat',
  },
  {
    name: '骷髅',
    goal: 50,
    sub: ['Skeleton', 'Skeleton Mage'],
    id: 'Skeleton',
  },
  {
    name: '山洞昆虫',
    goal: 80,
    sub: ['Bug', 'Fly', 'Grub'],
    id: 'Cave_Insect',
  },
  {
    name: '掘地虫',
    goal: 30,
    sub: ['Duggy', 'Magma Duggy'],
    id: 'Duggy',
  },
  {
    name: '灰尘精灵',
    goal: 500,
    sub: ['Dust Spirit'],
    id: 'Dust_Sprite',
  },
  {
    name: '岩石蟹',
    goal: 60,
    sub: ['Rock Crab', 'Lava Crab', 'Iridium Crab'],
    id: 'Rock_Crabs.EF.BC.9A',
  },
  {
    name: '木乃伊',
    goal: 100,
    sub: ['Mummy'],
    id: 'Mummy',
  },
  {
    name: '霸王喷火龙',
    goal: 50,
    sub: ['Pepper Rex'],
    id: 'Pepper_Rex',
  },
  {
    name: '飞蛇',
    goal: 250,
    sub: ['Serpent', 'Royal Serpent'],
    id: 'Serpent',
  },
  {
    name: '熔岩精灵',
    goal: 150,
    sub: ['Magma Sprite', 'Magma Sparker'],
    id: 'Magma_Sprite',
  },
];

export const stardrops = [
  {
    name: 'CF_Fair',
    info: '在星露谷展览会上购买，价格为2,000星星币',
  },
  {
    name: 'CF_Mines',
    info: '矿井首次到达100层，打开宝箱获得',
  },
  {
    name: 'CF_Spouse',
    info: '当与配偶（或者室友科罗布斯）好感度到达12.5颗心时，与其对话获得',
  },
  {
    name: 'CF_Sewer',
    info: '在下水道的科罗布斯处购买，价格为20,000金',
  },
  {
    name: 'CF_Statue',
    info: '给秘密森林的老坎诺利大师赠予一个宝石甜莓后获得',
  },
  {
    name: 'CF_Fish',
    info: '完成垂钓大师成就后，从威利的信中收到',
  },
  {
    name: 'museumComplete',
    info: '完成全套收集成就（捐赠所有95种物品到博物馆）后，从博物馆获得',
  },
];
