import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "cdf-fc",
    project: "javascript-react"
  })],
  base: "/Apple_Store/",
  build: {
    sourcemap: true
  }
})