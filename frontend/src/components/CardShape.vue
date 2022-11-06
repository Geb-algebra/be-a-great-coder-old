<template>
  <div :class="cssClass" @click.stop="onClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  clickable?: boolean
}>(), {
  clickable: false
})

const emit = defineEmits(['click'])

function onClick() {
  props.clickable && emit('click')
}

const cssClass = computed(() => ({
  card: true,
  'card-clickable': props.clickable
}))

</script>

<style scoped>
.card {
  border-radius: 0.75rem;
  box-shadow: 0 0.2rem 0.5rem -0.1rem rgba(0, 0, 0, 0.5);
  transition-property: box-shadow background-color;
  transition-duration: 0.2s;
}

.card-clickable:hover {
  box-shadow: 0 0.5rem 1rem -0rem rgba(0, 0, 0, 0.5);
}

.card-clickable:active {
  box-shadow: 0 0rem 0rem -0rem rgba(0, 0, 0, 0.5);
  transition-property: box-shadow background-color;
  transition-duration: 0.0s;
}
</style>