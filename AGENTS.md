# travelogue

旅行記を管理するリポジトリ。Astro（AstroPaper）で静的サイトを生成し、GitHub Pages で公開する。
記事は日本語の Markdown で書く。

## 構成

- `src/content/posts/` — 旅行記の本文。ファイル名は `YYYY-MM-DD-<スラッグ>.md`
- `public/assets/` — 写真・地図などの素材。記事からは `/journey-days/assets/<ファイル名>` で参照する
- `src/content/pages/` — About など固定ページ

## 執筆ルール

- 本文は日本語で書く
- 一文一行（文の終わりごとに改行し、段落は空行で区切る）
- 日付・地名・金額などの事実は正確に。不明な点は推測で書かない

## ビルド

- 依存関係: `npm install`
- 開発サーバ: `npm run dev`（サイトは `/journey-days/` 配下）
- 本番ビルド: `npm run build`
- プレビュー: `npm run preview`

`main` への push で GitHub Actions がビルドし、GitHub Pages にデプロイする。

## Cursor Cloud specific instructions

- 環境構築は `.cursor/environment.json` を参照する（`npm install`）
- 依頼された記事の追加・修正を行う。サイトのテーマや構成は、明示されたとき以外は変えない
