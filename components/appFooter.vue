<template>
  <v-footer class="bg-teal-darken-4">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
        :to="link.path"
      >
        {{ link.name }}
      </v-btn>
      <!-- <v-btn @click="toggleTheme" class="mx-2" color="white" rounded="xl">
        <v-icon :color="isDark ? 'yellow' : 'blue'">
          {{ isDark ? "mdi-moon-waning-crescent" : "mdi-white-balance-sunny" }}
        </v-icon>
        <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
      </v-btn> -->
      <v-col class="text-center mt-4" cols="12">
        <span class="footer-text">
          &copy; {{ new Date().getFullYear() }} — <strong>William Karia</strong>
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useTheme } from "vuetify";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});

const theme = useTheme();
const currentTheme = ref("light");

const isDark = computed(() => currentTheme.value === "dark");

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === "dark" ? "light" : "dark";
  theme.global.name.value = currentTheme.value;
  localStorage.setItem("theme", currentTheme.value);
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  currentTheme.value = savedTheme;
  theme.global.name.value = savedTheme;
});
</script>

<style scoped>
.v-footer {
  transition: background-color 0.3s ease;
}

.footer-text {
  color: white;
  font-size: 0.875rem;
}
</style>
