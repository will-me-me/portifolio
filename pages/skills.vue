<template>
  <div class="skills_container">
    <v-card elevation="5" class="card-background">
      <v-container color="transparent">
        <h2 class="skills_title"><span> &lt; Skills /&gt;</span></h2>
        <v-row>
          <v-col
            cols="12"
            md="3"
            sm="4"
            class="mb-6"
            v-for="skills in mySkills"
            :key="skills.title"
          >
            <v-lazy
              :min-height="200"
              :options="{ threshold: 0.5 }"
              transition="fade-transition"
            >
              <v-card
                class="pa-3 card-hover"
                variant="outlined"
                hover
                max-width="450"
              >
                <v-card-title>
                  <span>{{ skills.title }}</span>
                </v-card-title>
                <v-divider></v-divider>
                <div class="d-flex justify-center">
                  <v-avatar
                    class="avatar-shadow"
                    size="60"
                    :image="skills.svg"
                  ></v-avatar>
                </div>
                <v-divider></v-divider>
                <v-card-text class="text-center">
                  <v-rating
                    density="comfortable"
                    active-color="yellow darken-2"
                    color="orange lighten-1"
                    v-model="skills.rating"
                    readonly
                    size="small"
                    half-increments
                  >
                  </v-rating>
                  <p class="mt-2">{{ skills.experience }} years experience</p>
                  <p class="tools-used">Tools: {{ skills.tools.join(", ") }}</p>
                </v-card-text>
                <v-divider></v-divider>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
    tools: ["ES6+", "vannila Js"],
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

.skills_title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  padding-bottom: 20px;
  position: relative;
  color: #173b6c;
  font-family: "Raleway", sans-serif;
}

.skills_title::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #149ddd;
  bottom: 0;
  left: 0;
}

.skills_container {
  background: linear-gradient(to right, #f5f8fd, #e1ecf4);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.v-card-title {
  text-align: center !important;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.v-card {
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.avatar-shadow {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.card-hover:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

p.tools-used {
  font-size: 14px;
  color: #6c757d;
  margin: 0;
}
</style>
