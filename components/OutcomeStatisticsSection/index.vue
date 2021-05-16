<template>
  <section class="outcome-statistics-section">
    <p class="card-title">Outcome statistics</p>
    <div
      v-for="(progressBar, index) in outcomeStatistics"
      :key="index"
      class="outcome-statistics-section__progress-bar-container"
    >
      <div
        class="outcome-statistics-section__progress-bar-container--icon"
        :class="$store.getters.isEnabled ? progressBar.iconClass : 'disabled-box-icon'"
        v-html="progressBar.icon"
      ></div>
      <progress-bar
        class="outcome-statistics-section__progress-bar-container--bar"
        :low-left-text="progressBar.progressBarText"
        low-right-text=""
        :color="$store.getters.isEnabled ? progressBar.progressBarColor : 'disabled'"
        :width="progressBar.width"
      ></progress-bar>
      <p
        class="outcome-statistics-section__progress-bar-container--percent is-percent"
      >
        {{ progressBar.width }}
      </p>
    </div>
  </section>
</template>

<script>
import Cart from "@/assets/icons/shopping-cart.svg?raw";
import Controller from "@/assets/icons/power-plug.svg?raw";
import Aircraft from "@/assets/icons/aircraft.svg?raw";
export default {
  name: "OutcomeStatisticsSection",
  computed: {
    outcomeStatistics() {
      return this.$store.getters.outcomeStatistics;
    }
  },
};
</script>
