import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app-components': resolve(root, 'components'),
      '@app-components/*': resolve(root, 'components/*'),
      '@app-hooks': resolve(root, 'hooks'),
      '@app-hooks/*': resolve(root, 'hooks/*'),
      '@app-store': resolve(root, 'store'),
      '@app-store/*': resolve(root, 'store/*'),
    }
  }
})
