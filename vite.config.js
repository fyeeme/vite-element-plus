import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import voie from "vite-plugin-voie";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), voie()],
  //https://vitejs.dev/config/#server-proxy
  server: {
    proxy: {
      // with options
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
