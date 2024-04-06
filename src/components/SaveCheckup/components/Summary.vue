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
    <NCollapseTransition :show="showSummary" class="mb-6">
      <div class="pl-4 before:content-['\25c8\0020']">
        {{ summary.farmName }} 农场（{{ summary.farmType }}）
      </div>
      <div class="pl-4 before:content-['\25c8\0020']">
        农场主 {{ summary.farmer?.name }}
        {{
          summary.farmhands
            ? `和 帮手 ${summary.farmhands.map((item) => item.name).join('、')}`
            : ''
        }}
      </div>
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
  import type { Player, SaveGame } from '#/index';
  import type { Farmer, Summary } from '#/results';
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
    summary.value.farmer = getFarmerData(data.player);
    if (typeof data.farmhands !== 'string' && Array.isArray(data.farmhands.Farmer)) {
      summary.value.farmhands = [];
      data.farmhands.Farmer.forEach((farmhand) => {
        if (farmhand.userID) {
          summary.value.farmhands?.push(getFarmerData(farmhand));
        }
      });
    }
    summary.value.dayOfMonth = data.dayOfMonth;
    summary.value.currentSeason = seasons[data.currentSeason];
    summary.value.year = data.year;
    summary.value.playHr = Math.floor(data.player.millisecondsPlayed / 3600000);
    summary.value.playMin = Math.floor((data.player.millisecondsPlayed % 3600000) / 60000);
    summary.value.version = data.gameVersion;
    summary.value.versionLabel = data.gameVersionLabel ?? '';
    useResults().setSummary(summary.value);
  };

  const getFarmerData = (data: Player): Farmer => {
    const stats: Farmer['stats'] = {};
    data.stats.Values.item.forEach((item) => {
      stats[item.key.string] = item.value.unsignedInt;
    });
    return {
      name: data.name,
      id: data.UniqueMultiplayerID,
      stats,
      mailReceived: data.mailReceived.string,
      eventsSeen: data.eventsSeen.int,
      experiencePoints: data.experiencePoints.int,
    };
  };
</script>

<style scoped></style>
