<template>
  <main class="dashboard">
    <div class="dashboard__first-column">
      <cards-section></cards-section>
      <transaction-history-section></transaction-history-section>
    </div>
    <div class="dashboard__second-column">
      Second Column
    </div>
  </main>
</template>

<script>
import CardsSection from "@/components/CardsSection";
import TransactionHistorySection from "@/components/TransactionHistorySection";
export default {
  components: {
    CardsSection,
    TransactionHistorySection,
  },
};
</script>
