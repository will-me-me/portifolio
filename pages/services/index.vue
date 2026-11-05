<template>
  <div class="services-page">
    <!-- Hero Header -->
    <div class="page-header">
      <div class="header-glow"></div>
      <v-container>
        <div class="header-content">
          <span class="header-tag">What I Offer</span>
          <h1 class="page-title">Services</h1>
          <p class="page-subtitle">
            Comprehensive solutions tailored to bring your digital vision to
            life
          </p>
        </div>
      </v-container>
    </div>

    <!-- Services Grid -->
    <v-container class="py-12">
      <v-row class="d-flex justify-center">
        <v-col
          v-for="(service, index) in services"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
          class="mb-6"
        >
          <div
            class="service-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="card-glow"></div>

            <!-- Icon -->
            <div class="icon-wrapper">
              <v-icon size="40" color="#a78bfa">{{ service.icon }}</v-icon>
            </div>

            <!-- Title -->
            <h3 class="service-title">{{ service.title }}</h3>

            <!-- Description -->
            <p class="service-desc">{{ service.description }}</p>

            <!-- Features -->
            <div class="features">
              <div
                v-for="(feature, i) in service.features.slice(0, 3)"
                :key="i"
                class="feature-item"
              >
                <v-icon size="16" color="#60a5fa">mdi-check-circle</v-icon>
                <span>{{ feature }}</span>
              </div>
            </div>

            <!-- Tech chips -->
            <div class="tech-chips">
              <span
                v-for="(tech, i) in service.technologies.slice(0, 3)"
                :key="i"
                class="tech-chip"
              >
                {{ tech }}
              </span>
              <span
                v-if="service.technologies.length > 3"
                class="tech-chip more"
              >
                +{{ service.technologies.length - 3 }}
              </span>
            </div>

            <!-- Link -->
            <v-btn class="learn-btn" block rounded="lg" :to="service.link">
              Learn More
              <v-icon end size="18">mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- CTA -->
      <div class="cta-section">
        <div class="cta-card">
          <div class="cta-glow"></div>
          <v-icon size="48" color="#a78bfa" class="mb-4"
            >mdi-rocket-launch</v-icon
          >
          <h2 class="cta-title">Ready to Get Started?</h2>
          <p class="cta-text">
            Let's discuss how I can help transform your business
          </p>
          <v-btn class="cta-btn" size="large" rounded="pill" to="/about">
            Contact Me Today
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { services } from "../../composables/services";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.services-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
}

/* Header */
.page-header {
  position: relative;
  padding: 80px 0 40px;
  text-align: center;
  overflow: hidden;
}

.header-glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.header-content {
  position: relative;
  z-index: 1;
}

.header-tag {
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #a78bfa;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
  padding: 6px 16px;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 100px;
}

.page-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
  background: linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: #9ca3af;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Service cards */
.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(167, 139, 250, 0.5),
    transparent
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(167, 139, 250, 0.3);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

.service-card:hover .card-glow {
  opacity: 1;
}

.icon-wrapper {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.15),
    rgba(167, 139, 250, 0.15)
  );
  border: 1px solid rgba(167, 139, 250, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 8px 24px rgba(167, 139, 250, 0.2);
}

.service-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
}

.service-desc {
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #9ca3af;
  line-height: 1.7;
  margin: 0 0 20px;
  flex-grow: 1;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #9ca3af;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.tech-chip {
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.2);
  padding: 4px 10px;
  border-radius: 100px;
}

.tech-chip.more {
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
  border-color: rgba(96, 165, 250, 0.2);
}

.learn-btn {
  background: rgba(167, 139, 250, 0.1) !important;
  border: 1px solid rgba(167, 139, 250, 0.3) !important;
  color: #a78bfa !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  height: 44px !important;
  transition: all 0.3s ease !important;
}

.learn-btn:hover {
  background: rgba(167, 139, 250, 0.2) !important;
  border-color: rgba(167, 139, 250, 0.5) !important;
  transform: translateY(-2px);
}

/* CTA */
.cta-section {
  margin-top: 60px;
}

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

.cta-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  height: 52px !important;
  padding: 0 36px !important;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4) !important;
  transition: all 0.3s ease !important;
  position: relative;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.6) !important;
}
</style>
