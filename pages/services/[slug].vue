<template>
  <v-container class="service-detail-container py-12">
    <!-- Loading State -->
    <v-row v-if="loading" justify="center">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="purple"></v-progress-circular>
      </v-col>
    </v-row>

    <!-- Service Not Found -->
    <v-row v-else-if="!service" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-icon size="120" color="grey-lighten-1"
          >mdi-alert-circle-outline</v-icon
        >
        <h2 class="text-h4 mt-4 mb-2">Service Not Found</h2>
        <p class="text-body-1 text-medium-emphasis mb-6">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <v-btn color="purple-darken-2" to="/services" size="large">
          View All Services
        </v-btn>
      </v-col>
    </v-row>

    <!-- Service Details -->
    <div v-else>
      <!-- Hero Section -->
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="10">
          <v-card class="hero-card elevation-4" color="purple-darken-2" dark>
            <v-card-text class="pa-8">
              <div class="d-flex align-center mb-4">
                <v-avatar size="80" color="white" class="mr-4">
                  <v-icon size="48" color="purple-darken-2">{{
                    service.icon
                  }}</v-icon>
                </v-avatar>
                <div>
                  <h1 class="text-h3 font-weight-bold mb-2">
                    {{ service.title }}
                  </h1>
                  <p class="text-h6 text-purple-lighten-4">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Detailed Description -->
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="10">
          <v-card class="elevation-2">
            <v-card-title
              class="text-h5 font-weight-bold bg-purple-lighten-5 pa-4"
            >
              <v-icon class="mr-2" color="purple-darken-2"
                >mdi-information</v-icon
              >
              Overview
            </v-card-title>
            <v-card-text class="pa-6">
              <p class="text-body-1 text-justify">
                {{ service.detailedDescription }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Features and Technologies Row -->
      <v-row justify="center" class="mb-8">
        <!-- Features -->
        <v-col cols="12" md="5">
          <v-card class="elevation-2 h-100">
            <v-card-title
              class="text-h5 font-weight-bold bg-purple-lighten-5 pa-4"
            >
              <v-icon class="mr-2" color="purple-darken-2"
                >mdi-star-circle</v-icon
              >
              Key Features
            </v-card-title>
            <v-card-text class="pa-6">
              <v-list density="compact">
                <v-list-item
                  v-for="(feature, index) in service.features"
                  :key="index"
                  class="mb-2"
                >
                  <template v-slot:prepend>
                    <v-icon color="purple-darken-2" size="small"
                      >mdi-check-circle</v-icon
                    >
                  </template>
                  <v-list-item-title class="text-body-2">{{
                    feature
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Technologies -->
        <v-col cols="12" md="5">
          <v-card class="elevation-2 h-100">
            <v-card-title
              class="text-h5 font-weight-bold bg-purple-lighten-5 pa-4"
            >
              <v-icon class="mr-2" color="purple-darken-2">mdi-cog</v-icon>
              Technologies We Use
            </v-card-title>
            <v-card-text class="pa-6">
              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="(tech, index) in service.technologies"
                  :key="index"
                  color="purple-lighten-4"
                  size="default"
                  class="ma-1"
                >
                  <v-icon start size="small">mdi-code-tags</v-icon>
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Deliverables -->
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="10">
          <v-card class="elevation-2">
            <v-card-title
              class="text-h5 font-weight-bold bg-purple-lighten-5 pa-4"
            >
              <v-icon class="mr-2" color="purple-darken-2"
                >mdi-package-variant</v-icon
              >
              What You'll Get
            </v-card-title>
            <v-card-text class="pa-6">
              <v-row>
                <v-col
                  v-for="(deliverable, index) in service.deliverables"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-card variant="tonal" color="purple-lighten-5" class="pa-4">
                    <div class="d-flex align-center">
                      <v-icon color="purple-darken-2" class="mr-3"
                        >mdi-checkbox-marked-circle</v-icon
                      >
                      <span class="text-body-2">{{ deliverable }}</span>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Timeline -->
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="10">
          <v-card class="elevation-2">
            <v-card-title
              class="text-h5 font-weight-bold bg-purple-lighten-5 pa-4"
            >
              <v-icon class="mr-2" color="purple-darken-2"
                >mdi-clock-outline</v-icon
              >
              Project Timeline
            </v-card-title>
            <v-card-text class="pa-6">
              <div class="d-flex align-center">
                <v-icon size="48" color="purple-darken-2" class="mr-4"
                  >mdi-calendar-range</v-icon
                >
                <div>
                  <p class="text-h6 font-weight-medium mb-1">
                    {{ service.timeline }}
                  </p>
                  <p class="text-body-2 text-medium-emphasis">
                    Estimated delivery time based on project scope
                  </p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- CTA Section -->
      <v-row justify="center" class="mt-12">
        <v-col cols="12" md="10">
          <v-card
            class="cta-card elevation-8 text-center pa-10"
            color="purple-darken-2"
            dark
          >
            <v-icon size="64" class="mb-4">mdi-rocket-launch</v-icon>
            <h2 class="text-h4 font-weight-bold mb-4">Ready to Get Started?</h2>
            <p class="text-h6 mb-6 text-purple-lighten-4">
              Let's discuss how {{ service.title }} can transform your business
            </p>
            <div class="d-flex justify-center gap-4 flex-wrap">
              <v-btn
                size="x-large"
                variant="flat"
                color="white"
                class="text-purple-darken-2"
                to="/contact"
                prepend-icon="mdi-email"
              >
                Request a Quote
              </v-btn>
              <v-btn
                size="x-large"
                variant="outlined"
                color="white"
                to="/services"
                prepend-icon="mdi-arrow-left"
              >
                View All Services
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { services } from "../../composables/services";

const route = useRoute();
const loading = ref(true);

// Find the service based on the slug
const service = computed(() => {
  const slug = route.params.slug;
  return services.value.find((s) => s.link === `/services/${slug}`);
});

onMounted(() => {
  // Simulate loading (remove if not needed)
  setTimeout(() => {
    loading.value = false;
  }, 300);

  // Scroll to top when component mounts
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style scoped>
.service-detail-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

h1,
h2 {
  font-family: "Poppins", sans-serif;
  letter-spacing: -0.5px;
}

.hero-card {
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.v-card {
  border-radius: 12px;
}

.cta-card {
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  h1 {
    font-size: 2rem !important;
  }

  .hero-card .d-flex {
    flex-direction: column;
    text-align: center;
  }

  .hero-card .v-avatar {
    margin-right: 0 !important;
    margin-bottom: 16px;
  }
}
</style>
