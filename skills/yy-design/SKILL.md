---
name: yy-design
description: Use when creating or reviewing high-fidelity HTML prototypes, interactive app mockups, HTML slide decks, motion demos, design directions, brand assets, or WeChat article visuals. Trigger for requests such as "做原型", "设计 Demo", "动画", "交互原型", "HTML 演示", "设计评审", "设计方向", "导出 MP4/GIF", or "公众号配图".
---

# YY Design

用 HTML 交付可运行、可验证的视觉产物。核心标准是：从真实上下文出发，以清晰的视觉系统组织内容，并在交付前验证。

## 先判断边界

- 适用：交互原型、HTML 幻灯片、动画 Demo、信息图、品牌资产、设计评审和公众号图文。
- 不适用：生产级 Web 应用、SEO 网站、后端功能；此时使用项目既有的前端开发流程。
- 用户要求“好看”但没有具体上下文时，不要直接产出通用界面；进入“设计方向”流程。

## 统一工作流

1. 先读取现有上下文：设计系统、代码、Figma、截图、品牌资料与竞品。详情见 [references/design-context.md](references/design-context.md)。
2. 明确交付形态、受众、关键流程、尺寸、语言、质量与是否需要可编辑源文件。需求明确时可用最佳判断推进，并写明假设。
3. 涉及具体产品、版本、规格或发布时间时，先检索权威来源确认事实；不凭记忆作断言。
4. 涉及品牌时执行“品牌资产协议”。
5. 先用灰阶结构或 placeholder 确认信息层级，再替换为真实组件、素材和内容；不要用低质量假实现掩盖缺失素材。
6. 至少提供三个有明确差异维度的方向或变体；只有用户明确要求单稿时例外。
7. 根据载体读取对应参考资料，完成后执行浏览器渲染、控制台和关键交互检查。

## 品牌资产协议

用户提及具体品牌、产品或客户时，先询问是否已有 Logo、产品图或 UI 截图、色值、字体和品牌指南。缺失时只从官方渠道补齐，并记录来源。

- 任意品牌都必须使用 Logo；实体产品必须使用真实产品图；数字产品必须使用真实 UI 截图。
- 搜集候选素材时优先官方页面、press kit、官方应用商店或官方演示视频。每项最终素材应当清晰、版权来源明确且与场景一致。
- 将来源、可用资产、色板、字体、使用限制和气质关键词写入交付目录的 `brand-spec.md`。
- 找不到必需资产时，明确告诉用户并请求素材或将产物标注为概念稿；不要手绘假 Logo 或假产品图替代真实资产。

### 翊行代码品牌例外

当产出代表「翊行代码」、YY、王翊仰或 `wangyiyang.cc` 时，必须先读 [references/yy-vi-v2.md](references/yy-vi-v2.md)，并以其中的 VI v2.1 为最高优先级：碳黑 `#0A0A0A`、冷白 `#FAFAFA`、终端绿 `#00E676`；无衬线字体；几何网格与精密仪器气质。禁止使用旧版朱红、哑金、书法、水墨、印章、宣纸或手写 `{翊}` Logo。新 v2.1 Logo 未提供时，向用户索取资产或使用明确标注的几何占位符。

## 设计方向

当用户没有视觉参考或需求含糊时，先给出三个互斥方向，每个方向包含：设计哲学、情绪关键词、色彩/字体建议、版式策略、适合的产物和风险。优先推荐一个方向，但等待用户选择后再制作高保真稿。

可从 [references/design-styles.md](references/design-styles.md) 选择风格体系。通用内容与反 AI slop 规则见 [references/content-guidelines.md](references/content-guidelines.md)。

## 按交付类型执行

| 交付类型 | 必做事项 | 参考资料 / 资源 |
| --- | --- | --- |
| App 原型 | 明确 overview 或 flow demo；每台 iPhone 使用状态驱动导航；使用真实图；点击测试核心路径 | `assets/ios_frame.jsx`、[references/react-setup.md](references/react-setup.md)、[references/verification.md](references/verification.md) |
| HTML 幻灯片 | 开工前确认 HTML、PDF 或可编辑 PPTX；先完成 2 页视觉语法；逐页检查 | [references/slide-decks.md](references/slide-decks.md)、[references/editable-pptx.md](references/editable-pptx.md) |
| 动画 / 视频 | 先写叙事与场景时间轴；运动连续，避免 PowerPoint 式切换；每段至少有明确的进出场与缓动 | `assets/animations.jsx`、`assets/hyperframes_stage.jsx`、[references/animations.md](references/animations.md)、[references/video-export.md](references/video-export.md) |
| 解说动画 | 先完成文案、时长与 timeline；画面必须是连续运动叙事；TTS 凭据仅来自环境变量 | `assets/narration_stage.jsx`、[references/voiceover-pipeline.md](references/voiceover-pipeline.md) |
| 设计评审 | 依次评估哲学一致性、视觉层级、细节执行、功能性与创新性；输出 Keep / Fix / Quick Wins | [references/critique-guide.md](references/critique-guide.md) |
| 公众号图文 | 使用渲染脚本生成内联 HTML；先检查 Markdown、代码和公式渲染 | `scripts/yy-wechat-render.mjs` |

## 视觉与技术约束

- 先建立排版、间距、色彩、组件和动画规则，再填充页面；为翊行代码产出时复用 `assets/yy-typography.css` 与 `assets/yy-color-palette.css`。
- 不使用无意义紫色渐变、emoji 图标、悬浮圆角卡片堆砌、左侧彩条卡片、手绘 SVG 人物或仅靠 Inter 的通用 AI 风格。
- 动画不要默认 linear；使用有叙事目的的缓动、停顿与连续转场。避免 `file://` 加载外部 JSX 的 CORS 问题；单文件交付时内联依赖。
- React + Babel 产物遵循 [references/react-setup.md](references/react-setup.md) 的版本和作用域约束。
- API Key、TTS 凭据和其他敏感信息只从环境变量读取；不写入 HTML、脚本或交付物。

## 验证与交付

交付前必须执行：

1. 在目标画布尺寸渲染，检查空白、溢出、字体和视觉层级。
2. 检查浏览器控制台与页面错误。
3. 原型点击核心路径；幻灯片逐页检查；动画检查首帧、转场、末帧与循环行为。
4. 用 `python3 scripts/verify.py <html>`（基于 Playwright）生成截图并发现控制台错误；细节见 [references/verification.md](references/verification.md)。
5. 交付源 HTML、导出文件、素材来源、`brand-spec.md`（如适用）和验证结果；说明仍是 placeholder 或推断的部分。

## 快捷指令

- `一笔 <类型>`：说明假设后直接出稿。
- `速写 <主题>`：优先交付灰阶结构、placeholder 和设计理由。
- `署名`：在用户明确要求时，按载体使用「翊行代码」、YY 或王翊仰；不要默认添加水印或伪造 Logo。

## 资源路由

- 工作流与上下文：`references/workflow.md`、`references/design-context.md`
- 原型与验证：`references/react-setup.md`、`references/verification.md`
- 动画与导出：`references/animations.md`、`references/animation-best-practices.md`、`references/animation-pitfalls.md`、`references/video-export.md`
- 幻灯片与 PPTX：`references/slide-decks.md`、`references/editable-pptx.md`
- 风格与评审：`references/design-styles.md`、`references/content-guidelines.md`、`references/critique-guide.md`
- 翊行代码 VI：`references/yy-vi-v2.md`（代表翊行代码、YY、王翊仰或 `wangyiyang.cc` 时必读）
