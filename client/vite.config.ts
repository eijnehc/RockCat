import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      REACT_APP_SUPABASE_URL: 'https://lwxxxxjdxlfdiiihybrl.supabase.co',
      REACT_APP_SUPABASE_KEY:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3eHh4eGpkeGxmZGlpaWh5YnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU5Mjg0MDIsImV4cCI6MTk4MTUwNDQwMn0.WzJtTyCKeWq6BH_KNp79lfhINhsXoNSSr6pYsuF_twY',
    },
  },
})
