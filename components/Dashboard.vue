<template>
  <main class="dashboard">
    <div class="dashboard__first-column">
      <cards-section></cards-section>
      <transaction-history-section></transaction-history-section>
    </div>
    <div class="dashboard__second-column">
      <goals-section></goals-section>
      <outcome-statistics-section></outcome-statistics-section>
      <div class="dashboard__second-column-horizontal-sections">
        <new-transaction-section></new-transaction-section>
        <div>HOLA MUNDO</div>
      </div>
    </div>
  </main>
</template>

<script>
import CardsSection from "@/components/CardsSection/index";
import TransactionHistorySection from "@/components/TransactionHistorySection/index";
import GoalsSection from "@/components/GoalsSection/index";
import OutcomeStatisticsSection from "@/components/OutcomeStatisticsSection/index";
import NewTransactionSection from "@/components/NewTransactionSection/index";
import GoalCard from "@/components/GoalsSection/GoalCard";
export default {
  name: "Dashboard",
  components: {
    CardsSection,
    TransactionHistorySection,
    GoalsSection,
    OutcomeStatisticsSection,
    NewTransactionSection,
    GoalCard,
  },
};
