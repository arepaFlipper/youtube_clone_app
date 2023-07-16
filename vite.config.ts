import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    define: {
      'import.meta.env.REACT_APP_RAPID_API_KEY': JSON.stringify(process.env.VITE_REACT_APP_RAPID_API_KEY),
      'import.meta.env.BASE_URL': JSON.stringify(process.env.VITE_BASE_URL),
    }
  })
}
