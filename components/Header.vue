<template>
  <header class="header">
    <img src="@/assets/imgs/cloudcash.png" alt="CloudCash" class="user-nav__user-photo">
    <div class="title-wrapper">
        <p class="title">Weekly sumup</p>
        <p class="info">Get summary of your weekly online transactions here </p>
    </div>

    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <div class="user-nav__icon" v-html="Message"></div>
        <span class="user-nav__notification">7</span>
      </div>
      <div class="user-nav__icon-box">
        <div class="user-nav__icon" v-html="Notifications"></div>
        <span class="user-nav__notification">13</span>
      </div>
      <div class="user-nav__user">
        <img src="@/assets/imgs/user.jpeg" alt="" class="user-nav__user-photo">
        <span class="user-nav__user-name">José Gabriel <br /> Admin Account</span>
      </div>
    </nav>
  </header>
</template>

<script>
import Notifications from "@/assets/icons/bell.svg?raw";
import Message from "@/assets/icons/mail.svg?raw";
export default {
  name: 'Header',
  data() {
    return {
      Notifications,
      Message,
    }
  }
};
</script>
