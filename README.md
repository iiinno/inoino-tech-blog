# travelogue

旅行記サイト。Astro（AstroPaper）でビルドし、GitHub Pages で公開する。

記事は `src/content/posts/`、写真などの素材は `public/assets/` に置く。

## 使い方

```bash
npm install
npm run dev
```

本番ビルド:

```bash
npm run build
npm run preview
```

公開 URL は `https://<GitHubユーザー名>.github.io/travelogue/`。
`main` に push すると GitHub Actions がデプロイする。
