<template>
  <div class="projects-page">
    <v-container class="py-12">
      <!-- Header -->
      <div class="header-content text-center mb-12">
        <span class="header-tag">Portfolio</span>
        <h1 class="page-title">My Projects</h1>
        <p class="page-subtitle">
          Explore the diverse projects I've developed, each crafted with care
          and designed to solve real-world problems.
        </p>
      </div>

      <!-- Projects Grid -->
      <v-row class="d-flex justify-center">
        <v-col
          v-for="(project, index) in projects"
          :key="project.title"
          cols="12"
          sm="6"
          md="4"
          class="mb-6"
        >
          <div
            class="project-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Image -->
            <div class="image-wrapper">
              <v-img
                :src="project.image"
                :alt="project.title"
                height="220"
                cover
                class="project-img"
              />
              <div class="image-overlay"></div>
              <div class="project-badge">
                {{ project.technology.split(",")[0].trim() }}
              </div>
            </div>

            <!-- Content -->
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <!-- Tech stack -->
              <div class="tech-stack">
                <span
                  v-for="(tech, i) in project.technology.split(',').slice(0, 4)"
                  :key="i"
                  class="tech-tag"
                >
                  {{ tech.trim() }}
                </span>
                <span
                  v-if="project.technology.split(',').length > 4"
                  class="tech-tag more"
                >
                  +{{ project.technology.split(",").length - 4 }}
                </span>
              </div>

              <!-- Link -->
              <v-btn
                class="view-btn"
                block
                rounded="lg"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <v-icon end size="18">mdi-open-in-new</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "Car Price Predictor",
    image: "/imgs/mlwa.png",
    description:
      "🎯 89% Accurate Car Price Prediction | Real-time ML predictions | User authentication | Prediction history tracking | Dark/Light theme | Responsive design | 24 vehicle features analyzed",
    technology: "Vue.js, FastAPI, scikit-learn, MongoDB, JWT, Vuetify",
    link: "https://car-price-predictor-inky.vercel.app/",
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.projects-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
}

/* Header */
.header-content {
  padding-top: 40px;
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
  font-size: clamp(2.5rem, 6vw, 3.5rem);
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
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Project card */
.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(167, 139, 250, 0.3);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.15);
}

/* Image */
.image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(10, 10, 15, 0.8) 100%
  );
  pointer-events: none;
}

.project-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(102, 126, 234, 0.9);
  backdrop-filter: blur(8px);
  padding: 4px 12px;
  border-radius: 100px;
  z-index: 1;
}

/* Content */
.project-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 10px;
  letter-spacing: -0.01em;
}

.project-desc {
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.6;
  margin: 0 0 16px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tech stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.tech-tag {
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  padding: 3px 10px;
  border-radius: 100px;
}

.tech-tag.more {
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  border-color: rgba(167, 139, 250, 0.2);
}

/* View button */
.view-btn {
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

.view-btn:hover {
  background: rgba(167, 139, 250, 0.2) !important;
  border-color: rgba(167, 139, 250, 0.5) !important;
  transform: translateY(-2px);
}
</style>
