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
import WiFi from "@/assets/icons/signal.svg?raw";
import Travel from "@/assets/icons/aircraft.svg?raw";
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
          isSelected: true,
        },
        {
          text: "Wifi",
          icon: WiFi,
        },
        {
          text: "Travels",
          icon: Travel,
        },
      ],
    };
  },
};
</script>
