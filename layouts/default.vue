<template>
  <v-app :theme="colorMode.value">
    <!-- Application Bar with Elevated Effect and Rounded Corners -->
    <v-app-bar
      flat
      rounded
      color=""
      height="100"
      style="border-bottom: 5px solid #6a1b9a"
    >
      <div class="mt-0 d-flex justify-center ml-4 hidden-lg-and-up">
        <v-avatar
          class="hidden-lg-and-up"
          variant="outlined"
          size="50"
          image="/imgs/DSC_116511.jpg"
          style="border: 1px solid purple"
        ></v-avatar>
      </div>
      <div class="mt-0 d-flex justify-center ml-12 hidden-sm-and-down">
        <v-avatar
          class="hidden-sm-and-down"
          variant="outlined"
          size="60"
          image="/imgs/DSC_116511.jpg"
          style="border: 2px solid purple"
        ></v-avatar>
      </div>
      <div class="ml-4 hidden-sm-and-down">
        <h1
          style="color: rgba(255, 255, 255, 0.2)"
          class="text-center drawer_anchor"
        >
          <a
            href="http://
                "
            rel="noopener noreferrer"
          >
            William Karia
          </a>
        </h1>
      </div>
      <!-- Navigation Drawer Toggle Button -->

      <!-- Application Title -->
      <!-- <v-app-bar-title>My Portfolio</v-app-bar-title> -->

      <!-- Navigation Links -->
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up custom-nav-icon"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-btn
        text
        class="mx-2 white--text hidden-sm-and-down"
        @click="navigateTo('home')"
        >Home</v-btn
      >
      <v-btn
        text
        class="mx-2 white--text hidden-sm-and-down"
        @click="navigateTo('about')"
        >About</v-btn
      >
      <v-btn
        text
        class="mx-2 white--text hidden-sm-and-down"
        @click="navigateTo('services')"
        >Services</v-btn
      >
      <v-btn
        text
        class="mx-2 white--text hidden-sm-and-down"
        @click="navigateTo('skills')"
        >Skills</v-btn
      >
      <v-btn
        text
        class="mx-2 white--text hidden-sm-and-down"
        @click="navigateTo('projects')"
        >Projects</v-btn
      >
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
import {
  useDark,
  useToggle,
  usePreferredDark,
  useColorMode,
} from "@vueuse/core";
import { useRouter } from "vue-router";
import { ref } from "vue";
const links = [
  { name: "Home", path: "/", icon: "mdi-home" },
  { name: "About", path: "/about", icon: "mdi-account" },
  { name: "Services", path: "/services", icon: "mdi-briefcase" },
  { name: "Skills", path: "/skills", icon: "mdi-tools" },
  { name: "Projects", path: "/projects", icon: "mdi-folder-outline" },
];

const colorMode = useColorMode({
  modes: {
    dim: "dim",
    cafe: "cafe",
  },
  attribute: "theme",
});

const drawer = ref(false);

const router = useRouter();
const navigateTo = (page) => {
  if (page == "home") {
    router.push("/");
  }
  router.push({ name: page });
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

/* Add custom styles */
.v-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.3s ease;
}

.v-icon {
  font-size: 28px;
}

.v-app-bar-title {
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}

.v-btn {
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.drawer_anchor {
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  -moz-text-align-last: center;
  text-align-last: center;
  font-family: "Poppins", sans-serif;
}
.drawer_anchor a {
  text-decoration: none;
  color: rgba(10, 10, 10, 0.979);
}
.custom-nav-icon {
  color: purple; /* White icon for visibility */
  font-size: 25px; /* Larger size for a modern look */
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition on hover */
}
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
