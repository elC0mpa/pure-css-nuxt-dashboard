<template>
  <section class="outcome-statistics-section">
    <p class="card-title">Outcome statistics</p>
    <progress-bar
      low-left-text="Shopping"
      low-right-text=""
    ></progress-bar>
    <progress-bar
      low-left-text="Electronics"
      low-right-text=""
    ></progress-bar>
    <progress-bar
      low-left-text="Travel"
      low-right-text=""
    ></progress-bar>
  </section>
</template>

<script>
import GoalCard from "@/components/GoalCard";
export default {
  name: "OutcomeStatisticsSection",
  components: {
    GoalCard,
  },
};
</script>
