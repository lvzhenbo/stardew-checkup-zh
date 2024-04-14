<template>
  <div>
    <NFlex>
      <NH3> 星之果实 </NH3>
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
        <NGi v-for="item in farmerStardropsList" :key="item.id">
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 已经收集了7个星之果实中的
            {{ 7 - item.leftStardrops.length }} 个（完美度：{{
              item.leftStardrops.length > 0 ? '未完成' : '已完成'
            }}）
            <NUl>
              <NLi :class="getAchieveClass(item.leftStardrops.length, 0)">
                星之果实的神秘（找到所有星之果实）
                <NText>{{
                  item.leftStardrops.length > 0
                    ? `——还需要 ${item.leftStardrops.length} 个`
                    : '——已达到'
                }}</NText>
              </NLi>
            </NUl>
            <NCollapseTransition v-if="item.leftStardrops.length > 0" :show="showDetail">
              <NUl>
                <NLi class="before:content-['!'] before:font-bold before:mr-2">
                  剩余未收集星之果实
                </NLi>
                <NOl class="list-decimal">
                  <div v-for="(stardrop, key) of item.leftStardrops" :key="key">
                    <NLi>{{ stardrop }}</NLi>
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
  import { stardrops } from './info';
  import type { Farmer } from '#/results';

  interface FarmerStardrops {
    id: string;
    name: string;
    leftStardrops: string[];
  }

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(false);
  const ifDetail = ref(false);
  const farmerStardropsList = ref<FarmerStardrops[]>([]);
  const { results } = useResultsStore();

  onMounted(() => {
    parseStardrops();
  });

  watch(
    () => data,
    () => {
      parseStardrops();
    },
  );

  const parseStardrops = () => {
    farmerStardropsList.value = [];
    ifDetail.value = false;
    if (results.summary.farmer) {
      const farmer = results.summary.farmer;
      farmerStardropsList.value.push({
        id: farmer.id,
        name: farmer.name,
        leftStardrops: getFarmerStardrops(farmer),
      });
      results.summary.farmer.stardropsCompleted = getFarmerStardrops(farmer).length === 0;
    }

    if (Array.isArray(results.summary.farmhands)) {
      results.summary.farmhands.forEach((farmhand) => {
        farmerStardropsList.value.push({
          id: farmhand.id,
          name: farmhand.name,
          leftStardrops: getFarmerStardrops(farmhand),
        });
        farmhand.stardropsCompleted = getFarmerStardrops(farmhand).length === 0;
      });
    }
  };

  const getFarmerStardrops = (data: Farmer) => {
    const leftStardrops: string[] = [];
    stardrops.forEach((stardrop) => {
      if (!data.mailReceived?.includes(stardrop.name)) {
        leftStardrops.push(stardrop.info);
      }
    });
    if (leftStardrops.length > 0) {
      ifDetail.value = true;
    }
    return leftStardrops;
  };

  const getAchieveClass = (value: number, need: number) => {
    return value <= need
      ? String.raw`before:content-['\2714\0020']`
      : String.raw`before:content-['\2718\0020'] !text-red-500`;
  };
</script>

<style scoped></style>
