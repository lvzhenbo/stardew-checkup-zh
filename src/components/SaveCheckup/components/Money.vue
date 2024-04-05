<template>
  <div>
    <NFlex>
      <NH3> 金钱 </NH3>
      <NSwitch v-model:value="showSummary" class="mt-0.5">
        <template #checked> 显示摘要信息 </template>
        <template #unchecked> 隐藏摘要信息 </template>
      </NSwitch>
    </NFlex>
    <NCollapseTransition :show="showSummary">
      <div class="pl-4 before:content-['\25c8\0020']">
        {{ results.summary.farmName }} 农场已经赚取了
        {{ new Intl.NumberFormat().format(money.totalMoneyEarned!) }} 金
      </div>
      <!-- <div class="pl-4 before:content-['\25c8\0020']"> 农夫 {{ summary.farmer }} </div>
      <div class="pl-4 before:content-['\25c8\0020']">
        第 {{ summary.year }} 年 {{ summary.currentSeason }} 第 {{ summary.dayOfMonth }} 天
      </div>
      <div class="pl-4 before:content-['\25c8\0020']">
        游戏时间 {{ summary.playHr }} 小时 {{ summary.playMin }} 分钟
      </div>
      <div class="pl-4 before:content-['\25c8\0020']">
        游戏版本 {{ summary.version }}
        {{ summary.versionLabel ? `(${summary.versionLabel})` : '' }}
      </div> -->
    </NCollapseTransition>
  </div>
</template>

<script setup lang="ts">
  import type { SaveGame } from '#/index';
  import type { Money } from '#/results';
  import { useResults } from '@/stores/modules/results';

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const { results } = useResults();
  const money = ref<Money>({});

  onMounted(() => {
    parseMoney();
  });

  watch(
    () => data,
    () => {
      parseMoney();
    },
  );

  const parseMoney = () => {
    money.value.totalMoneyEarned = data.player.totalMoneyEarned;
    useResults().setMoney(money.value);
  };
</script>

<style scoped></style>
