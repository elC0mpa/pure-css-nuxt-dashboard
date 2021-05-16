<template>
  <div class="switch-container">
    <label class="switch-container__switch">
      <input :value="value" @input="$emit('input', !value)" type="checkbox" />
      <span class="slider"></span>
    </label>
    <p class="switch-container__info">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "SwitchComponent",
  props: {
    falseText: {
      type: String,
      required: true,
    },
    trueText: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    text() {
      return this.value ? this.trueText : this.falseText 
    }
  },
};
</script>
