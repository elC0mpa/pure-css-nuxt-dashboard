<template>
  <section class="cards-section">
    <p class="card-title">Cards</p>
    <div class="cards-section__top-container">
      <carousel
        :per-page="1"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :navigationClickTargetSize="3"
      >
        <slide v-for="(creditCard, index) in creditCards" :key="index">
          <credit-card
            :holder="creditCard.holder"
            :expire-date="creditCard.expireDate"
            :card-id="creditCard.cardId"
            :is-enabled="cardEnabled"
          ></credit-card>
        </slide>
      </carousel>
      <balances></balances>
    </div>
    <div class="cards-section__bottom-container">
      <progress-bar
        low-left-text="Weekly payment limit"
        low-right-text="$350.60 / $4000"
      ></progress-bar>
      <switch-component v-model="cardEnabled" trueText="Enabled card" falseText="Disabled card"></switch-component>
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
    Slide,
  },
  data() {
    return {
      creditCards: [
        {
          holder: "Maria Benitez",
          expireDate: "06/25",
          cardId: 1234454545451234,
        },
        {
          holder: "Alberto García",
          expireDate: "08/25",
          cardId: 5634454545459035,
        },
      ],
      cardEnabled: false
    };
  },
};
</script>
