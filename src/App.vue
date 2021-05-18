<template>
  <MultiCircle :values="values" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import MultiCircle from './components/MultiCircles.vue'
import MultiCirclesItemData from "./types/multi-circles-data"

const labelDataValues: MultiCirclesItemData[] = [
  { name: "a", value: 40 },
  { name: "b", value: 1 },
  { name: "c", value: 1 },
  { name: "d", value: 2 },
  { name: "e", value: 3 },
]
export default defineComponent({
  name: 'App',
  components: {
    MultiCircle
  },
  setup(props) {
    const values = reactive(labelDataValues)
    return {
      values
    };
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
