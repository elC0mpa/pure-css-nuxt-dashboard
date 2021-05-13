<template>
  <section class="outcome-statistics-section">
    <p class="card-title">Outcome statistics</p>
    <div class="outcome-statistics-section__progress-bar-container">
      <div
        class="outcome-statistics-section__progress-bar-container--icon orange-box-icon"
        v-html="Cart"
      ></div>
      <progress-bar
        class="outcome-statistics-section__progress-bar-container--bar"
        low-left-text="Shopping"
        low-right-text=""
        color="orange"
      ></progress-bar>
    </div>
    <div class="outcome-statistics-section__progress-bar-container">
      <div
        class="outcome-statistics-section__progress-bar-container--icon green-box-icon"
        v-html="Controller"
      ></div>
      <progress-bar
        class="outcome-statistics-section__progress-bar-container--bar"
        low-left-text="Electronics"
        low-right-text=""
        color="green"
      ></progress-bar>
    </div>
    <div class="outcome-statistics-section__progress-bar-container">
      <div
        class="outcome-statistics-section__progress-bar-container--icon"
        v-html="Aircraft"
      ></div>
      <progress-bar
        class="outcome-statistics-section__progress-bar-container--bar"
        low-left-text="Travel"
        low-right-text=""
      ></progress-bar>
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
      Cart,
      Controller,
      Aircraft,
    };
  },
};
</script>
