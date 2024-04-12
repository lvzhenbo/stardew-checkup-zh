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
