<script setup lang="ts">
  import { zhCN, dateZhCN, type GlobalThemeOverrides } from 'naive-ui';
  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#603000FF',
      primaryColorHover: '#d08000FF',
      primaryColorPressed: '#804000FF',
      primaryColorSuppl: '#d08000FF',
    },
  };
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <NLoadingBarProvider>
      <NDialogProvider>
        <NMessageProvider>
          <NNotificationProvider>
            <NLayout
              content-class="min-h-screen bg-fixed bg-[#80a0f0] bg-gradient-to-b from-[#80a0f0] via-[#c0ffff] to-[#40c040]"
            >
              <NLayoutContent class="!bg-transparent">
                <div class="panel">
                  <NH1> 星露谷物语存档检查器 </NH1>
                  <NH2> 关于 </NH2>
                  <NP>
                    此应用检查
                    <UrlButton text="星露谷物语" url="https://www.stardewvalley.net/" />
                    存档文件中的各种成就和里程碑，并让你知道缺少了什么。目前，它可以检查 46
                    项成就的进度以及其他进度和完成机制，包括爷爷的评价、姜岛升级、完美度和社交关系。
                  </NP>
                  <NP>
                    支持1.6版本大多数更改和新增的内容，并且只有存档版本是1.6时才会展示。
                    <NText italic class="font-semibold">
                      如果你加载了1.6版本的存档，可能会包涵游戏中的剧透内容。可以通过选择输出首选项来隐藏部分结果，来避免主线剧透，但是新内容的标题仍然会展示，并且会出现在旧内容的详细信息中。
                    </NText>
                  </NP>
                  <NP>
                    这个应用是用Vue.js编写的，使用了Naive UI和TailwindCSS。源代码存储库在
                    <UrlButton
                      text="https://github.com/lvzhenbo/stardew-checkup-zh"
                      url="https://github.com/lvzhenbo/stardew-checkup-zh"
                    />
                    。英文原作者为
                    <UrlButton text="MouseyPounds" url="https://github.com/MouseyPounds" />
                    ，原存储库在
                    <UrlButton
                      text="https://github.com/MouseyPounds/stardew-checkup"
                      url="https://github.com/MouseyPounds/stardew-checkup"
                    />
                    。本项目参照了原项目的UI设计和逻辑。
                  </NP>
                </div>
                <div class="panel">
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
                      <NUpload drag>
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
                <div class="panel">
                  <NH2> 更新日志 </NH2>
                  <NUl class="list-disc">
                    <NLi> 2024年04月02日 - v1.0.0 - 第一个版本发布。 </NLi>
                  </NUl>
                </div>
              </NLayoutContent>
            </NLayout>
          </NNotificationProvider>
        </NMessageProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<style scoped>
  .panel {
    @apply bg-[#ffe0b0] py-2 px-4 m-4 rounded-2xl border-4 border-[#804000];
  }
</style>
