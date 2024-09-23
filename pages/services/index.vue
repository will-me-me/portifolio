<template>
  <v-container class="services-container py-12">
    <!-- Title Section -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" sm="8" md="6">
        <h2 class="text-center font-weight-bold">Our Services</h2>
        <p class="text-center mt-2">
          We offer a range of services to help your business thrive. Explore our
          solutions tailored for your needs.
        </p>
      </v-col>
    </v-row>

    <!-- Services Cards Section -->
    <v-row class="d-flex justify-center">
      <v-col
        v-for="service in services"
        :key="service.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="mb-6"
      >
        <v-card class="hover-effect elevation-3" :to="service.link">
          <v-card-title class="d-flex justify-center">
            <v-icon size="48" color="purple">{{ service.icon }}</v-icon>
          </v-card-title>
          <v-card-subtitle class="text-center font-weight-bold">
            {{ service.title }}
          </v-card-subtitle>
          <v-card-text class="text-center">
            {{ service.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { services } from "../../composables/services";
</script>

<style scoped>
.services-container {
  background-color: #f5f5f5;
  border-radius: 12px;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
}

p {
  color: #555;
}

.hover-effect {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.v-card {
  border-radius: 12px;
  background: white;
}

.v-icon {
  font-size: 36px;
}
</style>
