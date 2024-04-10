<template>
  <div>
    <NFlex>
      <NH3> 技能 </NH3>
      <NSwitch v-model:value="showSummary" class="mt-0.5">
        <template #checked> 显示摘要信息 </template>
        <template #unchecked> 隐藏摘要信息 </template>
      </NSwitch>
      <NSwitch v-model:value="showDetail" class="mt-0.5">
        <template #checked> 显示详细信息 </template>
        <template #unchecked> 隐藏详细信息 </template>
      </NSwitch>
      <div class="mt-0.5">（没有详细信息）</div>
    </NFlex>
    <NCollapseTransition :show="showSummary" class="mb-6">
      <NGrid x-gap="12" :cols="2">
        <NGi>
          <div class="pl-4 before:content-['\25c8\0020']">
            joh 是 10 级农夫，技能头衔是 农场工人. （完美度：40%）
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            5项技能中有 1 项达到了最高级10级
            <NUl>
              <NLi>
                非凡天赋（任意一种技能达到10级。）
                <NText>——已达到</NText>
              </NLi>
              <NLi class="getAchieveClass(50000)">
                5种技能大师（每种技能都达到10级）
                <NText>——还需要 4 种 </NText>
              </NLi>
            </NUl>
            <NCollapseTransition :show="showDetail">
              <NUl>
                <NLi>剩余未完成技能</NLi>
                <NOl class="list-decimal">
                  <NLi>li 标签</NLi>
                  <NLi>li 标签</NLi>
                  <NLi>li 标签</NLi>
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

  interface FarmerSkills {
    id: string;
    name: string;
    skills: {
      farming: { level: number; points: number };
      fishing: { level: number; points: number };
      foraging: { level: number; points: number };
      mining: { level: number; points: number };
      combat: { level: number; points: number };
    };
    titleLevel: number;
    titleName: string;
  }

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(false);
  const resultsStore = useResultsStore();
  const farmerSkillsList = ref<FarmerSkills[]>([]);

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
    if (resultsStore.results.summary.farmer) {
      const farmer = resultsStore.results.summary.farmer;
      farmerSkillsList.value.push({
        id: farmer.id!,
        name: farmer.name,
        skills: getFarmerSkills(farmer),
        titleLevel: getFarmerTotleLevel(farmer) / 2,
        titleName: getFarmerTitleName(getFarmerTotleLevel(farmer) / 2, farmer.gender),
      });
      resultsStore.results.summary.farmer.totalLevel = getFarmerTotleLevel(farmer);
    }
    if (Array.isArray(resultsStore.results.summary.farmhands)) {
      resultsStore.results.summary.farmhands.forEach((farmhand) => {
        farmerSkillsList.value.push({
          id: farmhand.id!,
          name: farmhand.name,
          skills: getFarmerSkills(farmhand),
          titleLevel: getFarmerTotleLevel(farmhand),
          titleName: getFarmerTitleName(getFarmerTotleLevel(farmhand) / 2, farmhand.gender),
        });
        farmhand.totalLevel = getFarmerTotleLevel(farmhand);
      });
    }
  };

  const getFarmerSkills = (data: Farmer) => {
    return {
      farming: {
        level: data.farmingLevel,
        points: data.experiencePoints[0],
      },
      fishing: {
        level: data.fishingLevel,
        points: data.experiencePoints[1],
      },
      foraging: {
        level: data.foragingLevel,
        points: data.experiencePoints[2],
      },
      mining: {
        level: data.miningLevel,
        points: data.experiencePoints[3],
      },
      combat: {
        level: data.combatLevel,
        points: data.experiencePoints[4],
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
</script>

<style scoped></style>
