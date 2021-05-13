<template>
  <section class="transaction-history-section">
    <p class="card-title">Transaction History</p>
    <table-component></table-component>
  </section>
</template>

<script>
import TableComponent from "@/components/Table";
export default {
  components: {
    TableComponent
  }
};
</script>
