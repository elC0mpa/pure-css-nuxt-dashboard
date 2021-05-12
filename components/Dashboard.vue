<template>
  <main class="dashboard">
      <div class="dashboard__first-column">
          <cards-section></cards-section>
      </div>
      <div class="dashboard__second-column">
          Second Column
      </div>
  </main>
</template>

<script>
import CardsSection from "@/components/CardsSection";
export default {
  components: {
      CardsSection
  }
};
</script>
