<template>
  <div class="goal-card">
    <div class="goal-card__top-container">
      <p class="goal-card__top-container--balance is-currency">550</p>
      <p class="goal-card__top-container--date">12/11/19</p>
    </div>
    <div class="goal-card__bottom-container">
      <div class="goal-card__bottom-container--icon" v-html="Graph"></div>
      <div class="goal-card__bottom-container--id">Holidays</div>
    </div>
  </div>
</template>

<script>
import Graph from "@/assets/icons/area-graph.svg?raw";
export default {
  name: 'GoalCard',
  data() {
    return {
      Graph,
    };
  },
};
</script>
