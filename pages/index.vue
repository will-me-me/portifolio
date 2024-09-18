<template>
  <div
    class="d-flex flex-column justify-center align-center main_cotainer px-4"
    id="hero-section"
  >
    <h1 class="hero-heading">William Karia</h1>
    <div>
      <p class="mt-0">
        I am
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </p>
    </div>

    <span class="mt-8 tagline">
      Building tomorrow’s solutions with today’s code.
    </span>
  </div>
  <!-- <skills /> -->
</template>

<script setup>
// import Typed from "typed.js";
import { reactive, shallowRef } from "vue";
import { useAnimate } from "@vueuse/core";
import { ref, onMounted } from "vue";

const el = shallowRef(null);

const {
  play,
  pause,
  reverse,
  finish,
  cancel,
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
} = useAnimate(
  el,
  [
    { clipPath: "circle(20% at 0% 30%)" },
    { clipPath: "circle(20% at 50% 80%)" },
    { clipPath: "circle(20% at 100% 30%)" },
  ],
  {
    duration: 3000,
    iterations: 5,
    direction: "alternate",
    easing: "cubic-bezier(0.46, 0.03, 0.52, 0.96)",
  }
);

const text = reactive({
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
});
const typeValue = ref("");
const typeStatus = ref(false);
let displayTextArray = [
  "SoftWare Engeneer",
  "The Best Python Developer",
  "Vue.js Developer",
  "Nuxt.js proven Ninja 🥷",
  "FastApi Ninja 🥷",
  "Unavoidable",
];
let typingSpeed = 100;
let erasingSpeed = 200;
let newTextDelay = 5000;
let displayTextArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < displayTextArray[displayTextArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value +=
      displayTextArray[displayTextArrayIndex].charAt(charIndex);
    charIndex += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
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
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex += 1;
    if (displayTextArrayIndex >= displayTextArray.length)
      displayTextArrayIndex = 0;
    setTimeout(typeText, typingSpeed + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
.main_cotainer {
  background-size: cover;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  background-image: url("../public/imgs/growtika-yGQmjh2uOTg-unsplash.jpg");
  background-attachment: fixed;
  background-position: center center;
  box-sizing: border-box;
}

.main_cotainer::before {
  content: "";
  background: rgba(5, 13, 24, 0.3);
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  position: absolute;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
}

.hero-heading {
  font-family: "Raleway", sans-serif;
  margin: 0 0 10px 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 56px;
  color: white;
}
.typing {
  font-size: 24px;
  font-weight: bold;
}
.main_cotainer p {
  font-family: "Poppins", sans-serif;
  color: #fff;
  margin-bottom: 50px;
  font-size: 26px;
}
.main_cotainer p span {
  color: #fff;
  padding-bottom: 4px;
  letter-spacing: 1px;
  border-bottom: 3px solid gold;
}
.blinking-cursor {
  animation: blink 1s step-end infinite;
}
.tagline {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(106, 27, 154, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  padding: 20px;
  font-family: "Poppins", sans-serif;
}
@media (max-width: 768px) {
  .tagline {
    font-size: 2rem;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .tagline {
    font-size: 1.1rem;
    padding: 10px;
  }
}
</style>
