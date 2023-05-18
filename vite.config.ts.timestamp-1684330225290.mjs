// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/vite@3.2.4_@types+node@18.11.9_sass@1.56.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.4_vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/vite-plugin-pages@0.27.1_vite@3.2.4/node_modules/vite-plugin-pages/dist/index.mjs";
import Layouts from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/vite-plugin-vue-layouts@0.7.0_vite@3.2.4_vue-router@4.1.6_vue@3.2.45/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import AutoImport from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/unplugin-auto-import@0.11.4_@vueuse+core@9.5.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/unplugin-vue-components@0.22.9_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import Icons from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/unplugin-icons@0.14.13/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/unplugin-icons@0.14.13/node_modules/unplugin-icons/dist/resolver.mjs";
import { HeadlessUiResolver } from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/unplugin-vue-components@0.22.9_vue@3.2.45/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import vuetify from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.4_vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\nicol\\OneDrive\\Documents\\code\\news";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
      dts: "src/auto-imports.d.ts"
    }),
    Components({
      dts: true,
      resolvers: [IconsResolver(), HeadlessUiResolver()]
    }),
    Icons(),
    vuetify()
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify"
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxuaWNvbFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcY29kZVxcXFxuZXdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxuaWNvbFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcY29kZVxcXFxuZXdzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9uaWNvbC9PbmVEcml2ZS9Eb2N1bWVudHMvY29kZS9uZXdzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgeyBIZWFkbGVzc1VpUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgdnVldGlmeSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBQYWdlcygpLFxuICAgIExheW91dHMoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAnQHZ1ZXVzZS9oZWFkJywgJ0B2dWV1c2UvY29yZSddLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIHJlc29sdmVyczogW0ljb25zUmVzb2x2ZXIoKSwgSGVhZGxlc3NVaVJlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIEljb25zKCksXG4gICAgdnVldGlmeSgpXG4gIF0sXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6ICdhc3luYycsXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgZHluYW1pYyBwYXRoIGJhc2VkIG9uIHJlc291cmNlcyBvbiBhcGlcbiAgICAgKi9cbiAgICAvLyBhc3luYyBpbmNsdWRlZFJvdXRlcyhwYXRocykge1xuICAgIC8vICAgY29uc3QgeyBkYXRhOiBwb3N0IH0gPSBhd2FpdCBhcGkuZ2V0KCdwb3N0cycpXG4gICAgLy8gICBjb25zdCBzdGF0aWNQYXRocyA9IHBhdGhzLmZpbHRlcihwYXRoID0+ICFwYXRoLmluY2x1ZGVzKCc6JykpXG5cbiAgICAvLyAgIGNvbnN0IGR5bmFtaWNQb3N0cyA9IHBvc3QubWFwKChpdGVtOiBhbnkpID0+IGAvZXhhbXBsZS8ke2l0ZW0uaWR9YClcblxuICAgIC8vICAgcmV0dXJuIFsuLi5zdGF0aWNQYXRocywgLi4uZHluYW1pY1Bvc3RzXVxuICAgIC8vIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsMEJBQTBCO0FBQ25DLE9BQU8sYUFBYTtBQVpwQixJQUFNLG1DQUFtQztBQWN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLGNBQWMsZ0JBQWdCLGNBQWM7QUFBQSxNQUM3RCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxXQUFXLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDO0FBQUEsSUFDbkQsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxFQVlkO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
