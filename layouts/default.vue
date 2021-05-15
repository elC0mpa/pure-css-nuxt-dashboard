<template>
  <div>
    <header-component></header-component>
    <div class="general-container">
      <side-bar :items="navigationItems"></side-bar>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header";
import SideBar from "@/components/SideBar";
import Graph from "@/assets/icons/area-graph.svg?raw";
export default {
  components: {
    HeaderComponent,
    SideBar,
  },
  data() {
    return {
      navigationItems: [
        {
          text: "Overview",
          icon: Graph,
        },
      ],
    };
  },
};
</script>
