<template>
  <!-- <v-layout> -->
  <!-- <v-app-bar flat color="transparent">
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        variant="outlined"
        class="mr-2"
        size="60"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar> -->
  <v-navigation-drawer
    app
    class="bg-#040b14"
    theme="dark"
    floating
    temporary
    :width="300"
    color="#040b14"
    permanent
    persistent
  >
    <div class="mt-0 d-flex justify-center">
      <v-avatar
        variant="outlined"
        size="130"
        image="/imgs/DSC_116511.jpg"
      ></v-avatar>
    </div>
    <div class="mt-4">
      <h1 style="color: #fff" class="text-center drawer_anchor">
        <a
          href="http://
                "
          rel="noopener noreferrer"
        >
          William Karia
        </a>
      </h1>
    </div>
    <div class="d-flex align-center justify-space-evenly mt-3">
      <v-icon
        @click="redirectToX"
        variant="outlined"
        color=""
        icon="mdi-twitter"
        size="x-large"
      ></v-icon>
      <v-icon
        @click="OpenGit"
        variant="outlined"
        color=""
        icon="mdi-github"
        size="x-large"
      ></v-icon>
      <v-icon
        @click="redirectToLinked"
        variant="outlined"
        color=""
        icon="mdi-linkedin"
        size="x-large"
      ></v-icon>
    </div>
    <br />
    <v-divider></v-divider>

    <v-list density="compact" class="ml-9" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="Skills"
        value="account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Projects"
        value="users"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- </v-layout> -->
  <!-- <v-main> <slot /> </v-main> -->
</template>

<script setup>
import { useDrawer } from "../composables/states";

import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const drawer = useDrawer();

// const CloseDrawer = () => {
//   console.log(drawer);
//   console.log(!drawer);
//   return !drawer;
// };

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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

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
  color: #fff;
}
</style>
