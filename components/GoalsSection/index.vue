<template>
  <section class="goals-section">
    <div class="goals-section__title-container">
      <p class="card-title">Goals</p>
      <button class="infinite-button add-button">+</button>
    </div>
    <carousel
      :per-page="2"
      :navigationEnabled="true"
      :paginationEnabled="false"
      :navigationClickTargetSize="3"
      :per-page-custom="[[530, 3]]"
    >
      <slide v-for="(card, index) in goalCards" :key="index">
        <goal-card
          :balance="card.balance"
          :date="card.date"
          :icon="card.icon"
          :icon-class="
            $store.getters.isEnabled ? card.iconClass : 'is-disabled'
          "
          :text="card.text"
        ></goal-card>
      </slide>
    </carousel>
  </section>
</template>

<script>
import GoalCard from "@/components/GoalsSection/GoalCard";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "GoalsSection",
  components: {
    GoalCard,
    Carousel,
    Slide
  },
  computed: {
    goalCards() {
      return this.$store.getters.goals;
    },
  },
};
</script>
