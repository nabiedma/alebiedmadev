<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "grayfox";
  },
  set(value) {
    colorMode.preference = value ? "grayfox" : "grayfox-light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <input v-model="isDark" type="checkbox">
    <Icon
      class="swap-on fill-current"
      size="24"
      name="tabler:sun"
    />
    <Icon
      class="swap-off fill-current"
      size="24"
      name="tabler:moon-filled"
    />
  </label>
</template>
