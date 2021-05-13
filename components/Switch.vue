<template>
  <label class="switch">
    <input v-model="value" type="checkbox" />
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  name: "SwitchInput",
  data() {
    return {
      value: false,
    };
  },
};
</script>
