<template>
  <div class="service-detail-page">
    <!-- Loading -->
    <v-container v-if="loading" class="py-12">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <v-progress-circular
            indeterminate
            color="#a78bfa"
            size="64"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>

    <!-- Not Found -->
    <v-container v-else-if="!service" class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <v-icon size="120" color="#4b5563">mdi-alert-circle-outline</v-icon>
          <h2 class="text-h4 mt-4 mb-2" style="color: #fff">
            Service Not Found
          </h2>
          <p class="text-body-1 mb-6" style="color: #9ca3af">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <v-btn class="back-btn" size="large" rounded="pill" to="/services">
            View All Services
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Service Details -->
    <v-container v-else class="py-12">
      <!-- Hero -->
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="10">
          <div class="hero-card">
            <div class="hero-glow"></div>
            <div class="hero-content">
              <div class="hero-icon">
                <v-icon size="48" color="#a78bfa">{{ service.icon }}</v-icon>
              </div>
              <div>
                <h1 class="hero-title">{{ service.title }}</h1>
                <p class="hero-desc">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Overview -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="10">
          <div class="detail-card">
            <div class="card-header">
              <v-icon color="#a78bfa" class="mr-2">mdi-information</v-icon>
              <span>Overview</span>
            </div>
            <div class="card-body">
              <p class="overview-text">{{ service.detailedDescription }}</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Features & Technologies -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="5">
          <div class="detail-card h-100">
            <div class="card-header">
              <v-icon color="#a78bfa" class="mr-2">mdi-star-circle</v-icon>
              <span>Key Features</span>
            </div>
            <div class="card-body">
              <div
                v-for="(feature, index) in service.features"
                :key="index"
                class="feature-row"
              >
                <v-icon size="18" color="#60a5fa">mdi-check-circle</v-icon>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="5">
          <div class="detail-card h-100">
            <div class="card-header">
              <v-icon color="#a78bfa" class="mr-2">mdi-cog</v-icon>
              <span>Technologies</span>
            </div>
            <div class="card-body">
              <div class="tech-grid">
                <span
                  v-for="(tech, index) in service.technologies"
                  :key="index"
                  class="tech-badge"
                >
                  <v-icon size="14" class="mr-1">mdi-code-tags</v-icon>
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Deliverables -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="10">
          <div class="detail-card">
            <div class="card-header">
              <v-icon color="#a78bfa" class="mr-2">mdi-package-variant</v-icon>
              <span>What You'll Get</span>
            </div>
            <div class="card-body">
              <v-row>
                <v-col
                  v-for="(deliverable, index) in service.deliverables"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <div class="deliverable-item">
                    <v-icon size="18" color="#22c55e"
                      >mdi-checkbox-marked-circle</v-icon
                    >
                    <span>{{ deliverable }}</span>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Timeline -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="10">
          <div class="detail-card">
            <div class="card-header">
              <v-icon color="#a78bfa" class="mr-2">mdi-clock-outline</v-icon>
              <span>Project Timeline</span>
            </div>
            <div class="card-body">
              <div class="timeline-content">
                <v-icon size="48" color="#a78bfa" class="mr-4"
                  >mdi-calendar-range</v-icon
                >
                <div>
                  <p class="timeline-text">{{ service.timeline }}</p>
                  <p class="timeline-sub">
                    Estimated delivery time based on project scope
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- CTA -->
      <v-row justify="center" class="mt-8">
        <v-col cols="12" md="10">
          <div class="cta-card">
            <div class="cta-glow"></div>
            <v-icon size="48" color="#a78bfa" class="mb-4"
              >mdi-rocket-launch</v-icon
            >
            <h2 class="cta-title">Ready to Get Started?</h2>
            <p class="cta-text">
              Let's discuss how {{ service.title }} can transform your business
            </p>
            <div class="cta-buttons">
              <v-btn
                class="cta-primary"
                size="large"
                rounded="pill"
                to="/about"
              >
                <v-icon start>mdi-email</v-icon>
                Request a Quote
              </v-btn>
              <v-btn
                class="cta-secondary"
                size="large"
                rounded="pill"
                variant="outlined"
                to="/services"
              >
                <v-icon start>mdi-arrow-left</v-icon>
                View All Services
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { services } from "../../composables/services";

const route = useRoute();
const loading = ref(true);

const service = computed(() => {
  const slug = route.params.slug;
  return services.value.find((s) => s.link === `/services/${slug}`);
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 300);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.service-detail-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
}

/* Hero */
.hero-card {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(167, 139, 250, 0.1) 100%
  );
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 24px;
  padding: 40px;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(167, 139, 250, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
}

.hero-icon {
  width: 88px;
  height: 88px;
  border-radius: 20px;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hero-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.hero-desc {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #9ca3af;
  margin: 0;
  line-height: 1.6;
}

/* Detail cards */
.detail-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.detail-card:hover {
  border-color: rgba(167, 139, 250, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  padding: 20px 24px;
  background: rgba(167, 139, 250, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
}

.card-body {
  padding: 24px;
}

.overview-text {
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: #9ca3af;
  line-height: 1.8;
  margin: 0;
}

.feature-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #9ca3af;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.feature-row:last-child {
  border-bottom: none;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  padding: 6px 14px;
  border-radius: 100px;
}

.deliverable-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #9ca3af;
}

.timeline-content {
  display: flex;
  align-items: center;
}

.timeline-text {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px;
}

.timeline-sub {
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
}

/* CTA */
.cta-card {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(167, 139, 250, 0.1) 100%
  );
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(167, 139, 250, 0.2) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.cta-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
  position: relative;
}

.cta-text {
  font-family: "Inter", sans-serif;
  font-size: 1.05rem;
  color: #9ca3af;
  margin: 0 0 28px;
  position: relative;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.cta-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  height: 52px !important;
  padding: 0 32px !important;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4) !important;
  transition: all 0.3s ease !important;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.6) !important;
}

.cta-secondary {
  border-color: rgba(255, 255, 255, 0.2) !important;
  color: #e5e7eb !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  height: 52px !important;
  padding: 0 32px !important;
  transition: all 0.3s ease !important;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.4) !important;
}

.back-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  padding: 0 32px !important;
}

@media (max-width: 960px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
  }
}
</style>
