<template>
  <section class="transaction-history-section">
    <p class="card-title">Transaction History</p>
    <table-component :transactions="transactions"></table-component>
  </section>
</template>

<script>
import TableComponent from "@/components/TransactionHistorySection/Table";
import Signal from "@/assets/icons/signal.svg?raw";
import Brush from "@/assets/icons/round-brush.svg?raw";
import Controller from "@/assets/icons/game-controller.svg?raw";
export default {
  name: "TransactionHistorySection",
  components: {
    TableComponent,
  },
  data() {
    return {
      transactions: [
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
          icon: Brush,
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
          icon: Brush,
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
          icon: Brush,
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
          icon: Brush,
        },
        {
          receiver: "Tesco Market",
          type: "Shopping",
          date: "13 Dec 2020",
          amount: "57.64",
          icon: Brush,
        },
      ],
    };
  },
};
</script>
