---
name: xiaohei-illustrations
description: >-
  Generates Ian-style Xiaohei (小黒) hand-drawn Japanese article illustrations
  via Cursor GenerateImage. Use when いのまさ asks for 配図, 小黒, 正文配図,
  記事イラスト, shot list, 挿絵, 説明図, メタファー図, or to redesign/edit those
  illustrations. Default: 16:9, pure white, sparse JP handwritten labels,
  save under Obsidian Vault assets.
---

# 小黒怪誕・正文配図（Cursor 版）

Ian の `ian-xiaohei-illustrations` を、いのまさ向けに Cursor 最適化した Skill。

目的は「きれいな挿絵」ではなく、**文章の認知アンカー（判断・流れ・状態・比喩）を1枚の手描き説明図にする**こと。

## いのまさ向けデフォルト

| 項目 | デフォルト |
|------|------------|
| 言語 | **日本語**注記（中国語は明示時のみ） |
| サイズ | `aspect_ratio: "16:9"` |
| 保存先 | Vault: `C:\Users\inoue\Documents\obsidian_MyNotebook\Cursor\assets\<slug>-illustrations\` |
| 生成ツール | Cursor の **GenerateImage**（Codex の `image_gen` は使わない） |
| 対象コンテンツ | 日本語ノート・ブログ・メソッド・AI/開発ワークフロー・Obsidian 記事 |

プロジェクト配下に置きたいと言われたら、その workspace の `assets/<slug>-illustrations/` を使う。

## Cursor 画像生成の前提（必ず守る）

1. **Agent モード専用**。Ask/Plan では GenerateImage が使えない。
2. 1枚ごとに `GenerateImage` を1回呼ぶ。複数枚を1プロンプトに詰め込まない。
3. パラメータ:
   - `description`: 下のテンプレ（英語 Visual DNA + 日本語注記指定）
   - `aspect_ratio`: 必ず `"16:9"`
   - `filename`: `01-topic-slug.png` 形式
   - `reference_image_paths`: **初回 or スタイルが崩れたときだけ**、この Skill 内の例を最大2枚渡す
     - `C:\Users\inoue\.cursor\skills\xiaohei-illustrations\assets\examples\01-two-breakpoints.png`
     - `C:\Users\inoue\.cursor\skills\xiaohei-illustrations\assets\examples\05-information-well.png`
     - `C:\Users\inoue\.cursor\skills\xiaohei-illustrations\assets\examples\08-trust-bridge.png`
4. 生成後は **Read で画像を見て QA**（文字化け・小黒が飾り・PPT感）。ダメなら再生成。
5. ツールが保存したパスから、最終成果物を Vault（または指定の `assets/`）へコピーする。
6. Python/外部APIで偽生成しない。失敗したら原因（401/権限/モデル）を短く報告して止める。

## 先に読む参考（必要分だけ）

- `references/style-dna.md`
- `references/xiaohei-ip.md`
- `references/composition-patterns.md`
- `references/prompt-template.md`
- `references/qa-checklist.md`
- `references/cursor-image-gen.md` … Cursor 側の挙動メモ

例画像は**作風キャリブ用**。構図のコピペ禁止。

## ワークフロー

### 1. 消化

本文・MD・Vaultノート・スクショから:

- 核心メッセージ
- 認知の転換点
- 図にすると効く箇所 / 文字のままがいい箇所

平均配図しない。アンカーだけ選ぶ。

### 2. まず shot list（デフォルト）

「生成して」と明示されるまでは、**先に shot list** を出す（いのまさが確認しやすい）。

各ショット:

- 置く位置（どの段の後）
- テーマ
- 核心メッセージ
- 構造タイプ
- 小黒の動作
- 要素案
- 日本語注記（各 2–8 字、最大 5–8 箇所）

枚数目安: 短文 1–3 / 通常 4–6 / 長文でも 8 まで。

### 3. 生成

「生成／作図／出して」と言われたら確認待ちせず生成。

各枚:

1. `references/prompt-template.md` で description を組み立て
2. `GenerateImage`（16:9 + filename）
3. Read で QA
4. 必要なら再生成（注記を減らす・小黒を動作主体に・PPT感を削る）
5. Vault へコピー

### 4. 交付

短く:

- 枚数
- 各図の用途（1行）
- 保存パス
- 安定な図 / 任意の図

作風の長講釈は不要。

## トリガー例

```text
小黒でこのノートの配図プラン出して
xiaohei-illustrations で shot list → 4枚生成
この一文を小黒1枚にして: 「信頼は証拠を並べて渡す」
左上のタイトル消して
```

## 帰属

元 Skill: [helloianneo/ian-xiaohei-illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations)（MIT）。この Cursor 版は GenerateImage・日本語・Vault 保存向けに改変。
