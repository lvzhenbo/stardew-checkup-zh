<template>
  <div>
    <NFlex>
      <NH3> 家庭和房子 </NH3>
      <NSwitch v-model:value="showSummary" class="mt-0.5">
        <template #checked> 显示摘要信息 </template>
        <template #unchecked> 隐藏摘要信息 </template>
      </NSwitch>
      <div class="mt-0.5">（没有详细信息）</div>
    </NFlex>
    <NCollapseTransition :show="showSummary" class="mb-6">
      <NGrid x-gap="12" :cols="2">
        <NGi v-for="item in farmerFamilyList" :key="item.id">
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 的配偶/室友是 {{ item.spouse ? villagers[item.spouse] : '（未婚）' }}
          </div>
        </NGi>
      </NGrid>
    </NCollapseTransition>
  </div>
</template>

<script setup lang="ts">
  import type { Farmhands, SaveGame } from '#/index';
  import { useResultsStore } from '@/stores/modules/results';
  import { villagers } from './info';

  interface FarmerFamily {
    id: string;
    name: string;
    spouse: string;
  }

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const farmerFamilyList = ref<FarmerFamily[]>([]);
  const { results } = useResultsStore();

  onMounted(() => {
    parseFamily();
  });

  watch(
    () => data,
    () => {
      parseFamily();
    },
  );

  const parseFamily = () => {
    if (results.summary.farmer) {
      farmerFamilyList.value = [
        {
          id: results.summary.farmer.id,
          name: results.summary.farmer.name,
          spouse: data.player.spouse,
        },
      ];
    }

    if (Array.isArray(results.summary.farmhands)) {
      results.summary.farmhands.forEach((farmhand) => {
        const farmhandData = (data.farmhands as Farmhands)?.Farmer.find(
          (f) => f.UniqueMultiplayerID === farmhand.id,
        );
        farmerFamilyList.value.push({
          id: farmhand.id,
          name: farmhand.name,
          spouse: farmhandData!.spouse,
        });
      });
    }
  };
</script>

<style scoped></style>
