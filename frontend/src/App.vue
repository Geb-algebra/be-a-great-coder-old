<template>
  <div class="app-container">
    <header class="header">
      <h1 class="app-bar-title">
        Be A Great Coder
      </h1>
    </header>
    <main class="body">
      <div class="body-container">
        <CardContainer class="side-card" title="Jobs" button-text="Choose">
          <CardContent title="Light" :content-list="sampleContentList"/>
          <CardContent title="Medium" :content-list="sampleContentList"/>
          <CardContent title="Heavy" :content-list="sampleContentList"/>
        </CardContainer>
        <div class="center">
          <CardShape class="current-stock" clickable>
            {{currentStock}}
          </CardShape>
          <CardContainer class="center-card" title="Jobs" button-text="Choose">
            <CardContent title="Light" :content-list="sampleContentList"/>
            <CardContent title="Heavy" :content-list="sampleContentList"/>
          </CardContainer>
        </div>
        <div class="">
          <CardContainer class="side-card" title="Jobs" button-text="Choose">
            <CardContent title="Light" :content-list="sampleContentList"/>
            <CardContent title="Medium" :content-list="sampleContentList"/>
            <CardContent title="Heavy" :content-list="sampleContentList"/>
          </CardContainer>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import CardShape from './components/CardShape.vue'
import CardContainer from './components/CardContainer.vue';
import CardContent from './components/CardContent.vue';

const sampleContentList = ref([
  { key: "Diff.", value: "300" },
  { key: "Rev.", value: "$99,999" },
  { key: "Cost", value: "$30k + 1.5k/m" },
])

const currentStock = ref(999999999)
</script>

<style scoped>
.app-container {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #004b70;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
}

.body {
  flex: 1;
}

.app-bar-title {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

.current-stock {
  background-color: #004b70;
  font-size: 3rem;
  padding: 0.5rem 1.5rem;
}

.body-container {
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.center {
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>