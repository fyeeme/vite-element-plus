## `Vite 2.x + Vue 3.x + windicss 1.x starter ⚡`

1. This starter template also includes:

- [Vue Router 4.x](https://github.com/vuejs/vue-router-next)
- [elementPlus 1.x](https://github.com/element-plus/element-plus)
- [axios 0.21.x](https://github.com/axios/axios)

2. api modules based on axios and vue-router

3. why use windicss not tailwindcss 
   1. https://github.com/windicss/windicss/discussions/176

## FAQ

1. Broken install binary on macOS #462

esbuild: Failed to install correctly

```shell
npm i
node node_modules/esbuild/install.js

npm run dev
```

### vitesse
https://github.com/antfu/vite-plugin-icons
https://github.com/antfu/vitesse

1.  Windi CSS 
2. Components auto importing
3. File based routing
4. Use icons from any icon sets, with no compromise
  {prefix}-{collection}-{icon}
  The collection field follows [Iconify's collection IDs.](https://iconify.design/icon-sets/)

vue
<!-- Use the new <script setup> style -->


### 高亮 `<route>`

1. update setting

 ```
 "vetur.grammar.customBlocks": {
    "route": "json"
  }
```

 2. Run the command in vscode

 `Vetur: Generate grammar from vetur.grammar.customBlocks`

 3. Restart VS Code to get syntax highlighting for custom blocks.