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
        <button class="infinite-button">+</button>
        <span class="new-transaction-section__user-name secondary-info">
          Add new</span
        >
      </div>
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
