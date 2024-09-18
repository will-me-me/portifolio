<template>
  <v-footer class="bg-teal-darken-4">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
        :to="link.path"
      >
        {{ link.name }}
      </v-btn>
      <v-btn @click="toggleDark()" class="mx-2" color="white" rounded="xl">
        <!-- Conditional Icon based on dark mode state -->
        <v-icon v-if="isDark" color="yellow">mdi-moon-waning-crescent</v-icon>
        <v-icon v-else color="blue">mdi-white-balance-sunny</v-icon>

        <!-- Text Label for Dark/Light mode -->
        <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong> William Karia </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script setup>
import {
  useDark,
  useToggle,
  usePreferredDark,
  useColorMode,
} from "@vueuse/core";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});
// Detect if the system prefers dark mode
const isDark = useDark();
const colorMode = useColorMode({
  modes: {
    dim: "dim",
    cafe: "cafe",
  },
  attribute: "theme",
});
const toggleDark = useToggle(isDark);
// const toggleDark = useToggle(isDark);
</script>

<style>
[theme="dark"] {
  background: #252525;
  color: rgb(59, 187, 80);
}
[theme="cafe"] {
  background: #c0acac;
  color: black;
}
[theme="dim"] {
  background: gray;
  color: white;
}
</style>
