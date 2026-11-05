<template>
  <div class="skills-page">
    <v-container class="py-12">
      <!-- Header -->
      <div class="header-content text-center mb-12">
        <span class="header-tag">&lt; My Arsenal /&gt;</span>
        <h1 class="page-title">Skills & Technologies</h1>
        <p class="page-subtitle">
          Tools and technologies I've mastered over the years
        </p>
      </div>

      <!-- Skills Grid -->
      <v-row class="d-flex justify-center">
        <v-col
          v-for="(skill, index) in mySkills"
          :key="skill.title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-6"
        >
          <div
            class="skill-card"
            :style="{ animationDelay: `${index * 0.08}s` }"
          >
            <div class="card-glow"></div>

            <!-- Icon -->
            <div class="skill-icon-wrapper">
              <v-avatar size="64" class="skill-avatar">
                <v-img :src="skill.svg" :alt="skill.title" />
              </v-avatar>
            </div>

            <!-- Title -->
            <h3 class="skill-title">{{ skill.title }}</h3>

            <!-- Rating -->
            <div class="rating-wrapper">
              <v-rating
                density="comfortable"
                active-color="#fbbf24"
                color="#4b5563"
                v-model="skill.rating"
                readonly
                size="small"
                half-increments
              />
            </div>

            <!-- Experience -->
            <p class="experience">
              <span class="experience-number">{{ skill.experience }}</span>
              years experience
            </p>

            <!-- Tools -->
            <div class="tools-wrapper">
              <span v-for="(tool, i) in skill.tools" :key="i" class="tool-chip">
                {{ tool }}
              </span>
            </div>

            <!-- Progress bar -->
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: `${(skill.rating / 5) * 100}%` }"
              ></div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mySkills = ref([
  {
    title: "JavaScript",
    svg: "imgs/javascript-svgrepo-com.svg",
    rating: 4.5,
    experience: 4,
    tools: ["ES6+", "Vanilla Js"],
  },
  {
    title: "Vue.js",
    svg: "imgs/vue-svgrepo-com.svg",
    rating: 5,
    experience: 4,
    tools: ["Vuex", "Vuetify", "Vue Router"],
  },
  {
    title: "Nuxt.js",
    svg: "imgs/nuxt-icon-svgrepo-com(1).svg",
    rating: 5,
    experience: 4,
    tools: ["Composition API", "SSR", "Modules", "Pinia"],
  },
  {
    title: "Python",
    svg: "imgs/python-svgrepo-com.svg",
    rating: 5,
    experience: 5,
    tools: ["Flask", "FastAPI"],
  },
  {
    title: "FastAPI",
    svg: "imgs/fastapi-svgrepo-com.svg",
    rating: 4,
    experience: 4,
    tools: ["Pydantic", "SQLAlchemy"],
  },
  {
    title: "GitHub",
    svg: "imgs/github-svgrepo-com.svg",
    rating: 5,
    experience: 4,
    tools: ["Git", "Actions", "CI/CD"],
  },
  {
    title: "Docker",
    svg: "imgs/docker-svgrepo-com.svg",
    rating: 3.5,
    experience: 3,
    tools: ["Docker Compose", "Kubernetes"],
  },
  {
    title: "MongoDB",
    svg: "imgs/mongodb-svgrepo-com.svg",
    rating: 3,
    experience: 2,
    tools: ["Mongoose", "Aggregation Pipeline"],
  },
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.skills-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
}

.header-content {
  padding-top: 40px;
}

.header-tag {
  display: inline-block;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #60a5fa;
  letter-spacing: 2px;
  margin-bottom: 12px;
  padding: 6px 16px;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
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
  max-width: 500px;
  margin: 0 auto;
}

/* Skill card */
.skill-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 28px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.skill-card:hover {
  transform: translateY(-8px);
  border-color: rgba(167, 139, 250, 0.3);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

.skill-card:hover .card-glow {
  opacity: 1;
}

.skill-icon-wrapper {
  margin-bottom: 16px;
}

.skill-avatar {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-avatar {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(167, 139, 250, 0.2);
  border-color: rgba(167, 139, 250, 0.3);
}

.skill-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
}

.rating-wrapper {
  margin-bottom: 8px;
}

.experience {
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.experience-number {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #a78bfa;
}

.tools-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-bottom: 16px;
  min-height: 28px;
}

.tool-chip {
  font-family: "Inter", sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  padding: 3px 8px;
  border-radius: 100px;
  white-space: nowrap;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  overflow: hidden;
  margin-top: auto;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #a78bfa, #60a5fa);
  border-radius: 100px;
  transition: width 1s ease-out;
  box-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
}
</style>
