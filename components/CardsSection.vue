<template>
  <section class="cards-section">
    <p class="card-title">Cards</p>
    <div class="cards-section__top-container">
      <credit-card></credit-card>
      <balances></balances>
    </div>
    <div class="cards-section__bottom-container">
      <progress-bar></progress-bar>
      <switch-component></switch-component>
    </div>
  </section>
</template>

<script>
import CreditCard from "@/components/CreditCard";
import Balances from "@/components/Balances"
import ProgressBar from "@/components/ProgressBar"
import SwitchComponent from "@/components/Switch"
export default {
  components: {
    CreditCard,
    Balances,
    ProgressBar,
    SwitchComponent
  },
};
</script>