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
        :icon-class="$store.getters.isEnabled ? card.iconClass : 'is-disabled'"
        :text="card.text"
      ></goal-card>
    </div>
  </section>
</template>

<script>
import GoalCard from "@/components/GoalsSection/GoalCard";
export default {
  name: "GoalsSection",
  components: {
    GoalCard,
  },
  computed: {
    goalCards() {
      return this.$store.getters.goals 
    }
  },
};
</script>
