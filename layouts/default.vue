<template>
  <div>
  <header-component></header-component>
  <div class="general-container">
    <side-bar></side-bar>
    <Nuxt />
  </div>
</div>
</template>

<script>
import HeaderComponent from "@/components/Header";
import SideBar from "@/components/SideBar";
export default {
  components: {
    HeaderComponent,
    SideBar
  }
};
</script>
