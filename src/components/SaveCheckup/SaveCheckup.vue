<template>
  <div id="selectSave" class="bg-[#ffe0b0] py-2 px-4 m-4 rounded-2xl border-4 border-[#804000]">
    <NH2> 选择存档文件 </NH2>
    <NP>
      选择下面的输出首选项，然后选择你的存档文件。<NText italic>摘要信息</NText>
      是展示成就或目标是否完成，<NText italic>详细信息</NText>
      是展示NPC事件清单或需要物品的完整列表。
    </NP>
    <NForm label-placement="left" :show-feedback="false">
      <NFormItem label="输出首选项：">
        <NRadioGroup value="hide_details">
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
  <div
    v-if="showResults"
    id="results"
    class="bg-[#ffe0b0] py-2 px-4 m-4 rounded-2xl border-4 border-[#804000]"
  >
    <NH2> 检查结果 </NH2>
    <NProgress
      v-if="!loadDown"
      type="line"
      :percentage="percentage"
      :indicator-placement="'inside'"
    />
    <div v-else>
      <Summary :data="gameData!" />
      <Money :data="gameData!" />
      <Skills :data="gameData!" />
      <SkillMastery :data="gameData!" />
      <Quests :data="gameData!" />
      <SpecialOrders :data="gameData!" />
    </div>
  </div>
  <div class="fixed right-2 top-2 bg-[#eecc99] p-1 shadow-md rounded">
    <NAnchor :show-rail="false">
      <NAnchorLink title="关于" href="#about" />
      <NAnchorLink title="选择存档文件" href="#selectSave" />
      <NAnchorLink title="检查结果" href="#results">
        <NAnchorLink title="基础用法" href="#basic.vue" />
        <NAnchorLink title="忽略间隔" href="#ignore-gap.vue" />
        <NAnchorLink title="固定" href="#affix.vue" />
        <NAnchorLink title="滚动到" href="#scrollto.vue" />
      </NAnchorLink>
      <NAnchorLink title="更新日志" href="#changeLog" />
    </NAnchor>
  </div>
</template>

<script setup lang="ts">
  import type { UploadFileInfo } from 'naive-ui';
  import { XMLParser } from 'fast-xml-parser';
  import type { SaveData, SaveGame } from '#/index';

  const percentage = ref(0);
  const showResults = ref(false);
  const loadDown = ref(false);
  const gameData = ref<SaveGame>();
  const message = useMessage();

  const fileChange = (options: {
    file: UploadFileInfo;
    fileList: Array<UploadFileInfo>;
    event?: Event;
  }) => {
    if (options.file.file && options.event) {
      showResults.value = true;
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
        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: '@_',
        });
        const data: SaveData = parser.parse(e.target?.result as string);
        if (!data.SaveGame) {
          message.error('请按照要求选择正确的存档文件');
          throw new Error('Invalid save file');
        }
        console.log(data);
        gameData.value = data.SaveGame;
        setTimeout(() => {
          loadDown.value = true;
        }, 1000);
      };
      reader.readAsText(options.file.file);
    } else {
      percentage.value = 0;
      loadDown.value = false;
      showResults.value = false;
    }
  };
</script>

<style scoped></style>
