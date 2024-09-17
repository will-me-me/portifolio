<template>
  <v-card class="mx-auto sleek-card pa-6" max-width="600" elevation="12" shaped>
    <!-- Avatar -->
    <div class="d-flex justify-end">
      <v-avatar class="mx-auto avatar mt-4" size="120">
        <v-img src="/imgs/DSC_116511.jpg" alt="William Karia" />
      </v-avatar>
    </div>

    <!-- Name -->
    <v-card-title class="text-h4 font-weight-bold text-center mt-4">
      William Karia
    </v-card-title>

    <!-- Subtitle -->
    <v-card-subtitle class="text-center subtitle mt-1 mb-4">
      Software Engineer | Vue.js & Nuxt.js Expert
    </v-card-subtitle>

    <!-- Card Text -->
    <v-card-text class="text-center text--secondary pa-4 card-text">
      I specialize in front-end development using modern web technologies like
      Vue.js and Nuxt.js to build dynamic and responsive user interfaces. Let’s
      collaborate and bring your ideas to life!
    </v-card-text>

    <!-- Social Icons -->
    <v-card-actions class="d-flex justify-center mt-4 mb-2">
      <div>
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
    </v-card-actions>
  </v-card>
</template>

<script setup>
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
.sleek-card {
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.avatar {
  border: 1px solid #232324;
  border-radius: 50%;
}

.subtitle {
  color: #616161;
  font-size: 1rem;
  font-weight: 500;
}

.card-text {
  font-size: 1rem;
  line-height: 1.5;
}

.v-btn {
  margin: 0 10px;
  transition: all 0.3s ease;
}

.v-btn:hover {
  background-color: #f5f5f5;
}

.v-icon {
  transition: transform 0.3s ease;
}

.v-btn:hover .v-icon {
  transform: scale(1.2);
}
</style>
