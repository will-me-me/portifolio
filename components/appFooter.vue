<template>
  <footer class="footer-modern">
    <v-container>
      <v-row justify="center" no-gutters>
        <!-- Links -->
        <v-col cols="12" class="text-center mb-6">
          <div class="footer-links">
            <v-btn
              v-for="link in links"
              :key="link.name"
              class="footer-link"
              variant="text"
              :to="link.path"
            >
              {{ link.name }}
            </v-btn>
          </div>
        </v-col>

        <!-- Social -->
        <v-col cols="12" class="text-center mb-4">
          <div class="footer-social">
            <v-btn icon class="social-btn" @click="redirectToX">
              <v-icon size="20">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon class="social-btn" @click="OpenGit">
              <v-icon size="20">mdi-github</v-icon>
            </v-btn>
            <v-btn icon class="social-btn" @click="redirectToLinked">
              <v-icon size="20">mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Copyright -->
        <v-col cols="12" class="text-center">
          <span class="copyright">
            &copy; {{ new Date().getFullYear() }} —
            <strong>William Karia</strong>. All rights reserved.
          </span>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});

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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

.footer-modern {
  background: #0a0a0f;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 40px 0;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
}

.footer-link {
  font-family: "Inter", sans-serif !important;
  font-weight: 500 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  color: #9ca3af !important;
  font-size: 0.9rem !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
}

.footer-link:hover {
  color: #a78bfa !important;
  background: rgba(167, 139, 250, 0.1) !important;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 12px;
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

.copyright {
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
}

.copyright strong {
  color: #a78bfa;
  font-weight: 600;
}
</style>
