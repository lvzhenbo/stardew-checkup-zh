<template>
  <div>
    <NFlex>
      <NH3> 特别任务 </NH3>
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
        <NGi>
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ results.summary.farmName }} 农场已完成18个<UrlButton
              text="鹈鹕镇的特别任务"
              url="https://zh.stardewvalleywiki.com/%E4%BB%BB%E5%8A%A1#%E9%B9%88%E9%B9%95%E9%95%87%E7%9A%84%E7%89%B9%E5%88%AB%E4%BB%BB%E5%8A%A1%E5%88%97%E8%A1%A8"
            />中的 {{ completedSpecialOrdersNum }} 个
            <NUl>
              <NLi :class="getAchieveClass(completedSpecialOrdersNum, 10)">
                完成所有特别任务
                <NText v-if="completedSpecialOrdersNum < 18">
                  ——还需要 {{ 18 - completedSpecialOrdersNum }} 个
                </NText>
              </NLi>
            </NUl>
            <NCollapseTransition v-if="completedSpecialOrdersNum < 18" :show="showDetail">
              <NUl>
                <NLi class="before:content-['!'] before:font-bold before:mr-2">
                  剩余未完成特别任务
                </NLi>
                <NOl class="list-decimal">
                  <div v-for="(order, key) of leftSpecialOrders" :key="key">
                    <NLi>
                      <UrlButton
                        :text="order.name"
                        :url="`https://zh.stardewvalleywiki.com/%E4%BB%BB%E5%8A%A1#${order.id}`"
                      />
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
  import { specialOrders } from './info';
  import { useResultsStore } from '@/stores/modules/results';

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(false);
  const ifDetail = ref(false);
  const completedSpecialOrdersNum = ref<number>(0);
  const leftSpecialOrders = ref<{ name: string; id: string }[]>([]);
  const { results } = useResultsStore();

  onMounted(() => {
    parseSpecialOrders();
  });

  watch(
    () => data,
    () => {
      parseSpecialOrders();
    },
  );

  const parseSpecialOrders = () => {
    completedSpecialOrdersNum.value = 0;
    leftSpecialOrders.value = [];
    for (const specialOrder in specialOrders) {
      if (Array.isArray(data.completedSpecialOrders.string)) {
        if (data.completedSpecialOrders.string.includes(specialOrder)) {
          completedSpecialOrdersNum.value++;
        } else {
          leftSpecialOrders.value.push(specialOrders[specialOrder]);
        }
      } else {
        leftSpecialOrders.value.push(specialOrders[specialOrder]);
      }
    }
    ifDetail.value = leftSpecialOrders.value.length > 0;
  };

  const getAchieveClass = (value: number, need: number) => {
    return value >= need
      ? String.raw`before:content-['\2714\0020']`
      : String.raw`before:content-['\2718\0020'] !text-red-500`;
  };
</script>

<style scoped></style>
