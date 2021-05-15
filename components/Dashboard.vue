<template>
  <main class="dashboard">
    <div class="dashboard__first-column">
      <cards-section></cards-section>
      <transaction-history-section></transaction-history-section>
    </div>
    <div class="dashboard__second-column">
      <goals-section></goals-section>
      <outcome-statistics-section></outcome-statistics-section>
      <new-transaction-section></new-transaction-section>
    </div>
  </main>
</template>

<script>
import CardsSection from "@/components/CardsSection/index";
import TransactionHistorySection from "@/components/TransactionHistorySection";
import GoalsSection from "@/components/GoalsSection";
import OutcomeStatisticsSection from "@/components/OutcomeStatisticsSection"
import NewTransactionSection from "@/components/NewTransactionSection"
export default {
  name: 'Dashboard',
  components: {
    CardsSection,
    TransactionHistorySection,
    GoalsSection,
    OutcomeStatisticsSection,
    NewTransactionSection
  },
};
</script>