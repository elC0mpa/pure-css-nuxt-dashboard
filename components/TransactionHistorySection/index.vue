<template>
  <section class="transaction-history-section">
    <p class="card-title">Transaction History</p>
    <table-component :transactions="transactions"></table-component>
  </section>
</template>

<script>
import TableComponent from "@/components/TransactionHistorySection/Table";
export default {
  name: 'TransactionHistorySection',
  components: {
    TableComponent
  },
  data() {
    return {
      transactions: [
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
        },
      ],
    }
  },
};
</script>
