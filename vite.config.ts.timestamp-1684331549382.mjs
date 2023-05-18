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
import vuetify from "file:///C:/Users/nicol/OneDrive/Documents/code/news/node_modules/.pnpm/vite-plugin-vuetify@1.0.2_vite@3.2.4_vue@3.2.45_vuetify@3.2.5/node_modules/vite-plugin-vuetify/dist/index.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxuaWNvbFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcY29kZVxcXFxuZXdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxuaWNvbFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcY29kZVxcXFxuZXdzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9uaWNvbC9PbmVEcml2ZS9Eb2N1bWVudHMvY29kZS9uZXdzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgeyBIZWFkbGVzc1VpUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgdnVldGlmeSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgUGFnZXMoKSxcbiAgICBMYXlvdXRzKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywgJ0B2dWV1c2UvaGVhZCcsICdAdnVldXNlL2NvcmUnXSxcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkdHM6IHRydWUsXG4gICAgICByZXNvbHZlcnM6IFtJY29uc1Jlc29sdmVyKCksIEhlYWRsZXNzVWlSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBJY29ucygpLFxuICAgIHZ1ZXRpZnkoKVxuICBdLFxuICBzc2dPcHRpb25zOiB7XG4gICAgc2NyaXB0OiAnYXN5bmMnLFxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGR5bmFtaWMgcGF0aCBiYXNlZCBvbiByZXNvdXJjZXMgb24gYXBpXG4gICAgICovXG4gICAgLy8gYXN5bmMgaW5jbHVkZWRSb3V0ZXMocGF0aHMpIHtcbiAgICAvLyAgIGNvbnN0IHsgZGF0YTogcG9zdCB9ID0gYXdhaXQgYXBpLmdldCgncG9zdHMnKVxuICAgIC8vICAgY29uc3Qgc3RhdGljUGF0aHMgPSBwYXRocy5maWx0ZXIocGF0aCA9PiAhcGF0aC5pbmNsdWRlcygnOicpKVxuXG4gICAgLy8gICBjb25zdCBkeW5hbWljUG9zdHMgPSBwb3N0Lm1hcCgoaXRlbTogYW55KSA9PiBgL2V4YW1wbGUvJHtpdGVtLmlkfWApXG5cbiAgICAvLyAgIHJldHVybiBbLi4uc3RhdGljUGF0aHMsIC4uLmR5bmFtaWNQb3N0c11cbiAgICAvLyB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLDBCQUEwQjtBQUNuQyxPQUFPLGFBQWE7QUFacEIsSUFBTSxtQ0FBbUM7QUFjekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLGdCQUFnQixjQUFjO0FBQUEsTUFDN0QsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsV0FBVyxDQUFDLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQztBQUFBLElBQ25ELENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsRUFZZDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
