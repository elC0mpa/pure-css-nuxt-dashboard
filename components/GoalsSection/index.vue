<template>
  <section class="goals-section">
    <div class="goals-section__title-container">
      <p class="card-title">Goals</p>
      <button class="infinite-button add-button">+</button>
    </div>
    <div class="goals-section__cards-container">
      <goal-card
        v-for="(card, index) in goalCards"
        :key="index"
        :balance="card.balance"
        :date="card.date"
        :icon="card.icon"
        :icon-class="card.iconClass"
        :text="card.text"
      ></goal-card>
    </div>
  </section>
</template>

<script>
import GoalCard from "@/components/GoalsSection/GoalCard";
import Signal from "@/assets/icons/signal.svg?raw";
import Brush from "@/assets/icons/round-brush.svg?raw";
import Controller from "@/assets/icons/game-controller.svg?raw";
export default {
  name: "GoalsSection",
  components: {
    GoalCard,
  },
  data() {
    return {
      goalCards: [
        {
          text: "Communications",
          date: "20/01/2019",
          balance: 50,
          icon: Signal,
          iconClass: 'is-blue-filled',
        },
        {
          text: "Renovation",
          date: "20/05/2019",
          balance: 200,
          icon: Brush,
          iconClass: 'is-orange-filled'
        },
        {
          text: "XBox",
          date: "20/07/2019",
          balance: 550,
          icon: Controller,
          iconClass: 'is-green-filled'
        },
      ],
    };
  },
};
</script>
