<template>
  <div id="skills">
    <NFlex>
      <NH3> 技能 </NH3>
      <NSwitch v-model:value="showSummary" class="mt-0.5">
        <template #checked> 显示摘要信息 </template>
        <template #unchecked> 隐藏摘要信息 </template>
      </NSwitch>
      <NSwitch v-if="ifDetail" v-model:value="showDetail" class="mt-0.5">
        <template #checked> 显示详细信息 </template>
        <template #unchecked> 隐藏详细信息 </template>
      </NSwitch>
      <div v-else class="mt-0.5">（没有详细信息）</div>
    </NFlex>
    <NCollapseTransition :show="showSummary" class="mb-6">
      <NGrid x-gap="12" :cols="2">
        <NGi v-for="item in farmerSkillsList" :key="item.id">
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 是 {{ item.titleLevel }} 级农夫，
            <UrlButton
              text="技能头衔"
              url="https://zh.stardewvalleywiki.com/%E6%8A%80%E8%83%BD#%E6%8A%80%E8%83%BD%E5%A4%B4%E8%A1%94"
            />是 {{ item.titleName }}. （完美度：{{ item.titleLevel / 0.25 }}%）
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            5项技能中有 {{ item.maxSkillNum }} 项达到了最高级10级
            <NUl>
              <NLi :class="getAchieveClass(item.maxSkillNum, 1)">
                非凡天赋（任意一种技能达到10级）
                <NText>{{ getAchieveText(item.maxSkillNum, 1) }}</NText>
              </NLi>
              <NLi :class="getAchieveClass(item.maxSkillNum, 5)">
                5种技能大师（每种技能都达到10级）
                <NText>{{ getAchieveText(item.maxSkillNum, 5) }}</NText>
              </NLi>
            </NUl>
            <NCollapseTransition v-if="item.maxSkillNum < 5" :show="showDetail">
              <NUl>
                <NLi class="before:content-['!'] before:font-bold before:mr-2">剩余未完成技能</NLi>
                <NOl class="list-decimal">
                  <div v-for="(skill, key) of item.skills" :key>
                    <NLi v-if="skill.level < 10">
                      <UrlButton
                        :text="skill.name"
                        :url="`https://zh.stardewvalleywiki.com/${skill.name}`"
                      />
                      （等级{{ skill.level }}） 距离下一级还需要
                      {{ levelToPoints[skill.level] - skill.points }} 点经验，距离满级还需要
                      {{ 15000 - skill.points }} 点经验。
                    </NLi>
                  </div>
                </NOl>
              </NUl>
            </NCollapseTransition>
          </div>
        </NGi>
      </NGrid>
    </NCollapseTransition>
  </div>
</template>

<script setup lang="ts">
  import type { Gender, SaveGame } from '#/index';
  import type { Farmer } from '#/results';
  import { useResultsStore } from '@/stores/modules/results';
  import { levelToPoints } from './info';

  interface FarmerSkills {
    id: string;
    name: string;
    skills: {
      farming: { level: number; points: number; name: string };
      fishing: { level: number; points: number; name: string };
      foraging: { level: number; points: number; name: string };
      mining: { level: number; points: number; name: string };
      combat: { level: number; points: number; name: string };
    };
    titleLevel: number;
    titleName: string;
    maxSkillNum: number;
  }

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(false);
  const resultsStore = useResultsStore();
  const farmerSkillsList = ref<FarmerSkills[]>([]);
  const ifDetail = ref(false);

  onMounted(() => {
    parseSkills();
  });

  watch(
    () => data,
    () => {
      parseSkills();
    },
  );

  const parseSkills = () => {
    farmerSkillsList.value = [];
    ifDetail.value = false;
    if (resultsStore.results.summary.farmer) {
      const farmer = resultsStore.results.summary.farmer;
      farmerSkillsList.value.push({
        id: farmer.id,
        name: farmer.name,
        skills: getFarmerSkills(farmer),
        titleLevel: getFarmerTotleLevel(farmer) / 2,
        titleName: getFarmerTitleName(getFarmerTotleLevel(farmer) / 2, farmer.gender),
        maxSkillNum: getMaxSkillNum(farmer),
      });
      resultsStore.results.summary.farmer.totalLevel = getFarmerTotleLevel(farmer);
      resultsStore.results.summary.farmer.maxSkillNum = getMaxSkillNum(farmer);
      if (getFarmerTotleLevel(farmer) < 50) {
        ifDetail.value = true;
      }
    }
    if (Array.isArray(resultsStore.results.summary.farmhands)) {
      resultsStore.results.summary.farmhands.forEach((farmhand) => {
        farmerSkillsList.value.push({
          id: farmhand.id,
          name: farmhand.name,
          skills: getFarmerSkills(farmhand),
          titleLevel: getFarmerTotleLevel(farmhand),
          titleName: getFarmerTitleName(getFarmerTotleLevel(farmhand) / 2, farmhand.gender),
          maxSkillNum: getMaxSkillNum(farmhand),
        });
        farmhand.totalLevel = getFarmerTotleLevel(farmhand);
        farmhand.maxSkillNum = getMaxSkillNum(farmhand);
        if (getFarmerTotleLevel(farmhand) < 50) {
          ifDetail.value = true;
        }
      });
    }
  };

  const getFarmerSkills = (data: Farmer) => {
    return {
      farming: {
        level: data.farmingLevel,
        points: data.experiencePoints[0],
        name: '耕种',
      },
      fishing: {
        level: data.fishingLevel,
        points: data.experiencePoints[1],
        name: '钓鱼',
      },
      foraging: {
        level: data.foragingLevel,
        points: data.experiencePoints[2],
        name: '采集',
      },
      mining: {
        level: data.miningLevel,
        points: data.experiencePoints[3],
        name: '采矿',
      },
      combat: {
        level: data.combatLevel,
        points: data.experiencePoints[4],
        name: '战斗',
      },
    };
  };
  const getFarmerTotleLevel = (data: Farmer) => {
    return (
      data.farmingLevel +
      data.fishingLevel +
      data.foragingLevel +
      data.miningLevel +
      data.combatLevel
    );
  };
  const getFarmerTitleName = (level: number, gender: Gender) => {
    if (level > 24) {
      return '农夫';
    } else if (level > 22) {
      return '牧场主';
    } else if (level > 20) {
      return '种植者';
    } else if (level > 18) {
      return '农场管家';
    } else if (level > 16) {
      return `农场${gender === 'Male' ? '男孩' : '女孩'}`;
    } else if (level > 14) {
      return '农夫条款';
    } else if (level > 12) {
      return '小农场主';
    } else if (level > 10) {
      return '锄地机';
    } else if (level > 8) {
      return '农场工人';
    } else if (level > 6) {
      return '牛仔';
    } else if (level > 4) {
      return '乡巴佬';
    } else if (level > 2) {
      return '新手';
    } else {
      return '新人';
    }
  };

  const getMaxSkillNum = (data: Farmer) => {
    let num = 0;
    if (data.farmingLevel === 10) {
      num++;
    }
    if (data.fishingLevel === 10) {
      num++;
    }
    if (data.foragingLevel === 10) {
      num++;
    }
    if (data.miningLevel === 10) {
      num++;
    }
    if (data.combatLevel === 10) {
      num++;
    }
    return num;
  };

  const getAchieveClass = (value: number, need: number) => {
    return value >= need
      ? String.raw`before:content-['\2714\0020']`
      : String.raw`before:content-['\2718\0020'] !text-red-500`;
  };

  const getAchieveText = (value: number, need: number) => {
    return value >= need ? '——已达到' : `——还需要 ${need - value} 种`;
  };
</script>

<style scoped></style>
