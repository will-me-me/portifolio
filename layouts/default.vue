<template>
  <v-app>
    <!-- Application Bar with Elevated Effect and Rounded Corners -->
    <v-app-bar
      flat
      rounded
      color=""
      height="100"
      style="border-bottom: 5px solid #6a1b9a"
    >
      <div class="mt-0 d-flex justify-center ml-12">
        <v-avatar
          variant="outlined"
          size="60"
          image="/imgs/DSC_116511.jpg"
          style="border: 2px solid purple"
        ></v-avatar>
      </div>
      <div class="ml-4">
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
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- Application Title -->
      <!-- <v-app-bar-title>My Portfolio</v-app-bar-title> -->

      <!-- Navigation Links -->
      <v-spacer></v-spacer>
      <v-btn text class="mx-2 white--text" @click="navigateTo('home')"
        >Home</v-btn
      >
      <v-btn text class="mx-2 white--text" @click="navigateTo('about')"
        >About</v-btn
      >
      <v-btn text class="mx-2 white--text" @click="navigateTo('services')"
        >Services</v-btn
      >
      <v-btn text class="mx-2 white--text" @click="navigateTo('skills')"
        >Skills</v-btn
      >
      <v-btn text class="mx-2 white--text" @click="navigateTo('projects')"
        >Projects</v-btn
      >

      <!-- Icons on the Right Side -->
      <!-- <v-btn icon @click="showHeart">
        <v-icon color="white">mdi-heart</v-icon>
      </v-btn>
      <v-btn icon @click="search">
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="openMenu">
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <slot />
      <!-- <NuxtPage /> -->
    </v-main>
    <br />
    <br />
    <app-footer />
  </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";

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
</style>
