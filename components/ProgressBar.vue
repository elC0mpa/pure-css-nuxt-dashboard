<template>
  <div>
    <div class="progress-bar">
      <span
        :style="widthProgress"
        :class="{
          'is-primary': color === 'primary',
          'is-secondary': color === 'secondary',
          'is-tertiary': color === 'tertiary',
          'is-disabled': color === 'disabled',
        }"
      ></span>
    </div>
    <div class="progress-bar__info-container">
      <p class="progress-bar__info-container--text secondary-info">
        {{ lowLeftText }}
      </p>
      <p class="progress-bar__info-container--status secondary-info">
        {{ lowRightText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {};
  },
  props: {
    lowLeftText: {
      type: String,
      default: "Low Left Text",
    },
    lowRightText: {
      type: String,
      default: "Low Right Text",
    },
    color: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    widthProgress() {
      return "width: " + this.width + "%";
    }
  }
};
</script>
