# GenerateImage 用プロンプトテンプレ

1枚ごと。注記は日本語。`character.md` の記述を { } に埋め込む。

```text
Generate one standalone 16:9 horizontal Japanese article illustration.

Visual DNA:
Pure white background. Minimalist black hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue handwritten Japanese annotations. Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no cute mascot poster, no children's illustration, no realistic UI.

Locked original character for this article (MUST match exactly, do not substitute Xiaohei/black bean):
Name: {名前}
Silhouette: {シルエット}
Colors: {体の色・線} / accents: {アクセント色}
Face/limbs: {目・手足}
Personality: {一言} — serious, deadpan, not cute.
Action in this image: {この図での動作}
Do NOT: {やらないこと}

Theme:
{テーマ}

Structure type:
{構造タイプ}

Core idea:
{この図の核心}

Composition:
{具体画面：固定キャラの位置と動作 / 主物件 / 視線}

Suggested elements:
{要素1} / {要素2} / {要素3}

Japanese handwritten labels (short, 2-8 chars):
{注記1} / {注記2} / {注記3}

Color use:
Black for main line art. Character colors per the lock above. Orange for main flow/path/arrows. Red only for warnings/problems/results. Blue only for secondary notes.

Constraints:
Same character design as locked. One core structure only. Subject ~40%-60%. At least 35% blank white. At most 5-8 short Japanese labels. No top-left title. Not a formal diagram. Fresh metaphor; do not copy known Xiaohei example compositions. Clear but not instructional; strange but clean.
```

## 呼び出し

```text
GenerateImage:
  description: <上の全文>
  aspect_ratio: "16:9"
  filename: "01-topic-slug.png"
  reference_image_paths: [<この記事のキャラシート or 成功図>]  # 任意・最大2
```

## キャラシート用（新規キャラ時）

```text
Generate one 16:9 character design sheet on pure white. Hand-drawn minimal line art. Show the locked character in 3-4 poses (idle + core actions). Short Japanese labels only. Match: {character.md の基本・性格}. Not Xiaohei. Not cute mascot poster.
```
