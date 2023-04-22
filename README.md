# My website

- URL: https://astro-cactus-blog.thuanowa.com/
- Design: https://www.figma.com/file/FbRKsNMeVGbF3RgYcaxTxk/thuanowa.com

## dev

```js
npm install -g pnpm
pnpm install
pnpm dev
pnpm build
```

## Theme rose pine draw

### [global.css](src/styles/global.css)

```css
:root {
	color-scheme: light;
	--theme-bg: #faf4ed;
	--theme-link: #907aa9;
	--theme-text: #575279;
	--theme-accent: #d7827e;
	--theme-accent-2: #b4637a;
	--theme-quote: #ea9d34;
	--theme-menu-bg: rgb(250 250 250 / 0.85);
}

:root.dark {
	color-scheme: dark;
	--theme-bg: #191724;
	--theme-link: #c4a7e7;
	--theme-text: #e0def4;
	--theme-accent: #ebbcba;
	--theme-accent-2: #eb6f92;
	--theme-quote: #f6c177;
	--theme-menu-bg: rgb(29 31 33 / 0.85);
}
```

### [astro.config.ts](./astro.config.ts)

```js
markdown: {
  shikiConfig: {
    theme: "rose-pine-dawn",
    wrap: true,
  },
},
```
