<template>
  <v-footer class="bg-teal-lighten-1 mt-0">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
      >
        {{ link }}
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
import { useDark, useToggle, usePreferredDark } from "@vueuse/core";

// Define the links array
const links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];

// Detect if the system prefers dark mode
const preferredDark = usePreferredDark();
// Set up dark mode toggle
const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
  value: preferredDark,
});
const toggleDark = useToggle(isDark);
</script>
