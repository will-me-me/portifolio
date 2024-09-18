<template>
  <v-card
    class="mx-auto sleek-card pa-6 mt-10"
    max-width="600"
    elevation="12"
    shaped
  >
    <!-- Avatar with an accent circle around it -->
    <div class="d-flex justify-center">
      <v-avatar class="avatar-border mt-4">
        <v-avatar class="avatar" size="120">
          <v-img src="/imgs/DSC_116511.jpg" alt="William Karia" />
        </v-avatar>
      </v-avatar>
    </div>

    <!-- Name -->
    <v-card-title class="text-h4 font-weight-bold text-center mt-4 name">
      William Karia
    </v-card-title>

    <!-- Subtitle -->
    <v-card-subtitle class="text-center subtitle mt-1 mb-4">
      Software Engineer | Vue.js & Nuxt.js Expert
    </v-card-subtitle>

    <!-- Card Text -->
    <v-card-text class="text-center text--secondary pa-8 card-text">
      Hello, I'm <strong>William Karia</strong>, a passionate
      <strong>Software Engineer</strong> based in the vibrant city of
      <strong>Nairobi, Kenya</strong>. My expertise lies in
      <strong>backend development</strong> with <strong>Python</strong> and the
      <strong>FastAPI framework</strong>, crafting seamless, scalable systems. I
      also excel in creating engaging front-end experiences using
      <strong>Vue.js</strong> and <strong>Nuxt.js</strong>. Together, let's
      transform innovative ideas into reality with modern, efficient solutions.
    </v-card-text>

    <!-- Social Icons -->
    <v-card-actions class="d-flex justify-center mt-6 mb-2">
      <v-btn icon class="social-icon" @click="redirectToX">
        <v-icon color="primary" size="32">mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon class="social-icon" @click="OpenGit">
        <v-icon color="primary" size="32">mdi-github</v-icon>
      </v-btn>
      <v-btn icon class="social-icon" @click="redirectToLinked">
        <v-icon color="primary" size="32">mdi-linkedin</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn
        color="primary"
        block
        elevation="2"
        class="mt-3 v-btn-download"
        rounded
        tile
        @click="downloadFile"
      >
        <v-icon left>mdi-download</v-icon>
        Download Resume
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const generateNewFileName = (originalFileName) => {
  const timestamp = new Date().getTime();
  const fileExtension = originalFileName.split(".").pop();
  const baseFileName = originalFileName.replace(`.${fileExtension}`, "");
  console.log(baseFileName);
  return `${baseFileName}_${timestamp}.${fileExtension}`;
};
const downloadFile = () => {
  const filePath = "/imgs/William-Karial.pdf"; // Replace with your file path
  const fileName = generateNewFileName("William-Karial.pdf"); // Replace with your desired file name

  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const redirectToX = () => {
  window.open("https://twitter.com/willy_karia", "_blank");
};
const OpenGit = () => {
  window.open("https://github.com/will-me-me", "_blank");
};
const redirectToLinked = () => {
  window.open("https://www.linkedin.com/in/william-karia-9aa548214/", "_blank");
};
</script>

<style scoped>
/* Sleek and professional card styling */
.sleek-card {
  border-radius: 16px;
  background: linear-gradient(135deg, #f0f4f8, #e6ebf1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.sleek-card:hover {
  transform: translateY(-5px);
}

/* Avatar with accent border */
.avatar-border {
  padding: 5px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1976d2, #42a5f5);
}

.avatar {
  border-radius: 50%;
}

/* Name and subtitle styling */
.name {
  font-family: "Poppins", sans-serif;
  color: #1a237e;
}

.subtitle {
  color: #37474f;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Card text with better readability */
.card-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #546e7a;
}

/* Social icon hover effects */
.social-icon {
  margin: 0 10px;
  transition: all 0.3s ease;
}

.social-icon:hover .v-icon {
  transform: scale(1.3);
  color: #1976d2;
}
.v-btn-download {
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
