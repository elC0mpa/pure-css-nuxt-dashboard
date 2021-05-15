<template>
  <section class="outcome-statistics-section">
    <p class="card-title">Outcome statistics</p>
    <div
      v-for="(progressBar, index) in progressBars"
      :key="index"
      class="outcome-statistics-section__progress-bar-container"
    >
      <div
        class="outcome-statistics-section__progress-bar-container--icon"
        :class="progressBar.iconClass"
        v-html="progressBar.icon"
      ></div>
      <progress-bar
        class="outcome-statistics-section__progress-bar-container--bar"
        :low-left-text="progressBar.progressBarText"
        low-right-text=""
        :color="progressBar.progressBarColor"
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
  data() {
    return {
      progressBars: [
        {
          icon: Cart,
          width: 50,
          iconClass: "tertiary-box-icon",
          progressBarColor: "tertiary",
          progressBarText: "Shopping",
        },
        {
          icon: Controller,
          width: 25,
          iconClass: "secondary-box-icon",
          progressBarColor: "secondary",
          progressBarText: "Electronics",
        },
        {
          icon: Aircraft,
          width: 40,
          iconClass: "primary-box-icon",
          progressBarColor: "primary",
          progressBarText: "Travels",
        },
      ],
    };
  },
};
</script>
