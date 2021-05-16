<template>
  <section class="cards-section">
    <p class="card-title">Cards</p>
    <div class="cards-section__top-container">
      <carousel :per-page="1" :navigationEnabled="true" :paginationEnabled="false" :navigationClickTargetSize="3">
        <slide>
          <credit-card></credit-card>
        </slide>
        <slide>
          <credit-card></credit-card>
        </slide>
      </carousel>
      <balances></balances>
    </div>
    <div class="cards-section__bottom-container">
      <progress-bar
        low-left-text="Weekly payment limit"
        low-right-text="$350.60 / $4000"
      ></progress-bar>
      <switch-component></switch-component>
    </div>
  </section>
</template>

<script>
import CreditCard from "@/components/CardsSection/CreditCard";
import Balances from "@/components/CardsSection/Balances";
import ProgressBar from "@/components/ProgressBar";
import SwitchComponent from "@/components/CardsSection/SwitchComponent";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "CardsSection",
  components: {
    CreditCard,
    Balances,
    ProgressBar,
    SwitchComponent,
    Carousel, 
    Slide
  },
};
</script>
