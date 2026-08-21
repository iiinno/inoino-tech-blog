---
name: article-oc-illustrations
description: >-
  Generates Japanese article illustrations with a per-article original character
  (オリキャラ) locked for visual consistency. Use when いのまさ asks for
  オリキャラ配図, 記事キャラ, キャラ固定の挿絵, article OC illustrations,
  character.md, or session-spanning配図 with a custom character. Not for the
  default Xiaohei (小黒) skill — use xiaohei-illustrations for that.
---

# 記事オリキャラ配図（Cursor 版）

小黒スキル（`xiaohei-illustrations`）とは別。  
**記事ごとにオリキャラを1体決め、その記事の全図で同一キャラに固定する。**

目的は「きれいな挿絵」ではなく、文章の認知アンカーを、一貫したキャラで手描き説明図にすること。

## いのまさ向けデフォルト

| 項目 | デフォルト |
|------|------------|
| 言語 | **日本語**注記 |
| サイズ | `aspect_ratio: "16:9"` |
| キャラ | **記事につき1体**（途中変更禁止） |
| キャラ定義 | `character.md`（セッション跨ぎ用） |
| 保存先 | Vault: `C:\Users\inoue\Documents\obsidian_MyNotebook\Cursor\assets\<slug>-illustrations\` |
| 生成 | Cursor **GenerateImage** |

プロジェクト配下なら `assets/<slug>-illustrations/`。

汎用の小黒がほしいときは **このスキルを使わず** `xiaohei-illustrations` を使う。

## キャラ固定ルール

1. 配図を始める前に、その記事の `character.md` を探す。
2. **ある** → 読んでキャラを固定。勝手に改変しない。
3. **ない** → 記事内容から1体発明し、先に `character.md` を書いてから配図する。
4. 同一記事・同一スラッグでは、全ショット・全セッションでそのMDだけを見る。
5. キャラを変えたい・足したい場合は、いのまさに確認してからMDを更新する。

パス:

```text
<保存先>/<slug>-illustrations/character.md
```

テンプレ: `references/character-md.md`  
発明の目安: `references/character-invention.md`

## Cursor 画像生成

1. **Agent モード専用**
2. 1枚ごとに `GenerateImage` を1回
3. `aspect_ratio: "16:9"`、`filename: "01-topic-slug.png"`
4. `description` は `references/prompt-template.md`（**必ず character.md の内容を埋め込む**）
5. 生成後 Read で QA → だめなら再生成（キャラ設定は変えず、構図・注記を調整）
6. 成果を Vault（または指定 `assets/`）へコピー
7. 外部APIで偽生成しない

スタイル参照が必要なときだけ、その記事で一度生成したキャラシート／成功図を `reference_image_paths` に最大2枚。小黒の例画像は使わない。

## ワークフロー

### 1. スラッグとキャラ

- 記事スラッグを決める（なければ内容から短く付ける）
- `character.md` の有無を確認 → 読む or 新規作成
- 新規時は、キャラシート1枚を GenerateImage して同じフォルダに保存してよい（任意だが推奨）

### 2. shot list（デフォルト）

「生成して」と言うまで先に shot list。

各ショット: 位置 / テーマ / 核心 / 構造タイプ / **固定キャラの動作** / 要素 / 短い日本語注記

構図の幅は `xiaohei-illustrations` の `composition-patterns` と同じ考え方でよい（型を混ぜすぎない・メタファーは発明・旧例コピー禁止）。キャラだけはこのスキルのMDに従う。

### 3. 生成

確認待ちせず生成。毎回 `character.md` をプロンプトに反映。

### 4. 交付

枚数、各図1行、保存パス、`character.md` のパス。長講釈不要。

## トリガー例

```text
このノートをオリキャラ配図で
article-oc-illustrations で shot list → 生成
前回の記事の続き、キャラMDあるはず
この記事用のキャラだけ先に作って
```

## 参考

- `references/character-md.md`
- `references/character-invention.md`
- `references/prompt-template.md`
- `references/qa-checklist.md`
