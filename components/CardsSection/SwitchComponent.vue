<template>
  <div class="switch-container">
    <label class="switch-container__switch">
      <input v-model="value" type="checkbox" />
      <span class="slider"></span>
    </label>
    <p class="switch-container__info">Deactivate card</p>
  </div>
</template>

<script>
export default {
  name: "SwitchComponent",
  data() {
    return {
      value: false,
    };
  },
};
</script>
