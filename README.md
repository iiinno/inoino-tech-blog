# inoino Tech Blog

個人ブログ「inoino Tech Blog」のリポジトリだ。
日々のこと、好きなもの、考えたことなどを、旅行記に限らず書いていく。

Astro と AstroPaper テーマで静的サイトを生成し、GitHub Pages で公開する。

公開 URL は https://iiinno.github.io/inoino-tech-blog/ だ。

新しいチャットやクラウドエージェントは、この README と `AGENTS.md` を読めば作業体制が分かる。

## 技術スタック

- Astro 7（Content Collections。記事は `posts`、固定ページは `pages`）
- AstroPaper テーマ
- GitHub Actions（`.github/workflows/deploy.yml`）による自動ビルド・デプロイ
- GitHub Pages ホスティング

`astro.config.ts` に `site: "https://iiinno.github.io"` と `base: "/inoino-tech-blog"` が設定済みだ。

サイトはルートではなく `/inoino-tech-blog/` 配下で配信される。

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
| github | https://github.com/iiinno/inoino-tech-blog （public） | GitHub Pages の公開元 |

リモート名は `origin` と `github` だ。

記事を公開するには `git push github main` する。

Actions がビルドし、https://iiinno.github.io/inoino-tech-blog/ にデプロイする。

origin はバックアップなので、公開と合わせて `git push origin main` で同期する。

ローカルの `main` は `github/main` を追跡している。

## 記事の書き方

ブログ記事の本文は `src/content/posts/` に Markdown（または MDX）で置く。

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

Markdown からの参照は `/inoino-tech-blog/assets/<ファイル名>` だ。

`base` があるため `/assets/...` だけでは 404 になる。

`public/` はビルド時にサイトルート相当へコピーされる。URL に `public` は含めない。

カバー画像（`ogImage`）は front matter で指定できる。

未指定なら、サイト名や記事タイトルを使った動的 OG 画像が使われる。

## X での共有

公開した記事の URL を X の投稿に貼り付けて共有する。
記事末尾の X ボタンからも共有できる。
タイトル・説明・OG 画像をカード表示用のメタデータとして出力する。
実際のカード表示は、公開後の X 側の取得状況に依存する。

サイト名・紹介文は `astro-paper.config.ts`、自己紹介は `src/content/pages/about.md` で変更する。
公開 URL は `/inoino-tech-blog/` 配下を使う。

## ローカル開発

```bash
npm install
npm run dev
```

開発サーバではサイトは `/inoino-tech-blog/` 配下で見える。

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
