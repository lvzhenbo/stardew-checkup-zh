# 星露谷物语存档进度检查器

## 关于

此应用检查 [星露谷物语](https://www.stardewvalley.net/) 存档文件中的各种成就和里程碑，并让你知道缺少了什么。目前，它可以检查 46 项成就的进度以及其他进度和完成机制，包括爷爷的评价、姜岛升级、完美度和社交关系。

支持1.6版本大多数更改和新增的内容。与原英文版不同，因开发者本地只有1.6版本以上存档，所以只支持1.6版本以上。

本应用是用Vue.js编写的，使用了Naive UI和TailwindCSS构造页面，使用fast-xml-parser解析存档。源代码存储库在 [https://github.com/lvzhenbo/stardew-checkup-zh](https://github.com/lvzhenbo/stardew-checkup-zh) 。英文原作者为 [MouseyPounds](https://github.com/MouseyPounds) ，原存储库在 [https://github.com/MouseyPounds/stardew-checkup](https://github.com/MouseyPounds/stardew-checkup) 。本项目参照了原项目的UI设计和逻辑，在基础上使用更现代的JS语法。

## 快速开始

```bash
pnpm i
pnpm dev
pnpm build
```

## 许可证

[MIT](https://opensource.org/licenses/MIT)
