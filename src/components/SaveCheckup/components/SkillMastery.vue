<template>
  <div>
    <NFlex>
      <NH3> 精通技能 </NH3>
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
        <NGi v-for="item in farmerMasterySkillList" :key="item.id">
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 有 {{ item.maxSkillNum }} 项技能达到了最高级
            <NUl>
              <NLi :class="getAchieveClass(item.maxSkillNum, 5)">
                可以进入精通山洞
                <NText v-if="item.maxSkillNum < 5">
                  ——还需要 {{ 5 - item.maxSkillNum }} 个技能达到满级——
                  <NButton tag="a" type="primary" text href="#skills"> 请参照上面的要求 </NButton>
                </NText>
              </NLi>
            </NUl>
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 已获得 {{ item.masteryExp }} 点精通经验
            <NUl>
              <NLi :class="getAchieveClass(item.masteryExp, 100000)">
                获得 100000 点精通经验
                <NText v-if="item.masteryExp < 100000">
                  ——还需要
                  {{ masteryLevelToPoints.find((num) => num > item.masteryExp)! - item.masteryExp }}
                  点精通经验升级到下一级，总共还需要
                  {{ 100000 - item.masteryExp }} 点精通经验达到满级
                </NText>
              </NLi>
            </NUl>
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 已选择了 5 项精通技能中的 {{ item.selectSkillNum }} 项技能
            <NUl>
              <NLi :class="getAchieveClass(item.selectSkillNum, 5)">
                获得所有精通技能
                <NText v-if="item.selectSkillNum < 5">
                  ——还需要 {{ 5 - item.selectSkillNum }} 项
                </NText>
              </NLi>
            </NUl>
            <NCollapseTransition v-if="item.selectSkillNum < 5" :show="showDetail">
              <NUl>
                <NLi class="before:content-['!'] before:font-bold before:mr-2">剩余精通技能</NLi>
                <NOl class="list-decimal">
                  <div v-for="(skill, key) of item.leftSkill" :key>
                    <NLi>
                      {{ skill }}
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
  import type { SaveGame } from '#/index';
  import { useResultsStore } from '@/stores/modules/results';
  import { masteryLevelToPoints } from './info';
  import { skills } from './info';
  import type { Farmer } from '#/results';

  interface FarmerMasterySkill {
    id: string;
    name: string;
    masteryExp: number;
    maxSkillNum: number;
    selectSkillNum: number;
    leftSkill: string[];
  }

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(false);
  const resultsStore = useResultsStore();
  const farmerMasterySkillList = ref<FarmerMasterySkill[]>([]);
  const ifDetail = ref(false);

  onMounted(() => {
    parseSkillMastery();
  });

  watch(
    () => data,
    () => {
      parseSkillMastery();
    },
  );

  const parseSkillMastery = () => {
    farmerMasterySkillList.value = [];
    ifDetail.value = false;
    if (resultsStore.results.summary.farmer) {
      const farmer = resultsStore.results.summary.farmer;
      farmerMasterySkillList.value.push({
        id: farmer.id,
        name: farmer.name,
        masteryExp: farmer.stats.MasteryExp || 0,
        maxSkillNum: farmer.maxSkillNum!,
        selectSkillNum: getSelectSkill(farmer).selectSkillNum,
        leftSkill: getSelectSkill(farmer).leftSkill,
      });
    }
    if (Array.isArray(resultsStore.results.summary.farmhands)) {
      resultsStore.results.summary.farmhands.forEach((farmhand) => {
        farmerMasterySkillList.value.push({
          id: farmhand.id,
          name: farmhand.name,
          masteryExp: farmhand.stats.MasteryExp || 0,
          maxSkillNum: farmhand.maxSkillNum!,
          selectSkillNum: getSelectSkill(farmhand).selectSkillNum,
          leftSkill: getSelectSkill(farmhand).leftSkill,
        });
      });
    }
  };

  const getAchieveClass = (value: number, need: number) => {
    return value >= need
      ? String.raw`before:content-['\2714\0020']`
      : String.raw`before:content-['\2718\0020'] !text-red-500`;
  };

  const getSelectSkill = (farmer: Farmer) => {
    const value: { leftSkill: string[]; selectSkillNum: number } = {
      leftSkill: [],
      selectSkillNum: 0,
    };
    for (let i = 0; i < skills.length; i++) {
      if (farmer.stats[`mastery_${i}`] === 1) {
        value.selectSkillNum++;
      } else {
        value.leftSkill.push(skills[i]);
        ifDetail.value = true;
      }
    }
    return value;
  };
</script>

<style scoped></style>
