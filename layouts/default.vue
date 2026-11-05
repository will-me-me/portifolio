<template>
  <v-app>
    <v-app-bar class="app-bar-modern" flat height="80">
      <!-- Logo / Avatar -->
      <div class="logo-section ml-4" @click="$router.push('/')">
        <v-avatar size="44" class="logo-avatar">
          <v-img src="/imgs/DSC_116511.jpg" alt="William Karia" />
        </v-avatar>
        <span class="logo-text hidden-sm-and-down">William Karia</span>
      </div>

      <v-spacer></v-spacer>

      <!-- Desktop Nav -->
      <div class="nav-links hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.name"
          class="nav-btn"
          :class="{ active: $route.path === link.path }"
          @click="navigateTo(link)"
        >
          <v-icon start size="18">{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
      </div>

      <!-- Mobile Menu -->
      <v-btn
        icon
        class="menu-btn hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      >
        <v-icon size="24">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <slot />
    </v-main>

    <app-footer :links="links" />
    <app-drawe :links="links" v-model="drawer" />
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const drawer = ref(false);

const links = [
  { name: "Home", path: "/", icon: "mdi-home" },
  { name: "About", path: "/about", icon: "mdi-account" },
  { name: "Services", path: "/services", icon: "mdi-briefcase" },
  { name: "Skills", path: "/skills", icon: "mdi-tools" },
  { name: "Projects", path: "/projects", icon: "mdi-folder-outline" },
];

const navigateTo = (link) => {
  router.push(link.path);
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.app-bar-modern {
  background: rgba(10, 10, 15, 0.8) !important;
  backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.logo-section:hover {
  opacity: 0.8;
}

.logo-avatar {
  border: 2px solid rgba(167, 139, 250, 0.4);
  box-shadow: 0 0 20px rgba(167, 139, 250, 0.2);
}

.logo-text {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  gap: 4px;
  margin-right: 16px;
}

.nav-btn {
  font-family: "Inter", sans-serif !important;
  font-weight: 500 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  color: #9ca3af !important;
  border-radius: 10px !important;
  padding: 0 16px !important;
  height: 40px !important;
  transition: all 0.3s ease !important;
}

.nav-btn:hover {
  background: rgba(167, 139, 250, 0.1) !important;
  color: #ffffff !important;
}

.nav-btn.active {
  background: rgba(167, 139, 250, 0.15) !important;
  color: #a78bfa !important;
}

.menu-btn {
  color: #a78bfa !important;
  margin-right: 8px;
}
</style>
