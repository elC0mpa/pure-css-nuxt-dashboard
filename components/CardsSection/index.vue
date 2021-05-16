<template>
  <section class="cards-section">
    <p class="card-title">Cards</p>
    <div class="cards-section__top-container">
      <carousel
        :per-page="1"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :navigationClickTargetSize="3"
        @navigation-click="changeData"
      >
        <slide v-for="(creditCard, index) in creditCards" :key="index">
          <credit-card
            :holder="creditCard.holder"
            :expire-date="creditCard.expireDate"
            :card-id="creditCard.cardId"
            :is-enabled="cardEnabledComputed"
          ></credit-card>
        </slide>
      </carousel>
      <balances></balances>
    </div>
    <div class="cards-section__bottom-container">
      <progress-bar
        low-left-text="Weekly payment limit"
        low-right-text="$350.60 / $4000"
        :width="$store.getters.weeklyPayment"
        :color="$store.getters.isEnabled ? 'primary' : 'disabled'"
      ></progress-bar>
      <switch-component
        v-model="cardEnabledComputed"
        trueText="Enabled card"
        falseText="Disabled card"
      ></switch-component>
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
      creditCards: this.$store.getters.cardsData,
    };
  },
  methods: {
    changeData(evt) {
      this.$store.commit("updateActiveCard", evt);
    },
  },
  computed: {
    cardEnabledComputed: {
      get() {
        return this.$store.getters.isEnabled;
      },
      set(value) {
        return this.$store.commit("updateIsEnabled", value);
      },
    },
  },
};
</script>
