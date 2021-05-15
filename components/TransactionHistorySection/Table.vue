<template>
  <table class="table">
    <tr>
      <th class="secondary-info">Receiver</th>
      <th class="secondary-info">Type</th>
      <th class="secondary-info">Date</th>
      <th class="secondary-info text-align-right">Amount</th>
    </tr>
    <tr v-for="(transaction, index) in transactions" :key="index">
      <td class="secondary-info is-bold">{{ transaction.receiver }}</td>
      <td class="secondary-info">{{ transaction.type }}</td>
      <td class="secondary-info">{{ transaction.date }}</td>
      <td class="secondary-info is-bold is-currency text-align-right">
        {{ transaction.amount }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
};
</script>
