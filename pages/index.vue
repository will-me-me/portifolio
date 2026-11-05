<template>
  <div class="hero-container" id="hero-section">
    <!-- Animated background elements -->
    <div class="bg-gradient"></div>
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="content-wrapper">
      <div class="hero-content">
        <span class="greeting">Hello, I'm</span>
        <h1 class="hero-heading">William Karia</h1>

        <div class="typed-container">
          <span class="typed-prefix">I am a</span>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
        </div>

        <p class="tagline">Building tomorrow's solutions with today's code.</p>

        <div class="cta-buttons">
          <v-btn
            class="cta-primary"
            size="large"
            rounded="pill"
            @click="$router.push('/projects')"
          >
            <v-icon start>mdi-folder-outline</v-icon>
            View Projects
          </v-btn>
          <v-btn
            class="cta-secondary"
            size="large"
            rounded="pill"
            variant="outlined"
            @click="$router.push('/about')"
          >
            <v-icon start>mdi-account</v-icon>
            About Me
          </v-btn>
        </div>

        <div class="social-links">
          <v-btn icon class="social-btn" @click="redirectToX">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon class="social-btn" @click="OpenGit">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon class="social-btn" @click="redirectToLinked">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="scroll-indicator">
        <v-icon>mdi-chevron-down</v-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const typeValue = ref("");
const typeStatus = ref(false);
let displayTextArray = [
  "Software Engineer",
  "Python Developer",
  "Vue.js Expert",
  "Nuxt.js Ninja 🥷",
  "FastAPI Specialist",
  "Problem Solver",
];
let typingSpeed = 100;
let erasingSpeed = 50;
let newTextDelay = 2000;
let displayTextArrayIndex = 0;
let charIndex = 0;
let timeoutId = null;

const typeText = () => {
  if (charIndex < displayTextArray[displayTextArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value +=
      displayTextArray[displayTextArrayIndex].charAt(charIndex);
    charIndex += 1;
    timeoutId = setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    timeoutId = setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray[displayTextArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex -= 1;
    timeoutId = setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex += 1;
    if (displayTextArrayIndex >= displayTextArray.length)
      displayTextArrayIndex = 0;
    timeoutId = setTimeout(typeText, typingSpeed + 500);
  }
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

onMounted(() => {
  timeoutId = setTimeout(typeText, 500);
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.hero-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
}

/* Animated gradient background */
.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      ellipse at 20% 50%,
      rgba(120, 80, 255, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 20%,
      rgba(0, 200, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 60% 80%,
      rgba(255, 100, 200, 0.1) 0%,
      transparent 50%
    ),
    linear-gradient(180deg, #0a0a0f 0%, #12121a 100%);
  z-index: 0;
}

/* Floating shapes */
.floating-shapes {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: -50px;
  right: -50px;
  animation-delay: -7s;
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  top: 50%;
  right: 10%;
  animation-delay: -14s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(20px, 30px) scale(1.05);
  }
}

/* Content wrapper */
.content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content {
  text-align: center;
  animation: fadeInUp 1s ease-out;
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

.greeting {
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #a78bfa;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero-heading {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(3rem, 10vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 24px 0;
  background: linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typed-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  min-height: 48px;
}

.typed-prefix {
  font-family: "Inter", sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #9ca3af;
  font-weight: 400;
}

.typed-text {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  color: #60a5fa;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blinking-cursor {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #a78bfa;
  animation: blink 1s step-end infinite;
  font-weight: 300;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.tagline {
  font-family: "Inter", sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #9ca3af;
  font-weight: 400;
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto 40px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.cta-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  padding: 0 32px !important;
  height: 52px !important;
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
  padding: 0 32px !important;
  height: 52px !important;
  transition: all 0.3s ease !important;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.4) !important;
  transform: translateY(-3px);
}

.social-links {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.social-btn {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #9ca3af !important;
  transition: all 0.3s ease !important;
}

.social-btn:hover {
  background: rgba(167, 139, 250, 0.2) !important;
  border-color: rgba(167, 139, 250, 0.4) !important;
  color: #a78bfa !important;
  transform: translateY(-3px);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.3);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 600px) {
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
  }

  .shape-1 {
    width: 250px;
    height: 250px;
  }
  .shape-2 {
    width: 200px;
    height: 200px;
  }
  .shape-3 {
    width: 150px;
    height: 150px;
  }
}
</style>
