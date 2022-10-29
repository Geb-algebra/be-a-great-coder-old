<template>
  <div class="container">
    <h4>{{props.title}}</h4>
    <div v-for="content of props.contentList" class="row">
      <div class="">{{content.key}}</div>
      <div>{{content.value}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Content {
  key: string
  value: string
}

const props = defineProps<{
  title: string
  contentList: Content[]
}>()
</script>

<style scoped>
.container {
  width: 100%;
}

.row {
  display: flex;
}
</style>