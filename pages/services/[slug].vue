<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h2 class="text-center">{{ serviceTitle }}</h2>
        <p class="text-center mt-4">{{ serviceDescription }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const serviceTitle = route.params.slug.replace(/-/g, " ").toUpperCase();
const serviceDescription = "This is the detailed view for " + serviceTitle;
</script>

<style scoped>
h2 {
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
  color: #6a1b9a;
}
</style>
