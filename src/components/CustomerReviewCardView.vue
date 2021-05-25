<template>
  <div class="relative w-1/2 p-4 ml-5 card">
    <div class="relative text-right top-3 right-3">
      <span class="pt-1 pl-2 pr-2 bg-yellow-500 rounded pd-1">CN</span>
    </div>
    <div class="flex flex-row">
      <div class="mb-5 ml-2 mr-2 text-2xl font-bold text-left">{{ score }}</div>
      <a-rate :value="score" disabled allow-half />
    </div>
    <CustomerReviewProgressBarView label="5" :value="star1" :total="total" />
    <CustomerReviewProgressBarView label="4" :value="star2" :total="total" />
    <CustomerReviewProgressBarView label="3" :value="star3" :total="total" />
    <CustomerReviewProgressBarView label="2" :value="star4" :total="total" />
    <CustomerReviewProgressBarView label="1" :value="star5" :total="total" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CustomerReviewProgressBarView from "./CustomerReviewProgressBarView.vue";
export default defineComponent({
  props: {
    score: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Array,
      required: true,
    },
  },
  components: {
    CustomerReviewProgressBarView,
  },
  setup(props) {
    const total = props.reviews.reduce((sum, num) => sum + num);
    const score = props.score;
    const star1 = props.reviews[0];
    const star2 = props.reviews[1];
    const star3 = props.reviews[2];
    const star4 = props.reviews[3];
    const star5 = props.reviews[4];

    return {
      total,
      score,
      star1,
      star2,
      star3,
      star4,
      star5,
    };
  },
});
</script>
<style lang="postcss">
.card {
  @apply bg-white rounded-lg overflow-hidden shadow-md relative;
}
</style>
