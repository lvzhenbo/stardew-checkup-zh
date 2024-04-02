<template>
  <div class="bg-[#ffe0b0] py-2 px-4 m-4 rounded-2xl border-4 border-[#804000]">
    <NH2> 选择存档文件 </NH2>
    <NP>
      选择下面的输出首选项，然后选择你的存档文件。<NText italic>摘要信息</NText>
      是展示成就或目标是否完成，<NText italic>详细信息</NText>
      是展示NPC事件清单或需要物品的完整列表。<NText italic>新内容</NText>
      是1.6版本新增内容。
    </NP>
    <NForm label-placement="left">
      <NFormItem label="输出首选项（旧内容）：">
        <NRadioGroup value="hide_details">
          <NSpace>
            <NRadio value="show_all"> 显示摘要信息和详细信息 </NRadio>
            <NRadio value="hide_details"> 显示摘要信息并隐藏详细信息 </NRadio>
            <NRadio value="hide_all"> 隐藏摘要信息和详细信息 </NRadio>
          </NSpace>
        </NRadioGroup>
      </NFormItem>
      <NFormItem label="输出首选项（新内容）：">
        <NRadioGroup value="hide_all">
          <NSpace>
            <NRadio value="show_all"> 显示摘要信息和详细信息 </NRadio>
            <NRadio value="hide_details"> 显示摘要信息并隐藏详细信息 </NRadio>
            <NRadio value="hide_all"> 隐藏摘要信息和详细信息 </NRadio>
          </NSpace>
        </NRadioGroup>
      </NFormItem>
      <NFormItem label="选择存档文件开始检查：">
        <NUpload drag :max="1" @change="fileChange">
          <NButton type="primary"> 选择文件 </NButton>
        </NUpload>
      </NFormItem>
    </NForm>
    <NP>
      请使用以你的农民名字或者农场名字和ID号为文件名的完整存档文件，例如
      <NText code>Fred_148093307</NText>
      。不要使用<NText code>SaveGameInfo</NText>文件，因为它不包含足够的信息。
    </NP>
    <NP> 默认存档文件位置在： </NP>
    <NUl class="list-disc">
      <NLi>Windows: <NText code>%AppData%\StardewValley\Saves\</NText></NLi>
      <NLi>Mac OSX & Linux: <NText code>~/.config/StardewValley/Saves/</NText></NLi>
      <NLi>
        Proton Steam (Ubuntu):
        <NText code>
          ~/.steam/debian-installation/steamapps/compatdata/413150/pfx/drive_c/users/steamuser/AppData/Roaming/StardewValley/Saves/
        </NText>
      </NLi>
    </NUl>
  </div>
  <div v-if="showResults" class="bg-[#ffe0b0] py-2 px-4 m-4 rounded-2xl border-4 border-[#804000]">
    <NH2> 检查结果 </NH2>
    <NProgress
      v-if="!loadDown"
      type="line"
      :percentage="percentage"
      :indicator-placement="'inside'"
    />
    <div v-else>
      <div>
        <NFlex>
          <NH3> 摘要 </NH3>
          <NSwitch v-model:value="show" class="mt-0.5">
            <template #checked> 显示摘要信息 </template>
            <template #unchecked> 隐藏摘要信息 </template>
          </NSwitch>
        </NFlex>
        <NCollapseTransition :show="show">
          <div class="pl-4 before:content-['\25c8\0020']">
            {{ results.summary.farmName }} 农场（{{ results.summary.farmType }}）
          </div>
          <div class="pl-4 before:content-['\25c8\0020']"> 农夫 {{ results.summary.farmer }} </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            第 {{ results.summary.year }} 年 {{ results.summary.currentSeason }} 第
            {{ results.summary.dayOfMonth }} 天
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            游戏时间 {{ results.summary.playHr }} 小时 {{ results.summary.playMin }} 分钟
          </div>
          <div class="pl-4 before:content-['\25c8\0020']">
            游戏版本 {{ results.summary.version }}
            {{ results.summary.versionLabel ? `(${results.summary.versionLabel})` : '' }}
          </div>
        </NCollapseTransition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { UploadFileInfo } from 'naive-ui';
  import { XMLParser } from 'fast-xml-parser';
  import type { SaveData, SaveGame } from '#/index';

  const percentage = ref(0);
  const showResults = ref(false);
  const loadDown = ref(false);
  const show = ref(true);
  const seasons = {
    spring: '春季',
    summer: '夏季',
    fall: '秋季',
    winter: '冬季',
  };
  const farmTypes = {
    0: '标准农场',
    1: '河边农场',
    2: '森林农场',
    3: '山顶农场',
    4: '荒野农场',
    5: '四角农场',
    6: '海滩农场',
    MeadowlandsFarm: '草原农场',
  };
  const results = ref({
    summary: {
      showDetailsButton: false,
      farmName: '',
      farmType: '',
      farmer: '',
      dayOfMonth: 1,
      currentSeason: 'spring',
      year: 1,
      playHr: 0,
      playMin: 0,
      version: '',
      versionLabel: '',
    },
  });

  const fileChange = (options: {
    file: UploadFileInfo;
    fileList: Array<UploadFileInfo>;
    event?: Event;
  }) => {
    if (options.file.file) {
      showResults.value = true;
      console.log(options);
      const reader = new FileReader();
      reader.onloadstart = () => {
        percentage.value = 0;
      };
      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          percentage.value = (e.loaded / e.total) * 100;
        }
      };
      reader.onloadend = () => {
        percentage.value = 100;
      };
      reader.onload = (e) => {
        const parser = new XMLParser();
        const data: SaveData = parser.parse(e.target?.result as string);
        console.log(data);
        parseSummary(data.SaveGame);
        loadDown.value = true;
      };
      reader.readAsText(options.file.file);
    }
  };

  const parseSummary = (data: SaveGame) => {
    results.value.summary.farmName = data.player.farmName;
    results.value.summary.farmType = farmTypes[data.whichFarm];
    results.value.summary.farmer = data.player.name;
    results.value.summary.dayOfMonth = data.dayOfMonth;
    results.value.summary.currentSeason = seasons[data.currentSeason];
    results.value.summary.year = data.year;
    results.value.summary.playHr = Math.floor(data.player.millisecondsPlayed / 3600000);
    results.value.summary.playMin = Math.floor((data.player.millisecondsPlayed % 3600000) / 60000);
    if (!data.gameVersion) {
      results.value.summary.version = '1.2';
      if (data.hasApplied1_4_UpdateChanges) {
        results.value.summary.version = '1.4';
      } else if (data.hasApplied1_3_UpdateChanges) {
        results.value.summary.version = '1.3';
      }
    } else {
      results.value.summary.version = data.gameVersion;
    }
    results.value.summary.versionLabel = data.gameVersionLabel ?? '';
  };
</script>

<style scoped></style>
