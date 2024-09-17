<template>
  <div class="skills_container">
    <v-card elevation="15">
      <v-timeline side="end">
        <v-timeline-item
          v-for="item in items"
          :key="item.id"
          :dot-color="item.color"
          size="small"
          fill-dot
          :icon="item.icon"
        >
          <v-container color="transparent">
            <h2 class="skills_title"><span> &lt; Skills /&gt;</span></h2>
            <v-row>
              <v-col
                cols="12"
                md="3"
                sm="4"
                v-for="skills in mySkills"
                :key="skills.title"
              >
                <v-lazy
                  :min-height="200"
                  :options="{ threshold: 0.5 }"
                  transition="fade-transition"
                >
                  <v-card
                    class="pa-2 cursor-progress"
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
                        variant=""
                        size="60"
                        :image="skills.svg"
                      ></v-avatar>
                    </div>
                    <v-divider></v-divider>
                    <v-card-text class="text-center">
                      <v-rating
                        density="comfortable"
                        active-color="gray"
                        color="orange-lighten-1"
                        v-model="skills.rating"
                        readonly
                        size="x-small"
                        half-increments
                      >
                      </v-rating>
                    </v-card-text>
                    <v-divider></v-divider>
                  </v-card>
                </v-lazy>
              </v-col>
            </v-row>
          </v-container>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script setup>
const items = [
  {
    id: 1,
    color: "info",
    icon: "mdi-star",
  },
  // {
  //   id: 2,
  //   color: "error",
  //   icon: "mdi-alert-circle",
  // },
];
const mySkills = [
  {
    title: "javascript",
    svg: "imgs/javascript-svgrepo-com.svg",
    rating: 4.5,
  },
  {
    title: "Vue.js",
    svg: "imgs/vue-svgrepo-com.svg",
    rating: 5,
  },
  {
    title: "Nuxt.js",
    svg: "imgs/nuxt-icon-svgrepo-com(1).svg",
    rating: 5,
  },
  {
    title: "Python",
    svg: "imgs/python-svgrepo-com.svg",
    rating: 5,
  },
  {
    title: "FastApi",
    svg: "imgs/fastapi-svgrepo-com.svg",
    rating: 4,
  },
  {
    title: "GitHub",
    svg: "imgs/github-svgrepo-com.svg",
    rating: 5,
  },
  {
    title: "Docker",
    svg: "imgs/docker-svgrepo-com.svg",
    rating: 3.5,
  },
  {
    title: "MongoDB",
    svg: "imgs/mongodb-svgrepo-com.svg",
    rating: 3,
  },
  // {
  //   title: "Mysql",
  //   svg: "imgs/mysql-svgrepo-com.svg",
  //   rating: 3.5,
  // },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
.skills_title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
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
.v-card-title {
  text-align: center !important;
}
.v-card-title span {
  font-family: "Raleway", sans-serif;
}
.skills_container {
  background-color: #f5f8fd;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
