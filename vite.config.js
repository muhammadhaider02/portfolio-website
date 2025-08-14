import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load all envs (no prefix filter) from project root
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    envDir: '.',
    envPrefix: 'VITE_',
  }
})