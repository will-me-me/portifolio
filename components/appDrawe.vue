<template>
  <v-navigation-drawer
    class="drawer-modern"
    :width="280"
    temporary
    floating
    v-model="drawerModel"
  >
    <div class="drawer-content">
      <!-- Avatar -->
      <div class="drawer-avatar-section">
        <v-avatar size="100" class="drawer-avatar">
          <v-img src="/imgs/DSC_116511.jpg" alt="William Karia" />
        </v-avatar>
        <h2 class="drawer-name">William Karia</h2>
        <p class="drawer-role">Software Engineer</p>
      </div>

      <!-- Social -->
      <div class="drawer-social">
        <v-btn icon class="social-btn" @click="redirectToX">
          <v-icon size="20">mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon class="social-btn" @click="OpenGit">
          <v-icon size="20">mdi-github</v-icon>
        </v-btn>
        <v-btn icon class="social-btn" @click="redirectToLinked">
          <v-icon size="20">mdi-linkedin</v-icon>
        </v-btn>
      </div>

      <!-- Divider -->
      <div class="drawer-divider"></div>

      <!-- Links -->
      <div class="drawer-links">
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          class="drawer-link"
          :class="{ active: $route.path === link.path }"
          block
          @click="navigateTo(link.path)"
        >
          <v-icon start size="20">{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const drawerModel = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const navigateTo = (path) => {
  router.push(path);
  drawerModel.value = false;
};

const redirectToX = () => {
  window.open("https://twitter.com/willy_karia", "_blank");
};
const OpenGit = () => {
  window.open("https://github.com/will-me-me", "_blank");
};
const redirectToLinked = () => {
  window.open("https://www.linkedin.com/in/william-karia-9aa548214/", "_blank");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.drawer-modern {
  background: #0a0a0f !important;
  border-right: 1px solid rgba(255, 255, 255, 0.06) !important;
}

.drawer-content {
  padding: 40px 20px 20px;
}

.drawer-avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.drawer-avatar {
  border: 3px solid rgba(167, 139, 250, 0.4);
  box-shadow: 0 0 30px rgba(167, 139, 250, 0.2);
  margin-bottom: 16px;
}

.drawer-name {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 4px;
}

.drawer-role {
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #a78bfa;
  margin: 0;
}

.drawer-social {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.social-btn {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #9ca3af !important;
  transition: all 0.3s ease !important;
}

.social-btn:hover {
  background: rgba(167, 139, 250, 0.15) !important;
  border-color: rgba(167, 139, 250, 0.4) !important;
  color: #a78bfa !important;
}

.drawer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(167, 139, 250, 0.3),
    transparent
  );
  margin: 28px 0;
}

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.drawer-link {
  justify-content: flex-start !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 500 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  color: #9ca3af !important;
  border-radius: 12px !important;
  height: 48px !important;
  transition: all 0.3s ease !important;
}

.drawer-link:hover {
  background: rgba(167, 139, 250, 0.1) !important;
  color: #ffffff !important;
}

.drawer-link.active {
  background: rgba(167, 139, 250, 0.15) !important;
  color: #a78bfa !important;
}
</style>
