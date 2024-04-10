<template>
  <div>
    <NFlex>
      <NH3> 金钱 </NH3>
      <NSwitch v-model:value="showSummary" class="mt-0.5">
        <template #checked> 显示摘要信息 </template>
        <template #unchecked> 隐藏摘要信息 </template>
      </NSwitch>
      <NSwitch v-if="money.separateWallets" v-model:value="showDetail" class="mt-0.5">
        <template #checked> 显示详细信息 </template>
        <template #unchecked> 隐藏详细信息 </template>
      </NSwitch>
      <div v-else class="mt-0.5">（没有详细信息）</div>
    </NFlex>
    <NCollapseTransition :show="showSummary" class="mb-6">
      <div class="pl-4 before:content-['\25c8\0020']">
        {{ results.summary.farmName }} 农场已经赚取了 {{ formatNumber(money.totalMoneyEarned!) }} 金
        <NUl>
          <NLi :class="getAchieveClass(15000)">
            新手（获得15,000金）
            <NText>{{ getAchieveText(15000) }}</NText>
          </NLi>
          <NLi :class="getAchieveClass(50000)">
            牛仔（获得50,000金）
            <NText>{{ getAchieveText(50000) }}</NText>
          </NLi>
          <NLi :class="getAchieveClass(250000)">
            农场主（获得250,000金）
            <NText>{{ getAchieveText(250000) }}</NText>
          </NLi>
          <NLi :class="getAchieveClass(1000000)">
            百万富翁（获得1,000,000金）
            <NText>{{ getAchieveText(1000000) }}</NText>
          </NLi>
          <NLi :class="getAchieveClass(10000000)">
            千万富翁（获得10,000,000金）（隐藏成就）
            <NText>{{ getAchieveText(10000000) }}</NText>
          </NLi>
        </NUl>
      </div>
      <NCollapseTransition
        v-if="money.separateWallets"
        :show="showDetail"
        class="pl-4 before:content-['\25c8\0020']"
      >
        收入明细
        <NUl class="list-disc">
          <NLi v-for="(item, index) in moneyEarnedList" :key="index">
            {{ item.name }} 赚取了 {{ formatNumber(item.money) }} 金
          </NLi>
          <NLi v-if="moneyEarned !== money.totalMoneyEarned">
            不明{{ money.totalMoneyEarned! - moneyEarned > 0 ? '盈余' : '亏损' }}
            {{ formatNumber(Math.abs(money.totalMoneyEarned! - moneyEarned)) }}
            金
          </NLi>
        </NUl>
      </NCollapseTransition>
    </NCollapseTransition>
  </div>
</template>

<script setup lang="ts">
  import type { SaveGame } from '#/index';
  import type { Money } from '#/results';
  import { useResultsStore } from '@/stores/modules/results';

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(true);
  const { results } = useResultsStore();
  const money = ref<Money>({});
  const moneyEarned = ref<number>(0);
  const moneyEarnedList = ref<{ name: string; money: number }[]>([]);

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
    money.value.separateWallets = data.player.useSeparateWallets;
    if (money.value.separateWallets) {
      moneyEarnedList.value.push({
        name: results.summary.farmer!.name!,
        money: results.summary.farmer!.stats!.individualMoneyEarned || 0,
      });
      moneyEarned.value += results.summary.farmer!.stats!.individualMoneyEarned || 0;
      if (Array.isArray(results.summary.farmhands)) {
        results.summary.farmhands.forEach((farmhand) => {
          moneyEarnedList.value.push({
            name: farmhand.name!,
            money: farmhand.stats!.individualMoneyEarned || 0,
          });
          moneyEarned.value += farmhand.stats!.individualMoneyEarned || 0;
        });
      }
    }
    useResultsStore().setMoney(money.value);
  };

  const getAchieveClass = (value: number) => {
    return money.value.totalMoneyEarned! >= value
      ? String.raw`before:content-['\2714\0020']`
      : String.raw`before:content-['\2718\0020'] !text-red-500`;
  };

  const getAchieveText = (value: number) => {
    return money.value.totalMoneyEarned! >= value
      ? '——已达到'
      : `——还需要 ${formatNumber(value - money.value.totalMoneyEarned!)} 金`;
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat().format(value);
  };
</script>

<style scoped></style>
