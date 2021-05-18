<template>
  <div>
    <VueApexCharts type="radialBar" :options="chartOptions" :series="series" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import VueApexCharts from "vue3-apexcharts";
import MultiCirclesItemData from "../types/multi-circles-data"
interface LabelData {
  name: String,
  value: Number
}
export default defineComponent({
  name: "MultiCircle",

  components: {
    VueApexCharts,
  },
  props: {
    labelFontSize: {
      type: String,
      default: "22px"
    },
    valueFontSize: {
      type: String,
      default: "16px"
    },
    values: {
      type: Array as PropType<MultiCirclesItemData[]>,
      defualt: [],
      required: true
    },
    isValuesPercentage: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    var series: number[] = []
    var labels: string[] = []
    var isTotalShow: boolean = false
    var total = 0;
    if (props.isValuesPercentage) {
      series = props.values.map(d => d.value as number)
      labels = props.values.map(d => d.name as string)
      isTotalShow = false
    } else {
      isTotalShow = true
      total = props.values.map(d => d.value as number).reduce((t, d) => t + d)
      series = props.values.map(d => d.value as number / total * 100)
      labels = props.values.map(d => d.name as string)
    }

    return {
      series: series,
      chartOptions: {
        labels: labels,
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: props.labelFontSize,
              },
              value: {
                fontSize: props.valueFontSize,
              },
              total: {
                show: isTotalShow,
                label: "Total",
                formatter: () => total,
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
    };
  },
});
</script>

<style>
</style>