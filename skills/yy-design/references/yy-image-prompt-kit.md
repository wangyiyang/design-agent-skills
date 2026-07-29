# 翊行代码 · AI 生图 Prompt Kit

> 权威来源：Notion「翊行代码 · AI 生图 Prompt Kit」（https://app.notion.com/p/4b5037b6cabb45339946f69012aa0706）
> 同步日期：2026-07-29。Notion 版本更新时，以 Notion 为准并重新同步本文件。

> **本页是出图操作手册**——Style DNA、Negative Prompt、场景模板、概念词库、Moodboard、命名归档全部在这里。品牌身份定义（配色 / 字体 / Logo）见 **VI 核心规范**（见 [yy-vi-v2.md](./yy-vi-v2.md)）；版本与变更日志见总览 Hub「YY · Personal Brand Prompt Kit」。

> **hero 构图原则 · 对峙与张力**：明暗对峙 + 一点终端绿（#00E676）张力 + 大量留白，可选一个极简实物锚点。§4.6.B 只是这一原则的**参考实现之一**——对峙方向（左右 / 上下 / 对角 / 包围）、张力形态（线 / 点 / 痕 / 裂）、锚点内容每次可变，**不要每张图都复刻同一构图**。

## 0. 怎么用这份文档

1. 想生一张图时，**选一个场景模板**（第 4 节）。
2. 把模板里的 `[SUBJECT]` / `[SCENE]` 换成你想画的东西（第 5 节有词库）。
3. **拼上第 2 节的 Style Suffix** 和第 3 节的 Negative Prompt。
4. 丢进 Midjourney / Flux / GPT-Image / Seedream 等模型。
5. 出图后按第 7 节命名归档。

> 所有 prompt 用英文写——主流图像模型对英文响应更稳定、风格控制更精准。你可以中文写概念，但 prompt 本体保持英文。

## 2. 通用 Style Suffix（每条 prompt 末尾都拼上）

```text
--- STYLE DNA ---
minimalist abstract branding evoking quiet mystery and silent precision — the FEELING of a precision instrument in standby, never depicting literal figures, machinery, weapons, or characters, carbon black (#0A0A0A) and cool off-white (#FAFAFA) palette with a single terminal green (#00E676) accent used like a small indicator light, 80% empty negative space, matte industrial surfaces, subtle photographic grain, refined tech-editorial aesthetic, museum-quality print, single focal point, asymmetric rule-of-thirds layout, ambiguous suggestive forms not literal objects, crisp clean edges, high contrast, no text unless specified, 8k, fine art print
```

> Midjourney 用户：在末尾加 `--ar [比例] --style raw --stylize 150`。Flux/SDXL 用户：把上面拆成 tag 也可以。

## 3. 通用 Negative Prompt（适用于支持 negative 的模型）

```text
cartoon, anime, kawaii, chibi, photorealistic cosplay, cluttered background, busy composition, gradient sky, neon lighting, lens flare, 3d render, plastic texture, generic stock vector, watermark, signature, text artifacts, multiple subjects, busy patterns, low contrast, oversaturated, HDR, blurry, deformed, cyberpunk, matrix code rain, glowing neon edges
```

## 4. 场景模板（按用途）

### 4.1 Avatar / 头像 · 1:1（GitHub、LinkedIn、社媒）

```text
A single [SUBJECT] centered on a matte cool off-white field, deep carbon black silhouette, one small terminal green (#00E676) signal dot as the only color, extreme minimalism, generous negative space, square 1:1 composition, museum print quality

--- STYLE DNA ---
--ar 1:1
```

**替换示例 `[SUBJECT]`**：a single incomplete circle drawn in one stroke / a black void aperture / a single bold stroke ending mid-air / a small glowing green dot in a black field / a faint horizon line / a thin vertical light gap between two dark panels

### 4.2 Banner / 横幅 · 21:9（GitHub README、博客头图、LinkedIn Cover）

```text
Wide editorial composition: [SUBJECT] entering from the right edge, a single sweeping black form trailing across the canvas, deep carbon black against cool off-white background, one small terminal green indicator dot in the bottom-left corner, asymmetric layout with 60% empty space on the left, magazine cover quality

--- STYLE DNA ---
--ar 21:9
```

### 4.3 OG Image / 博客封面 · 16:9（社交分享、Open Graph）

```text
Hero illustration: [SUBJECT] rendered as a bold monochrome graphic form, single terminal green accent stroke, deep carbon black on cool off-white, the right 40% of the canvas is reserved as clean negative space for typography overlay, editorial poster style, premium tech magazine cover

--- STYLE DNA ---
--ar 16:9
```

### 4.4 Editorial Illustration / 文章配图 · 4:3 或 1:1（公众号、知乎、小红书）

```text
A single concept symbol rendered as a precise monochrome graphic: [SUBJECT], one decisive terminal green element as the only accent, matte paper background with subtle grain, generous negative space, premium editorial illustration, the kind you'd see in a high-end industrial design magazine

--- STYLE DNA ---
--ar 4:3
```

### 4.5 Logo / Mark 探索稿 · 1:1（无色，纯结构）

```text
Logo design exploration sheet: 6 variations of a minimalist geometric mark combining [CONCEPT A] with [CONCEPT B], monoline construction on a faint grid, pure ink black on white, presented as a professional designer's working sheet with small annotations, no color, no decoration

--ar 1:1
```

**替换示例**：`[CONCEPT A]` = incomplete circle / square aperture / single stroke / signal dot；`[CONCEPT B]` = a thin line / a faint horizon / a break in the line / a small square marker

### 4.6.A Hero · 抽象意象版 · 16:9（OPc 一人公司产品落地页）

```text
Product hero scene: a single [SUBJECT] floating in deep carbon-black void on the left half, the right half opening into a soft matte off-white space, a thin terminal green thread connecting the two halves, cinematic minimalism, luxury watch advertisement composition, ultra-high contrast

--- STYLE DNA ---
--ar 16:9
```

### 4.6.B Hero · 双重空间 + 极简静物 ⭐（YY 个人最爱）

> **YY 个人最爱版本**。气质：黑白对峙 × 精密器物 × 一线终端绿牵引。**画面左半为深碳黑虚空，右半为冷白，一根细终端绿线水平穿过两半之间，白侧放一组极简器物**（一壶一杯 / 单件器物 / 一台设备）。出图像高端音响广告又像工业设计杂志封面。
>
> **首选用途**：公众号文章封面、博客 OG、产品 hero。

```text
Cinematic minimalist hero composition: the left half of the canvas is a deep carbon-black void (#0A0A0A), the right half opens into a soft matte cool-white space (#FAFAFA), a single thin terminal green (#00E676) line crossing horizontally between the two halves at the middle, on the white side place [STILL-LIFE] arranged with quiet precision, deep shadows, soft directional light from the right, ultra-high contrast between the two halves, luxury product advertising photography aesthetic, Braun / Teenage Engineering / high-end audio equipment campaign quality, no text, 8k --ar 16:9 --style raw --stylize 150
```

**替换示例 `[STILL-LIFE]`**：

- `a single ceramic pour-over coffee dripper and one cup on a slate tray`
- `a matte black espresso cup with a faint coffee-ring stain on grey paper`
- `a stovetop moka pot beside one small cup, deep shadow`
- `a minimal mechanical keyboard with blank matte keycaps`
- `a pair of matte black studio headphones resting on a steel stand`
- `a vintage rangefinder film camera, front view, deep shadow`
- `a single machined aluminum pen on a brushed steel plate`
- `a small matte speaker with one tiny glowing green LED`
- `a folded charcoal-grey cloth with a single metal ruler on top`
- `a single machined steel cube on a concrete slab`

**铁律豁免**：本变体豁免 §2 Style DNA 中 `ambiguous suggestive forms not literal objects` 约束——允许极简静物作为画面右侧锚点。其余铁律仍严格执行：**只 1 处终端绿、80% 留白、无文字、黑白主导、单一焦点**。

**反过拟合**：本模板是「对峙与张力」原则的一种参考实现，不是固定答案。连续多张交付不要复用同一配方——改变对峙方向（上下 / 对角 / 包围）、张力形态（点 / 痕 / 裂 / 短笔触）与锚点内容，只要守住「明暗对峙 + 一点终端绿 + 大量留白」即可。

**裁切适配**：

- 公众号文章封面：直接按本模板生 16:9，按公众号规范 §封面图规范加 `{翊}` 角标与标题
- 博客 OG：直接生 16:9 作为 OG 图使用
- 产品 hero / 落地页：保留 16:9 原尺寸

## 5. 概念词库（往 `[SUBJECT]` 里换）

> **核心原则**：用抽象、几何、暗示性的元素，**不要**直接画刀剑、机关、人物这些「形」。要的是「形而上」的气场——简单又神秘，如匠人般克制而精确。

### ⭕ 形 · 几何与笔意

- a single incomplete circle, one decisive stroke
- a perfect black void / aperture, square or rectangular
- a single green signal dot, off-center, in a black field
- a horizontal line fading into nothing
- a vertical stroke ending mid-air
- a thin crack of green light splitting a dark panel
- two stacked rectangles forming a threshold
- a half-circle rising from the bottom edge

### 🌫️ 境 · 氛围与暗示

- a distant skyline silhouette in heavy fog
- the edge of something disappearing into white
- an unseen presence behind frosted glass
- a single standby light glowing in a dark room
- a long shadow without its source visible
- a horizon line where black meets white
- a narrow slit of light under a closed door
- a single closed door in a vast empty space
- a thin wisp of steam rising from an unseen cup
- a faint coffee-ring stain left on matte grey paper

## 6. Moodboard 起步 Prompt（先找感觉用）

> 用这一条先跑 4–8 张，作为视觉基线。挑出最戳你的 1–2 张，再用具体模板细化。

```text
An abstract minimal composition evoking quiet mystery and silent precision: extreme minimalism, only deep carbon black and one terminal green accent on matte cool off-white, no literal figures or weapons — only suggestive forms (an incomplete circle, a void, a single stroke, a horizon, a signal dot), 80% empty negative space, museum-quality fine art print, ambiguous and contemplative, the quiet luxury of a precision instrument in standby, no text

--ar 1:1 --style raw --stylize 200
```

衍生变体（替换核心抽象意象，跑 4 张做对比）：

1. 主体 = `a single incomplete circle with one gap`
2. 主体 = `a perfect black square void, slightly off-center`
3. 主体 = `a distant skyline silhouette dissolving in fog`
4. 主体 = `a single green signal dot glowing in a dark field`

## 7. 输出规范 & 命名约定

**文件命名**：`yy-{type}-{subject}-{variant}-{yymmdd}.png`
示例：`yy-avatar-signal-v2-260526.png`

| type | 用途 | 推荐比例 | 推荐尺寸 |
| --- | --- | --- | --- |
| `avatar` | 头像 | 1:1 | 1024×1024 |
| `banner` | 横幅 | 21:9 | 1680×720 |
| `og` | 分享卡片 | 16:9 | 1200×675 |
| `editorial` | 文章配图 | 4:3 | 1600×1200 |
| `logo` | logo 探索 | 1:1 | 2048×2048 |
| `hero` | 产品主视觉 | 16:9 | 2560×1440 |

## 8. 使用建议（避免破坏品牌一致性）

- ✅ **抽象优先，暗示优于描述**——要的是「气」不是「形」，一个未闭合的圆比一个具象人物更有力量。
- ✅ **永远只用 1 个终端绿点**——它是指示灯不是装饰，绿多就成电竞外设。
- ✅ **80% 留白原则**——出图后觉得太空，是对的；觉得刚好，就是太满了。
- ✅ **先黑白后加色**——先确定形，再去想颜色。
- ❌ **不要直接画刀剑、机关器械、人物肖像**——这是新人最容易踩的坑。
- ❌ 不要堆叠文化符号（东方元素、赛博符号都一样…太杂）。
- ❌ 不要用渐变背景、霓虹、赛博朋克——终端绿是「信号」不是「霓虹」：小面积、精确、哑光或微发光。

## 9. 已沉淀素材库

按 §7 规范命名后归档到这里，方便复用与对比。

- §4.6.B 双重空间 + 极简静物 hero（v1.x 朱红版历史资产，新图按 v2.0 终端绿出）：见 Notion 素材子页（https://app.notion.com/p/e4bc730db400400396f21e5078168e2c）

> 后续新出图都挂在这一区——按场景模板分组（Avatar / Banner / OG / Editorial / Logo / Hero），保留 prompt + 比例 + 评价。
