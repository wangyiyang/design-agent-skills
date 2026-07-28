import hljs from 'highlight.js';

// VI 配色方案下的代码高亮颜色映射
const TOKEN_COLORS = {
  keyword: '#00E676',       // 终端绿 — 关键字
  string: 'rgba(250,250,250,0.72)',
  number: 'rgba(250,250,250,0.72)',
  function: '#FAFAFA',      // 宣白 — 函数名
  class: '#FAFAFA',         // 宣白 — 类名
  comment: 'rgba(250,250,250,0.4)',  // 半透明宣白 — 注释
  operator: '#00E676',      // 终端绿 — 运算符
  punctuation: 'rgba(250,250,250,0.7)', // 标点
  property: '#FAFAFA',      // 属性
  variable: '#FAFAFA',      // 变量
  params: '#FAFAFA',        // 参数
  built_in: '#00E676',      // 内置
  literal: 'rgba(250,250,250,0.72)',
  type: '#00E676',          // 类型
  regexp: 'rgba(250,250,250,0.72)',
  subst: '#FAFAFA',         // 模板替换
  default: '#FAFAFA',       // 默认
};

/**
 * 将 highlight.js 生成的 class 转为内联 style
 * 返回带有内联样式的 HTML 字符串
 */
export function highlightToInline(code, lang) {
  try {
    const result = lang && hljs.getLanguage(lang)
      ? hljs.highlight(code, { language: lang })
      : hljs.highlightAuto(code);

    return inlineStyles(result.value);
  } catch {
    // 高亮失败时返回原始转义代码
    return escapeHtml(code);
  }
}

function inlineStyles(html) {
  // 替换 hljs 的 class 为内联 style
  let result = html;

  // 处理所有 hljs-* class
  result = result.replace(/<span class="hljs-([^"]+)">/g, (match, tokenType) => {
    const color = TOKEN_COLORS[tokenType] || TOKEN_COLORS.default;
    return `<span style="color:${color};">`;
  });

  // 处理 hljs 根元素（如果有）
  result = result.replace(/<span class="hljs">/g, `<span style="color:#FAFAFA;">`);

  return result;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
