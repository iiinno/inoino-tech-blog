---
name: research
description: >-
  Local web research via toolset CLI (Scrapling, Bird, Nodriver, Jina,
  DuckDuckGo, GitHub, Wikipedia, Wayback, Freecrawl, Patent, Academic, PDF,
  YouTube). Use when the user asks to investigate, fact-check, dig into a
  topic, search X/Reddit, read pages/PDFs, fetch captions, or verify claims.
  Depth via [fast]|[deep]|[extra]|[ultimate] prefix on the query.
---

# Research

ツールは全部ここ。自由に使え。

- Catalog: `C:\Users\inoue\Project\research-mcp-server\toolset\CATALOG.md`
- CLI: `cd C:\Users\inoue\Project\research-mcp-server` → `.\.venv\Scripts\python.exe -m toolset <cmd> ...`
- **出力先（Vault）:** `C:\Users\inoue\Documents\obsidian_MyNotebook\Cursor\research\`
- **Skill本文（Vault）:** `C:\Users\inoue\Documents\obsidian_MyNotebook\Cursor\skills\research.md`
- **追記・追加調査の運用:** `...\Cursor\research\OPERATIONS.md`
- 深度契約・並列オーケストレーションは本 Skill が正。未指定 depth = **fast**

---

## 呼び出し

```text
[deep]○○について調べて
[fast]○○
[extra]○○
[ultimate]○○
```

先頭の `[fast|deep|extra|ultimate]` が depth。**後ろ全部が query。**  
タグは検索語に含めない（剥がしてから調べる）。調査前に `depth=… | query=…` を1行エコー。

---

## オーケストレーション

親は直列で全部やらない。**Task サブエージェントを並列**し、親は計画・URL割当・マージ・契約チェックだけ。  
サブエージェントの model は **`composer-2.5`**（必須）。

| depth | 最低並列 | 役割例 |
|-------|----------|--------|
| fast | ≥2 | search / 精読 |
| deep | ≥4 | web+news / code+social / 精読×2 |
| extra | ≥6 | web / news+social / academic / 精読×2 / verify |
| ultimate | ≥6（各パス） | extra と同じ。差分は新規探索と既存再確認を分ける |

- 子は **brief だけ**返す（SERP 生ダンプ禁止）
- 親は hits / 精読 / 一次 / verify を契約と照合。未達なら追加ワーカー
- 同一 URL の二重精読禁止

---

## 用語

- **ヒット**: 採用したユニーク URL
- **精読**: `read` / PDF / YouTube で本文取得成功（実質 ≥400字）
- **引用**: 成果物に載せた URL（精読優先）

### ソース階層（`source_tier`）

契約の「一次」は **official / primary** を指す。wire は別カウント。

| tier | 例 | 契約上 |
|------|-----|--------|
| `official` | `docs.` / `api-docs.` / `developer.` / 製品公式docs | 一次 |
| `primary` | `.gov` / `.edu` / 論文誌 / GitHub primary repo | 一次 |
| `wire_original` | Reuters / Bloomberg / AP / The Information 原文ホスト | 一次相当（精読優先・転載と区別） |
| `secondary` | Yahoo / MSN / Google News 等の転載・集約 | 二次（転載のみなら `reprint_only` gap） |
| `social` | X / Reddit | ソーシャル |
| `unknown` | その他 | — |

未達なら成果物を出さず追加調査。どうしても無理なら `gaps` に「契約未達」と理由。

### よく出る gaps（ツールが自動付与）

- `paywall_unread:` — Bloomberg/Reuters 等で 401/購読壁。Jina→Wayback 後も失敗
- `reddit_auth_fail:` / `reddit_rate_limited:` — Reddit cookie 不良 or 公開 JSON 失敗（X 偏り注意）
- `unread_primary:` / `weak_wire_primary:` / `reprint_only:` — 公式・通信社原文の未精読 or 転載のみ

---

## Depth 契約

### fast

| 項目 | 値 |
|------|-----|
| ワーカー | ≥2 |
| mode | `web`（コードなら `code` も） |
| ヒット / 精読 | ≥6 / ≥4（一次 ≥1。候補なしなら gaps） |
| 出力 | チャット箇条書きのみ（最大12）。結論→根拠→不明点 |

### deep

| 項目 | 値 |
|------|-----|
| ワーカー | ≥4 |
| mode | web + news + code + social |
| ヒット / 精読 / 引用 | ≥16 / ≥12（一次≥5） / ≥12 |
| verify | ≥2 |
| 出力 | Vault MD（規約: `TEMPLATE-deep.md` / ファイル名: `FILENAME.md`） |
| パス | `...\research\deep\YYYY-MM-DD_日本語タイトル.md` |
| 構成 | Properties → 要約 → 背景 → 結果 → 分析・考察 → 引用表 → Gaps |
| チャット | パス＋要約の結論表のみ |

出力の要点:
- Obsidian Properties 必須（`depth`/`query`/`date`/`status`/`axis`/`revision`/`tags`）
- 要約 = 短いリード＋結論表（根拠は〔n〕のみ、表≤6行）
- 背景 = スコープ・評価軸・前提・地図・必要なら文脈（年号並べ固定にしない）
- 結果 = A比較表 / B論点 / C経緯 / D手順 / E検証 から主1（+副1）
- 本文の出典は〔n〕。引用は表。契約メタは作らず Gaps に統合
- 追加調査: 軽微→同ファイル追記、再調査→`_続きN.md` + `parent`

### extra

| 項目 | 値 |
|------|-----|
| ワーカー | ≥6 |
| mode | web + news + code + social + academic（＋patent/video/PDF 該当時） |
| ヒット / 精読 / 引用 | ≥40 / ≥30（一次≥12） / ≥25 |
| 学術 | ≥5 ヒット試行（0なら gaps） |
| PDF or YouTube 精読 | ≥3（両方ゼロなら gaps） |
| verify | ≥5 |
| 図解 | ≥2（本文中に埋め込み＋キャプション） |
| 出力 | **提出用 HTML**（`TEMPLATE-extra.md` / `TEMPLATE-extra.html`） |
| パス | `...\research\extra\YYYY-MM-DD_日本語タイトル\` |
| 構成 | 表紙→目次→要約→**調査方法**→背景→結果→分析(5–9)→**推奨**→引用→Gaps→**コロフォン** |
- 図は **archify→SVG** を基本。Mermaid は下書きのみ（提出時は書き出し）。TikZ は LaTeX 提出のときだけ

### ultimate

extra と同一フロアを **反復**（既定24h間隔）。1パス上限〜60分ソフト。  
`...\research\ultimate\スラッグ\` にマスター＋差分。ファイル名は `FILENAME.md` 準拠。ユーザー停止まで継続。

---

## CLI

```powershell
cd C:\Users\inoue\Project\research-mcp-server
.\.venv\Scripts\python.exe -m toolset status
.\.venv\Scripts\python.exe -m toolset search "..." --mode web
.\.venv\Scripts\python.exe -m toolset read "https://..."
.\.venv\Scripts\python.exe -m toolset social "..." --platform all
.\.venv\Scripts\python.exe -m toolset dig "..."
.\.venv\Scripts\python.exe -m toolset deep "..." --depth fast
.\.venv\Scripts\python.exe -m toolset verify "..."
```

エンジン一覧は CATALOG。失敗は `gaps` / `fetch_meta.failed` を出す。
