<template>
  <div>
    <NFlex>
      <NH3> 摘要 </NH3>
      <NSwitch v-model:value="showSummary" class="mt-0.5">
        <template #checked> 显示摘要信息 </template>
        <template #unchecked> 隐藏摘要信息 </template>
      </NSwitch>
      <div class="mt-0.5">（没有详细信息）</div>
    </NFlex>
    <NCollapseTransition :show="showSummary">
      <div class="pl-4 before:content-['\25c8\0020']">
        {{ summary.farmName }} 农场（{{ summary.farmType }}）
      </div>
      <div class="pl-4 before:content-['\25c8\0020']"> 农夫 {{ summary.farmer }} </div>
      <div class="pl-4 before:content-['\25c8\0020']">
        第 {{ summary.year }} 年 {{ summary.currentSeason }} 第 {{ summary.dayOfMonth }} 天
      </div>
      <div class="pl-4 before:content-['\25c8\0020']">
        游戏时间 {{ summary.playHr }} 小时 {{ summary.playMin }} 分钟
      </div>
      <div class="pl-4 before:content-['\25c8\0020']">
        游戏版本 {{ summary.version }}
        {{ summary.versionLabel ? `(${summary.versionLabel})` : '' }}
      </div>
    </NCollapseTransition>
  </div>
</template>

<script setup lang="ts">
  import type { SaveGame } from '#/index';
  import type { Summary } from '#/results';
  import { farmTypes, seasons } from './info';
  import { useResults } from '@/stores/modules/results';

  const { data } = defineProps<{ data: SaveGame }>();

  const summary = ref<Summary>({});
  const showSummary = ref(true);

  onMounted(() => {
    parseSummary();
  });

  watch(
    () => data,
    () => {
      parseSummary();
    },
  );

  const parseSummary = () => {
    summary.value.farmName = data.player.farmName;
    summary.value.farmType = farmTypes[data.whichFarm];
    summary.value.farmer = data.player.name;
    summary.value.dayOfMonth = data.dayOfMonth;
    summary.value.currentSeason = seasons[data.currentSeason];
    summary.value.year = data.year;
    summary.value.playHr = Math.floor(data.player.millisecondsPlayed / 3600000);
    summary.value.playMin = Math.floor((data.player.millisecondsPlayed % 3600000) / 60000);
    if (!data.gameVersion) {
      summary.value.version = '1.2';
      if (data.hasApplied1_4_UpdateChanges) {
        summary.value.version = '1.4';
      } else if (data.hasApplied1_3_UpdateChanges) {
        summary.value.version = '1.3';
      }
    } else {
      summary.value.version = data.gameVersion;
    }
    summary.value.versionLabel = data.gameVersionLabel ?? '';
    const { setSummary } = useResults();
    setSummary(summary.value);
  };
</script>

<style scoped></style>
