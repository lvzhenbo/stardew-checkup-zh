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
                <About />
                <SaveCheckup />
                <ChangeLog />
              </NLayoutContent>
            </NLayout>
          </NNotificationProvider>
        </NMessageProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
