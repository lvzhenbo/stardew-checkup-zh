<template>
  <NButton tag="a" type="primary" text :href="url" target="_blank">
    {{ text }}
  </NButton>
</template>

<script setup>
  defineProps({
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  });
</script>
