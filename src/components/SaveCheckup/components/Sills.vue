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
  import type { SaveGame } from '#/index';

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(false);

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
    console.log(data);
  };
</script>

<style scoped></style>
