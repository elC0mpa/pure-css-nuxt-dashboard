<template>
  <section class="cards-section">
    <p class="card-title">Cards</p>
    <div class="cards-section__top-container">
      <credit-card></credit-card>
      <balances></balances>
    </div>
  </section>
</template>

<script>
import CreditCard from "@/components/CreditCard";
import Balances from "@/components/Balances"
export default {
  components: {
    CreditCard,
    Balances
  },
};
</script>
