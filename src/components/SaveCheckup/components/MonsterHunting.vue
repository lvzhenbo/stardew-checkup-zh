<template>
  <div>
    <NFlex>
      <NH3> 怪物狩猎 </NH3>
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
        <NGi v-for="item in farmerMonstersList" :key="item.id">
          <div v-if="item.deepestMineLevel > 0" class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 在矿井达到了 {{ Math.min(item.deepestMineLevel, 120) }} 层
            <NUl>
              <NLi :class="getAchieveClass(item.deepestMineLevel, 120)">
                底部（到达矿井的最底层）
                <NText>
                  {{
                    item.deepestMineLevel >= 120
                      ? '——已达到'
                      : `——还需要 ${120 - item.deepestMineLevel} 层`
                  }}
                </NText>
              </NLi>
            </NUl>
          </div>
          <div v-else class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 还没有进入过矿井
            <NUl>
              <NLi :class="getAchieveClass(item.deepestMineLevel, 120)">
                底部（到达矿井的最底层）
                <NText>
                  {{
                    item.deepestMineLevel >= 120
                      ? '——已达到'
                      : `——还需要 ${120 - item.deepestMineLevel} 层`
                  }}
                </NText>
              </NLi>
            </NUl>
          </div>
          <div v-if="item.deepestMineLevel > 120" class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 在骷髅洞穴达到了 {{ item.deepestMineLevel - 120 }} 层
          </div>
          <div v-else class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 还没有进入过骷髅洞穴
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 已经消灭了 {{ item.monstersKilled }} 只怪物
            <NUl>
              <NLi :class="getAchieveClass(item.monstersKilled, 1000)">
                允许进入探险家工会的卧室
                <NText v-if="item.monstersKilled < 1000">
                  {{ `——还需要消灭 ${1000 - item.monstersKilled} 只怪物` }}
                </NText>
              </NLi>
            </NUl>
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ item.name }} 已完成 {{ item.eachMonstersKilled.length }} 个消灭怪物的目标中的
            {{ item.completedGoal }} 个 （完美度：{{
              item.completedGoal < item.eachMonstersKilled.length ? '未完成' : '已完成'
            }}）
            <NUl>
              <NLi :class="getAchieveClass(item.completedGoal, item.eachMonstersKilled.length)">
                城镇守护者（完成探险家公会猎人会长的全部任务）
                <NText>
                  {{
                    item.completedGoal < item.eachMonstersKilled.length
                      ? `——还需要完成 ${item.eachMonstersKilled.length - item.completedGoal} 个`
                      : '——已达到'
                  }}
                </NText>
              </NLi>
            </NUl>
            <NCollapseTransition
              v-if="item.completedGoal < item.eachMonstersKilled.length"
              :show="showDetail"
            >
              <NUl>
                <NLi class="before:content-['!'] before:font-bold before:mr-2">剩余目标</NLi>
                <NOl class="list-decimal">
                  <div v-for="(monstersKilled, key) of item.eachMonstersKilled" :key>
                    <NLi v-if="monstersKilled.count < monstersKilled.goal">
                      <UrlButton
                        :text="monstersKilled.name"
                        :url="`https://zh.stardewvalleywiki.com/%E6%8E%A2%E9%99%A9%E5%AE%B6%E5%85%AC%E4%BC%9A#${monstersKilled.id}`"
                      />
                      ——还需要消灭 {{ monstersKilled.goal - monstersKilled.count }} 只
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
  import type { Farmhands, Player, SaveGame } from '#/index';
  import { useResultsStore } from '@/stores/modules/results';
  import { monstersData } from './info';

  interface FarmerMonsters {
    id: string;
    name: string;
    deepestMineLevel: number;
    monstersKilled: number;
    eachMonstersKilled: {
      name: string;
      goal: number;
      sub: string[];
      id: string;
      count: number;
    }[];
    completedGoal: number;
    completed: boolean;
  }

  const { data } = defineProps<{ data: SaveGame }>();

  const showSummary = ref(true);
  const showDetail = ref(false);
  const ifDetail = ref(false);
  const farmerMonstersList = ref<FarmerMonsters[]>([]);

  onMounted(() => {
    parseMonsters();
  });

  watch(
    () => data,
    () => {
      parseMonsters();
    },
  );

  const parseMonsters = () => {
    const { results } = useResultsStore();
    ifDetail.value = false;

    farmerMonstersList.value = [
      {
        ...getFarmerMonsters(data.player),
        monstersKilled: results.summary.farmer?.stats.monstersKilled || 0,
        ...getEachMonstersKilled(data.player.stats.specificMonstersKilled.item),
      },
    ];

    if (Array.isArray(results.summary.farmhands)) {
      results.summary.farmhands.forEach((farmhand) => {
        const farmhandData = (data.farmhands as Farmhands)?.Farmer.find(
          (f) => f.UniqueMultiplayerID === farmhand.id,
        );
        if (farmhandData) {
          farmerMonstersList.value.push({
            ...getFarmerMonsters(farmhandData),
            monstersKilled: farmhand.stats.monstersKilled || 0,
            ...getEachMonstersKilled(farmhandData.stats.specificMonstersKilled.item),
          });
        }
      });
    }
  };

  const getFarmerMonsters = (data: Player) => {
    return {
      id: data.UniqueMultiplayerID,
      name: data.name,
      deepestMineLevel: data.deepestMineLevel,
    };
  };

  const getAchieveClass = (value: number, need: number) => {
    return value >= need
      ? String.raw`before:content-['\2714\0020']`
      : String.raw`before:content-['\2718\0020'] !text-red-500`;
  };

  const getEachMonstersKilled = (data: { key: { string: string }; value: { int: number } }[]) => {
    let completed = true;
    let completedGoal = 0;
    const eachMonstersKilled = monstersData.map((monster) => {
      return {
        name: monster.name,
        goal: monster.goal,
        sub: monster.sub,
        id: monster.id,
        count: 0,
      };
    });

    data.forEach((item) => {
      eachMonstersKilled.forEach((monster) => {
        if (monster.sub.includes(item.key.string)) {
          monster.count += item.value.int;
        }
      });
    });

    eachMonstersKilled.forEach((monster) => {
      if (monster.count < monster.goal) {
        completed = false;
        ifDetail.value = true;
      } else {
        completedGoal++;
      }
    });

    return { eachMonstersKilled, completedGoal, completed };
  };
</script>

<style scoped></style>
