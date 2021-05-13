<template>
  <main class="dashboard">
    <div class="dashboard__first-column">
      <cards-section></cards-section>
      <transaction-history-section></transaction-history-section>
    </div>
    <div class="dashboard__second-column">
      <goals-section></goals-section>
    </div>
  </main>
</template>

<script>
import CardsSection from "@/components/CardsSection";
import TransactionHistorySection from "@/components/TransactionHistorySection";
import GoalsSection from "@/components/GoalsSection";
export default {
  components: {
    CardsSection,
    TransactionHistorySection,
    GoalsSection
  },
};
</script>