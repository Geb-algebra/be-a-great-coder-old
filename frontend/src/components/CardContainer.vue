<template>
  <CardShape class="container" clickable>
    <CardShape class="accent title">
      {{ props.title }}
    </CardShape>
    <div class="content">
      <slot></slot>
    </div>
    <CardShape
      class="button accent"
      clickable
    >
      {{ props.buttonText }}
    </CardShape>
  </CardShape>
</template>

<script setup lang="ts">

import CardShape from './CardShape.vue';

const props = defineProps<{
  title?: string
  buttonText?: string
}>()

const emit = defineEmits(["click"])

</script>

<style scoped>

.accent {
  font-size: 2rem;
  height: 3.5rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #B3E5FF;
  height: 100%;
}

.content {
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.title {
  background-color: #004B70;
}

.button {
  justify-content: center;
  background-color: #D45E39;
}
</style>