<template>
  <CustomerReviewCardView :score="score" :reviews="reviews" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import MultiCircle from "./components/MultiCircles.vue";
import MultiCirclesItemData from "./types/multi-circles-data";

import CustomerReviewCardView from "./components/CustomerReviewCardView.vue";

const labelDataValues: MultiCirclesItemData[] = [
  { name: "a", value: 40 },
  { name: "b", value: 1 },
  { name: "c", value: 1 },
  { name: "d", value: 2 },
  { name: "e", value: 3 },
];
export default defineComponent({
  name: "App",
  components: {
    MultiCircle,
    CustomerReviewCardView,
  },
  setup(props) {
    const values = reactive(labelDataValues);
    const score: number = 4.5;
    const reviews: number[] = [10, 5, 1, 1, 3];
    return {
      values,
      score,
      reviews,
    };
  },
});
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
