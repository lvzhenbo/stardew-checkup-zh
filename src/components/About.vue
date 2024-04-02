<template>
  <div class="bg-[#ffe0b0] py-2 px-4 m-4 rounded-2xl border-4 border-[#804000]">
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
</template>

<script setup lang="ts"></script>
