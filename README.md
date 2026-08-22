# travelogue

旅行記サイトのリポジトリだ。

Astro と AstroPaper テーマで静的サイトを生成し、GitHub Pages で公開する。

公開 URL は https://iiinno.github.io/travelogue/ だ。

新しいチャットやクラウドエージェントは、この README と `AGENTS.md` を読めば作業体制が分かる。

## 技術スタック

- Astro 7（Content Collections。記事は `posts`、固定ページは `pages`）
- AstroPaper テーマ
- GitHub Actions（`.github/workflows/deploy.yml`）による自動ビルド・デプロイ
- GitHub Pages ホスティング

`astro.config.ts` に `site: "https://iiinno.github.io"` と `base: "/travelogue"` が設定済みだ。

サイトはルートではなく `/travelogue/` 配下で配信される。

`base` を外すとリンクと画像パスが壊れる。

Node.js は `package.json` の `engines` どおり 22.12.0 以上が必要だ。

デプロイワークフローも Node 22 を使う。

`main` への push（および `workflow_dispatch`）で Actions が `astro build` し、GitHub Pages に載せる。

## 3箇所の同期

同じコミットを次の3箇所で揃える。

| 場所 | 実体 | 役割 |
|------|------|------|
| ローカル | `C:\Users\inoue\travelogue`（Windows PC） | 作業本体 |
| origin | `inouemasaki-ai-ts:travelogue`（Tailscale 経由のプライベートリポジトリ） | バックアップ |
| github | https://github.com/iiinno/travelogue （public） | GitHub Pages の公開元 |

リモート名は `origin` と `github` だ。

記事を公開するには `git push github main` する。

Actions がビルドし、https://iiinno.github.io/travelogue/ にデプロイする。

origin はバックアップなので、公開と合わせて `git push origin main` で同期する。

ローカルの `main` は `github/main` を追跡している。

## 記事の書き方

旅行記の本文は `src/content/posts/` に Markdown（または MDX）で置く。

ファイル名は `YYYY-MM-DD-<スラッグ>.md` だ。

先頭に front matter が必要だ。

必須は `title`、`pubDatetime`（日付）、`description` だ。

任意で `author`、`modDatetime`、`featured`、`draft`、`tags`、`ogImage`、`canonicalURL`、`hideEditPost`、`timezone` を書ける。

`draft: true` の記事は本番に出ない。

固定ページ（About など）は `src/content/pages/` だ。

執筆ルールの詳細は `AGENTS.md` に従う。

- 本文は日本語で書く
- 一文一行（文の終わりごとに改行し、段落は空行で区切る）
- 日付・地名・金額などの事実は正確に書く。不明な点は推測で書かない

テーマやサイト構成は、明示されたとき以外は変えない。

クラウドエージェント向けの環境構築は `.cursor/environment.json`（`npm install`）を参照する。

## 画像

記事の写真・地図は `public/assets/` に置く。

Markdown からの参照は `/travelogue/assets/<ファイル名>` だ。

`base` があるため `/assets/...` だけでは 404 になる。

`public/` はビルド時にサイトルート相当へコピーされる。URL に `public` は含めない。

カバー画像（`ogImage`）は front matter で指定できる。

未指定なら AstroPaper の動的 OG 画像、または `public/default-og.jpg` が使われる。

テーマ同梱の画像は `src/assets/images/` にある。記事用の素材置き場ではない。

## ローカル開発

```bash
npm install
npm run dev
```

開発サーバではサイトは `/travelogue/` 配下で見える。

本番相当の確認は次のとおりだ。

```bash
npm run build
npm run preview
```

`npm run build` は型チェック（`astro check`）、ビルド、Pagefind の検索インデックス生成まで行う。

## 注意事項

スマホやクラウドエージェントからの編集は GitHub にだけ載ることがある。

ローカルで作業する前に `git pull github main` で同期しろ。

公開したらバックアップ用に `git push origin main` も忘れるな。

3箇所が同じコミットになるようにする。
