import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { cloudflareVitePlugin } from '@cloudflare/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    cloudflareVitePlugin(),
    TanStackRouterVite(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    target: 'ES2020',
    sourcemap: false,
  },
  ssr: {
    external: ['node:events'],
  },
})
