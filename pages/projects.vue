<template>
  <v-container class="projects-container py-12">
    <!-- Title Section -->
    <v-row justify="center" class="mb-10">
      <v-col cols="12" sm="8" md="6">
        <h2 class="text-center font-weight-bold display-1">My Projects</h2>
        <p class="text-center mt-2 subtitle-1">
          Explore the diverse projects I’ve developed, each crafted with care
          and designed to solve real-world problems. Click to learn more about
          each project.
        </p>
      </v-col>
    </v-row>

    <!-- Projects Cards Section -->
    <v-row class="d-flex justify-center">
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="mb-6"
      >
        <v-card class="hover-effect elevation-4 project-card">
          <v-img
            :src="project.image"
            alt="project image"
            height="200px"
            class="project-img"
          ></v-img>
          <v-card-title class="text-center title-1">{{
            project.title
          }}</v-card-title>
          <v-card-subtitle class="text-center subtitle-2">{{
            project.technology
          }}</v-card-subtitle>
          <v-card-text class="text-center body-1">
            {{ project.description }}
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              color="purple"
              :href="project.link"
              target="_blank"
              text
              large
              rounded
              >View Project</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "E-Commerce Platform",
    image: "/images/ecommerce.jpg", // Replace with your image path
    description:
      "A fully functional e-commerce platform with secure payment integration and user management.",
    technology: "Vue.js, Nuxt.js, Stripe API",
    link: "https://example.com/ecommerce", // Replace with your project link
  },
  {
    title: "Business Analytics Dashboard",
    image: "/images/dashboard.jpg", // Replace with your image path
    description:
      "A real-time business analytics dashboard that visualizes key metrics and KPIs.",
    technology: "Vue.js, D3.js, FastAPI",
    link: "https://example.com/dashboard", // Replace with your project link
  },
  {
    title: "Social Media App",
    image: "/images/social-media.jpg", // Replace with your image path
    description:
      "A mobile-responsive social media platform for connecting people and sharing content.",
    technology: "Vue.js, Firebase, Tailwind CSS",
    link: "https://example.com/social-media", // Replace with your project link
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.jpg", // Replace with your image path
    description:
      "A personal portfolio website to showcase my projects and skills.",
    technology: "Nuxt.js, Vuetify, CSS",
    link: "https://example.com/portfolio", // Replace with your project link
  },
]);
</script>

<style scoped>
.projects-container {
  background-color: #f3f3f3;
  border-radius: 16px;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: 2.8rem;
  font-weight: bold;
  color: #4a148c;
  margin-bottom: 16px;
}

.subtitle-1 {
  color: #6a6a6a;
  font-size: 1.2rem;
  line-height: 1.6;
}

.project-img {
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card {
  background-color: #ffffff;
  border-radius: 16px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  font-weight: 700;
  font-size: 1.4rem;
  color: #3e3e3e;
  margin-top: 10px;
}

.v-card-subtitle {
  font-size: 1rem;
  color: #7b7b7b;
  margin-top: 4px;
}

.v-btn {
  font-weight: bold;
  background-color: #8e24aa;
  color: #ffffff;
  margin-top: 10px;
}

.v-btn:hover {
  background-color: #7b1fa2;
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: 2rem;
  }
}
</style>
