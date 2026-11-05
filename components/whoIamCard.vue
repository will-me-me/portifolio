<template>
  <div class="about-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="about-card">
            <!-- Decorative top bar -->
            <div class="card-accent"></div>

            <div class="card-content">
              <!-- Avatar with ring effect -->
              <div class="avatar-wrapper">
                <div class="avatar-ring"></div>
                <v-avatar size="140" class="avatar-inner">
                  <v-img src="/imgs/DSC_116511.jpg" alt="William Karia" />
                </v-avatar>
                <div class="status-dot"></div>
              </div>

              <!-- Name & Title -->
              <h2 class="name">William Karia</h2>
              <p class="title">
                <span class="title-icon">⚡</span>
                Software Engineer | Vue.js & Nuxt.js Expert
              </p>

              <!-- Divider -->
              <div class="divider"></div>

              <!-- Bio -->
              <p class="bio">
                Hello, I'm <strong>William Karia</strong>, a passionate
                <strong>Software Engineer</strong> based in the vibrant city of
                <strong>Nairobi, Kenya</strong>. My expertise lies in
                <strong>backend development</strong> with
                <strong>Python</strong> and the
                <strong>FastAPI framework</strong>, crafting seamless, scalable
                systems. I also excel in creating engaging front-end experiences
                using <strong>Vue.js</strong> and <strong>Nuxt.js</strong>.
                Together, let's transform innovative ideas into reality with
                modern, efficient solutions.
              </p>

              <!-- Quick stats -->
              <div class="stats-row">
                <div class="stat-item">
                  <span class="stat-number">5+</span>
                  <span class="stat-label">Years Experience</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">20+</span>
                  <span class="stat-label">Projects Done</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">10+</span>
                  <span class="stat-label">Happy Clients</span>
                </div>
              </div>

              <!-- Social Icons -->
              <div class="social-row">
                <v-btn icon class="social-btn" @click="redirectToX">
                  <v-icon size="22">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon class="social-btn" @click="OpenGit">
                  <v-icon size="22">mdi-github</v-icon>
                </v-btn>
                <v-btn icon class="social-btn" @click="redirectToLinked">
                  <v-icon size="22">mdi-linkedin</v-icon>
                </v-btn>
              </div>

              <!-- Download Resume -->
              <v-btn
                class="download-btn"
                block
                rounded="lg"
                size="large"
                @click="downloadFile"
              >
                <v-icon start>mdi-download</v-icon>
                Download Resume
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const generateNewFileName = (originalFileName) => {
  const timestamp = new Date().getTime();
  const fileExtension = originalFileName.split(".").pop();
  const baseFileName = originalFileName.replace(`.${fileExtension}`, "");
  return `${baseFileName}_${timestamp}.${fileExtension}`;
};

const downloadFile = () => {
  const filePath = "/imgs/William-Karia_1.pdf";
  const fileName = generateNewFileName("William-Karia.pdf");

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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");

.about-section {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%);
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.about-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  transition: all 0.4s ease;
}

.about-card:hover {
  border-color: rgba(167, 139, 250, 0.3);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
}

.card-accent {
  height: 4px;
  background: linear-gradient(90deg, #667eea, #a78bfa, #60a5fa, #667eea);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.card-content {
  padding: 48px 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Avatar */
.avatar-wrapper {
  position: relative;
  margin-bottom: 24px;
}

.avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #667eea, #a78bfa, #60a5fa, #667eea);
  animation: spin 4s linear infinite;
  opacity: 0.8;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.avatar-inner {
  position: relative;
  z-index: 1;
  border: 4px solid #12121a;
}

.status-dot {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  background: #22c55e;
  border-radius: 50%;
  border: 3px solid #12121a;
  z-index: 2;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
  }
}

/* Name & Title */
.name {
  font-family: "Space Grotesk", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #a78bfa;
  font-weight: 500;
  margin: 0 0 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  font-size: 1.2rem;
}

/* Divider */
.divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #a78bfa, transparent);
  margin-bottom: 24px;
}

/* Bio */
.bio {
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  line-height: 1.9;
  color: #9ca3af;
  text-align: center;
  margin: 0 0 32px;
  max-width: 600px;
}

.bio strong {
  color: #e5e7eb;
  font-weight: 600;
}

/* Stats */
.stats-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 28px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-number {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

/* Social */
.social-row {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.social-btn {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #9ca3af !important;
  transition: all 0.3s ease !important;
}

.social-btn:hover {
  background: rgba(167, 139, 250, 0.15) !important;
  border-color: rgba(167, 139, 250, 0.4) !important;
  color: #a78bfa !important;
  transform: translateY(-3px);
}

/* Download */
.download-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  height: 52px !important;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3) !important;
  transition: all 0.3s ease !important;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5) !important;
}

@media (max-width: 600px) {
  .card-content {
    padding: 36px 24px 32px;
  }

  .name {
    font-size: 1.5rem;
  }

  .stats-row {
    gap: 16px;
    padding: 16px;
  }

  .stat-number {
    font-size: 1.3rem;
  }

  .stat-label {
    font-size: 0.65rem;
  }

  .stat-divider {
    height: 30px;
  }
}
</style>
