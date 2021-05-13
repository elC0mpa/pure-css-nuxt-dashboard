<template>
  <section class="goals-section">
    <div class="goals-section__title-container">
      <p class="card-title">Goals</p>
      <button class="infinite-button">+</button>
    </div>
    <div class="goals-section__cards-container">
      <goal-card></goal-card>
      <goal-card></goal-card>
      <goal-card></goal-card>
    </div>
  </section>
</template>

<script>
import GoalCard from "@/components/GoalCard";
export default {
  components: {
    GoalCard
  }
};
</script>
