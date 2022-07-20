<script setup>
import BarChart from "../../components/chart/BarChart.vue";

const chartData = {
  labels: ["January", "February", "March"],
  datasets: [
    { data: [40, 20, 12], label: "Data One", backgroundColor: "#f87979" },
  ],
};
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <div class="justify-self-center">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Sales</div>
          <div class="stat-value">30k MYR</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Employess</div>
          <div class="stat-value">2</div>
          <div class="stat-desc">-</div>
        </div>

        
      </div>
    </div>
    <div class="grid grid-cols-3">
      <bar-chart :chart-data="chartData"></bar-chart>
      <bar-chart :chart-data="chartData"></bar-chart>
      <bar-chart :chart-data="chartData"></bar-chart>
    </div>
  </div>
</template>
