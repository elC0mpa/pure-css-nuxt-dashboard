<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="side-nav__item side-nav__item--active"
      >
        <a href="#" class="side-nav__link">
          <div class="side-nav__icon" v-html="item.icon"></div>
          <span class="info">{{ item.text }}</span>
        </a>
      </li>
    </ul>

    <div class="legal">
      &copy; 2017 by trillo. All rights reserved.
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
