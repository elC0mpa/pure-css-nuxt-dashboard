<template>
  <section class="new-transaction-section">
    <p class="card-title">New transaction</p>
    <div class="new-transaction-section__avatars-container">
      <div
        v-for="(avatar, index) in avatars"
        :key="index"
        class="new-transaction-section__avatar-wrapper"
      >
        <img
          src="user.jpeg"
          alt=""
          class="new-transaction-section__user-photo"
        />
        <span class="new-transaction-section__user-name secondary-info">{{
          avatar.name
        }}</span>
      </div>
      <div class="new-transaction-section__button-wrapper">
        <button class="infinite-button add-button">+</button>
        <span class="new-transaction-section__user-name secondary-info">
          Add new</span
        >
      </div>
    </div>
    <div class="new-transaction-section__actions-container">
      <input class="new-transaction-section__number-input" type="text"/>
      <button class="infinite-button secondary-info">Send the transfer ></button>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewTransactionSection",
  data() {
    return {
      avatars: [
        {
          name: "José",
        },
        {
          name: "Adrian",
        },
        {
          name: "Mercedes",
        },
        {
          name: "Carlos",
        },
        {
          name: "Compa",
        },
      ],
    };
  },
};
</script>
