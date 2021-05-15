<template>
  <div class="goal-card">
    <div class="goal-card__top-container">
      <p class="goal-card__top-container--balance is-currency">{{ balance }}</p>
      <p class="goal-card__top-container--date">{{ date }}</p>
    </div>
    <div class="goal-card__bottom-container">
      <div
        class="goal-card__bottom-container--icon"
        v-html="icon"
        :class="iconClass"
      ></div>
      <div class="goal-card__bottom-container--id">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import Graph from "@/assets/icons/area-graph.svg?raw";
export default {
  name: "GoalCard",
  data() {
    return {
      Graph,
    };
  },
  props: {
    balance: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
