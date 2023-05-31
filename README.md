# ProjectB-CBR
Vue + TypeScript web app providing elderly people with information on possible means of transport.


## Color usages

Primaire kleuren:
- ![#0588FO](https://placehold.co/15x15/0588F0/0588F0.png) `#0588F0`: Is een hoofdkleur.
- ![#FF8200](https://placehold.co/15x15/FF8200/FF8200.png) `#FF8200`: Is de andere hoofdkleur.
- ![#003DA5](https://placehold.co/15x15/003DA5/003DA5.png) `#003DA5`: Wordt gebruikt voor koppen, nooit zonder de hoofdkleuren gebruiken.
- ![#333F48](https://placehold.co/15x15/333F48/333F48.png) `#333F48`: Wordt gebruikt voor standaard text.

Accentkleuren (deze kleuren nooit zonder twee hoofdkleuren gebruiken): 
- ![#B9D9EB](https://placehold.co/15x15/B9D9EB/B9D9EB.png) `#B9D9EB`: Wordt gebruikt voor ondergrond.
- ![#009A44](https://placehold.co/15x15/009A44/009A44.png) `#009A44`: Wordt gebruikt voor goed nieuws.
- ![#F2A900](https://placehold.co/15x15/F2A900/F2A900.png) `#F2A900`: Wordt gebruikt voor opletten.
- ![#DA291C](https://placehold.co/15x15/DA291C/DA291C.png) `#DA291C`: Wordt gebruikt voor minder goed nieuws.


# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

