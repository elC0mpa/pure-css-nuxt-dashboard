<template>
  <div class="credit-card">
    <div class="credit-card__header">
      <p class="credit-card__title">cloudcash</p>
      <p class="credit-card__info">PREMIUM ACCOUNT</p>
    </div>
    <div class="credit-card__number">
      <ul>
        <li>{{ firstSection }}</li>
        <li>****</li>
        <li>****</li>
        <li>{{ lastSection }}</li>
      </ul>
    </div>
    <div class="credit-card__footer">
      <div>
        <p class="credit-card__info">Card holder</p>
        <p class="credit-card__title">{{ holder }}</p>
      </div>
      <div>
        <p class="credit-card__info">Expire date</p>
        <p class="credit-card__title">{{ expireDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
  data() {
    return {
      firstSection: "",
      lastSection: "",
    };
  },
  props: {
    holder: {
      type: String,
      required: true,
    },
    expireDate: {
      type: String,
      required: true,
    },
    cardId: {
      type: Number,
      required: true,
    },
  },
  created() {
    const idString = this.cardId.toString();
    this.firstSection = idString.substring(0, 4);
    this.lastSection = idString.substring(idString.length - 4, idString.length);
  },
};
</script>
