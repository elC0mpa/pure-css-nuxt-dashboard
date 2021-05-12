<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item side-nav__item--active">
        <a href="#" class="side-nav__link">
          <div class="side-nav__icon" v-html="Graph"></div>
          <span>Overview</span>
        </a>
      </li>
      <!-- <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg class="side-nav__icon">
            <use xlink:href="img/sprite.svg#icon-aircraft-take-off"></use>
          </svg>
          <span>Flight</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg class="side-nav__icon">
            <use xlink:href="img/sprite.svg#icon-key"></use>
          </svg>
          <span>Car rental</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg class="side-nav__icon">
            <use xlink:href="img/sprite.svg#icon-map"></use>
          </svg>
          <span>Tours</span>
        </a>
      </li> -->
    </ul>

    <div class="legal">
      &copy; 2017 by trillo. All rights reserved.
    </div>
  </nav>
</template>

<script>
import Graph from "@/assets/icons/area-graph.svg?raw";
import Message from "@/assets/icons/mail.svg?raw";
export default {
  data() {
    return {
      Graph,
    };
  },
};
</script>
