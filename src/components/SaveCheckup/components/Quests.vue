<template>
  <div>
    <NFlex>
      <NH3> 任务 </NH3>
      <NSwitch v-model:value="showSummary" class="mt-0.5">
        <template #checked> 显示摘要信息 </template>
        <template #unchecked> 隐藏摘要信息 </template>
      </NSwitch>
      <div class="mt-0.5">（没有详细信息）</div>
    </NFlex>
    <NCollapseTransition :show="showSummary" class="mb-6">
      <NGrid x-gap="12" :cols="2">
        <NGi v-for="item in farmerQuestsList" :key="item.id">
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 已完成 {{ item.questNum }} 个求助任务
            <NUl>
              <NLi :class="getAchieveClass(item.questNum, 10)">
                听差（完成10个“需要帮助”任务）
                <NText>{{ getAchieveText(item.questNum, 10) }}</NText>
              </NLi>
              <NLi :class="getAchieveClass(item.questNum, 40)">
                帮了大忙（完成40个“需要帮助”任务）
                <NText>{{ getAchieveText(item.questNum, 40) }}</NText>
              </NLi>
            </NUl>
          </div>
        </NGi>
      </NGrid>
    </NCollapseTransition>
  </div>
</template>

<script setup lang="ts">
  import type { SaveGame } from '#/index';
  import { useResultsStore } from '@/stores/modules/results';

  interface FarmerQuest {
    id: string;
    name: string;
    questNum: number;
  }

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const farmerQuestsList = ref<FarmerQuest[]>([]);

  onMounted(() => {
    parseQuests();
  });

  watch(
    () => data,
    () => {
      parseQuests();
    },
  );

  const parseQuests = () => {
    const { results } = useResultsStore();
    farmerQuestsList.value = [];
    if (results.summary.farmer) {
      farmerQuestsList.value.push({
        id: results.summary.farmer.id,
        name: results.summary.farmer.name,
        questNum: results.summary.farmer.stats?.questsCompleted || 0,
      });
    }
    if (Array.isArray(results.summary.farmhands)) {
      results.summary.farmhands.forEach((farmhand) => {
        farmerQuestsList.value.push({
          id: farmhand.id,
          name: farmhand.name,
          questNum: farmhand.stats?.questsCompleted || 0,
        });
      });
    }
  };

  const getAchieveClass = (value: number, need: number) => {
    return value >= need
      ? String.raw`before:content-['\2714\0020']`
      : String.raw`before:content-['\2718\0020'] !text-red-500`;
  };

  const getAchieveText = (value: number, need: number) => {
    return value >= need ? '——已达到' : `——还需要 ${need - value} 个`;
  };
</script>

<style scoped></style>
