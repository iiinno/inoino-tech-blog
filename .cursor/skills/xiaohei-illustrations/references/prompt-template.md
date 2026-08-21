# GenerateImage 用プロンプトテンプレ

1枚ごとに生成する。本文に合わせて変数を置き換える。複数枚を1枚に詰め込まない。

Cursor の `GenerateImage.description` に入れる。注記は**日本語**。

```text
Generate one standalone 16:9 horizontal Japanese article illustration.

Visual DNA:
Pure white background. Minimalist black hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue handwritten Japanese annotations. Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no cute mascot poster, no children's illustration, no realistic UI.

Recurring IP character required:
Xiaohei (小黒), a small solid-black absurd creature with white dot eyes, tiny thin legs, blank serious expression, slightly uneven hand-drawn body shape. Xiaohei must perform the core conceptual action, not decorate the scene. Serious, deadpan, slightly bizarre, not cute.

Theme:
{テーマ}

Structure type:
{構造タイプ：Workflow / システム局部 / 前後対比 / 役割状態 / 概念メタファー / 方法分层 / 地図ルート / 小漫画分鏡}

Core idea:
{この図の核心}

Composition:
{具体画面：小黒の位置と動作 / 主物件 / 情報の流れ}

Suggested elements:
{要素1} / {要素2} / {要素3} / {要素4}

Japanese handwritten labels:
{注記1} / {注記2} / {注記3} / {注記4} / {任意の注記5}

Color use:
Black for main line art and Xiaohei. Orange for main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or feedback/system state.

Constraints:
One image explains only one core structure. Keep the main subject around 40%-60% of the canvas. Preserve at least 35% blank white space. Use at most 5-8 short handwritten Japanese labels. Do not write a title in the top-left corner. Do not write the structure type on the image. Do not make it a formal diagram, course slide, or dense explainer. Do not copy prior examples or reuse known case compositions unless explicitly requested; invent a fresh visual metaphor for this specific article. It should be clear but not instructional, interesting but not childish, strange but clean.
```

## 呼び出しメモ

```text
GenerateImage:
  description: <上の全文>
  aspect_ratio: "16:9"
  filename: "01-topic-slug.png"
  reference_image_paths: [<例画像パス>]  # 任意・最大2
```

## 画像編集プロンプト

左上タイトル削除:

```text
Edit the provided image. Remove only the handwritten title "{削除する文字}" and its underline from the top-left corner. Fill that area with the same clean white background, matching the surrounding blank paper. Preserve everything else exactly: characters, labels, paths, line style, composition, aspect ratio, and image quality. Do not add any new text or objects.
```

怪誕感の強化:

```text
Regenerate this illustration with the same core meaning and simple layout, but make Xiaohei more central to the conceptual action. Xiaohei should be doing the strange work that explains the idea, not standing beside the diagram. Keep it clean, sparse, hand-drawn, and not cute.
```
