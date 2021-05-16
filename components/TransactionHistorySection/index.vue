<template>
  <section class="transaction-history-section">
    <p class="card-title">Transaction History</p>
    <table-component :transactions="transactions"></table-component>
  </section>
</template>

<script>
import TableComponent from "@/components/TransactionHistorySection/Table";
export default {
  name: "TransactionHistorySection",
  components: {
    TableComponent,
  },
  computed: {
    transactions() {
      return this.$store.getters.transactionsHistory;
    },
  },
};
</script>
