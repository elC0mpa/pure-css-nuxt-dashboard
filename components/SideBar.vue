<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="side-nav__item"
        :class="{'side-nav__item--active': item.isSelected}"
      >
        <a href="#" class="side-nav__link">
          <div class="side-nav__icon" v-html="item.icon"></div>
          <span class="info">{{ item.text }}</span>
        </a>
      </li>
    </ul>

    <div class="photo">
      <img src="@/assets/imgs/cloudcash.png" alt="CloudCash" class="user-nav__user-photo">
      <span class="secondary-info">Give your money awesome space in the cloud</span>
    </div>
  </nav>
</template>

<script>
import Message from "@/assets/icons/mail.svg?raw";
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
