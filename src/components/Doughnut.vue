<template>
  <div class="doughnut_chart" style="position: relative">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 200 200"
      style="stroke-linecap: round"
    >
      <!-- Background circle -->
      <path
        :d="dBg"
        fill="transparent"
        :stroke="
          backgroundColor && validateColor(backgroundColor)
            ? backgroundColor
            : '#ecf6ff'
        "
        :stroke-width="strokeWidth"
      />
      <!-- Move to start position, start drawing arc -->
      <path
        :d="d"
        fill="transparent"
        :stroke="
          foregroundColor && validateColor(foregroundColor)
            ? foregroundColor
            : '#1993ff'
        "
        :stroke-width="strokeWidth"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    percent: {
      default: 0,
      type: Number
    },
    foregroundColor: {
      tyoe: String,
      default: "#1993ff"
    },
    backgroundColor: {
      tyoe: String,
      default: "#1993ff"
    },
    strokeWidth: {
      tyoe: Number,
      default: 10
    },
    radius: {
      type: Number,
      default: 85
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
    ,
    classValue: {
      type: String,
      default: ""
    },
    visibleValue: {
      type: Boolean,
      default: false
    },
    valueCountUp: {
      type: Boolean,
      default: false,
      required: false,
    },
    valueCountUpDuration: {
      type: Number,
      default: 2000,
      required: false
    },
    valueCountUpDelay: {
      type: Number,
      default: 500,
      required: false
    },
    customPercentSize: {
      type: Number,
      default: 40,
      required: false
    },
    passTextAsHtml: {
      type: Boolean,
      default: false
    },
    customText: {
      type: String,
      default: ""
    },
    customTextColor: {
      type: String,
      default: '',
      required: false
    },
    customTextSize: {
      type: Number,
      default: 15,
      required: false
    }
  },
  setup(props) {
    const countingUpValue = ref(0)
    const radians = computed(() => {
      const number = props.valueCountUp ? countingUpValue.value : props.percent
      const degrees = (number / 100) * 360;
      const value = degrees - 180; // Turn the circle 180 degrees counter clockwise

      return (value * Math.PI) / 180;
    })
    const endX = computed(() => -Math.sin(radians.value) * props.radius + 100 - 0.0001)
    const endY = computed(() => Math.cos(radians.value) * props.radius + 100)
    const largeArc = computed(() => (props.valueCountUp ? countingUpValue.value : props.percent) < 50 ? 0 : 1)
    const x = 100;
    const y = computed(() => 100 - props.radius)
    const z = computed(() => (props.valueCountUp ? countingUpValue.value : props.percent) === 100 ? "z" : "")
    const d = computed(() => `M ${x} ${y.value} A ${props.radius} ${props.radius} 0 ${largeArc.value} 1 ${endX.value} ${endY.value} ${z.value}`)
    const dBg = computed(() => `M ${x} ${y.value} A ${props.radius} ${props.radius} 0 1 1 ${x - 0.0001} ${y.value} ${z.value}`)
    const validateColor = (a: string) => {
      let s = new Option().style
      s.color = a
      return s.color !== '' || /^#([0-9A-F]{3}){1,2}$/i.test(s.color);
    }
    return {
      d,
      dBg, validateColor
    }
  },
});
</script>
