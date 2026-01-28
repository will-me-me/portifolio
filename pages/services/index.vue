<template>
  <v-container class="services-container py-12">
    <!-- Title Section -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" sm="10" md="8">
        <h2 class="text-center font-weight-bold text-h3 mb-4">Our Services</h2>
        <p class="text-center text-h6 text-medium-emphasis">
          We offer a comprehensive range of services to help your business
          thrive in the digital age. Explore our solutions tailored to meet your
          specific needs.
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
        <v-card
          class="hover-effect elevation-2 h-100 d-flex flex-column"
          :to="service.link"
        >
          <!-- Icon Section -->
          <v-card-title class="d-flex justify-center pt-6 pb-4">
            <v-avatar size="80" color="purple-lighten-5">
              <v-icon size="48" color="purple-darken-2">{{
                service.icon
              }}</v-icon>
            </v-avatar>
          </v-card-title>

          <!-- Title -->
          <v-card-subtitle
            class="text-center font-weight-bold text-h6 px-4 pb-2"
          >
            {{ service.title }}
          </v-card-subtitle>

          <!-- Description -->
          <v-card-text class="text-center flex-grow-1 pb-4">
            <p class="text-body-2 text-medium-emphasis mb-4">
              {{ service.description }}
            </p>

            <!-- Key Features -->
            <v-divider class="my-3"></v-divider>
            <div class="text-left">
              <p
                class="text-caption font-weight-bold text-purple-darken-2 mb-2"
              >
                Key Features:
              </p>
              <ul class="feature-list text-caption">
                <li
                  v-for="(feature, index) in service.features.slice(0, 3)"
                  :key="index"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Technologies Badge -->
            <div class="mt-3">
              <v-chip
                v-for="(tech, index) in service.technologies.slice(0, 3)"
                :key="index"
                size="x-small"
                class="ma-1"
                color="purple-lighten-4"
              >
                {{ tech }}
              </v-chip>
              <v-chip
                v-if="service.technologies.length > 3"
                size="x-small"
                class="ma-1"
                color="purple-lighten-3"
              >
                +{{ service.technologies.length - 3 }} more
              </v-chip>
            </div>
          </v-card-text>

          <!-- Footer -->
          <v-card-actions class="px-4 pb-4">
            <v-btn
              block
              variant="flat"
              color="purple-darken-2"
              append-icon="mdi-arrow-right"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- CTA Section -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" md="8">
        <v-card class="cta-card text-center pa-8" color="purple-darken-2" dark>
          <v-card-title class="text-h4 font-weight-bold mb-4">
            Ready to Get Started?
          </v-card-title>
          <v-card-text class="text-h6 mb-6">
            Let's discuss how we can help transform your business with our
            expert services.
          </v-card-text>
          <v-btn
            size="large"
            variant="flat"
            color="white"
            class="text-purple-darken-2"
            to="/contact"
          >
            Contact Us Today
          </v-btn>
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
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px;
  min-height: 100vh;
}

h2 {
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
  letter-spacing: -0.5px;
}

p {
  color: #555;
  line-height: 1.8;
}

.hover-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.hover-effect:hover {
  transform: translateY(-8px);
  box-shadow: 0px 12px 40px rgba(103, 58, 183, 0.25);
}

.v-card {
  border-radius: 16px;
  background: white;
  overflow: hidden;
}

.feature-list {
  list-style: none;
  padding-left: 0;
}

.feature-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 6px;
  color: #666;
}

.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #7b1fa2;
  font-weight: bold;
}

.cta-card {
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  h2 {
    font-size: 2rem;
  }
}
</style>
