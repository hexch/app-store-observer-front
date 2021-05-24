<template>
  <div class="progress">
    <div class="">{{ lable }}</div>
    <div class="flex-grow h-2 ml-5 mr-5 bg-gray-200 rounded">
      <div
        class="relative h-full bg-green-500 rounded"
        :style="{ width: fillPercentWidth }"
      ></div>
    </div>
    <div class="w-1/12 text-sm text-right">{{ fillPercentWidth }}</div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    console.log(props);
    const fillPercentWidth = computed(
      () => (props.value / props.total) * 100 + "%"
    );
    const lable = props.label;
    return { fillPercentWidth, lable };
  },
});
</script>

<style lang="postcss">
.progress {
  @apply flex flex-row items-center space-x-2 overflow-hidden;
}
</style>
