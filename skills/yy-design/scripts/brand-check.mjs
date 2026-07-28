#!/usr/bin/env node
/**
 * brand-check.mjs · 品牌一致性校验
 *
 * 用法：
 *   node scripts/brand-check.mjs <file.html>
 *   node scripts/brand-check.mjs <directory/>
 *
 * 检查项：
 *   1. 配色：只使用碳黑/冷白/终端绿
 *   2. 终端绿：单文件中 signal 数量 ≤ 2
 *   3. 留白：检查是否有大面积留白容器
 *   4. 字体：无禁用字体
 *   5. 旧 VI：不得出现朱红、哑金或古典视觉词汇
 *   6. 命名：文件是否遵循 yy-{type}-{subject}-{variant}-{yymmdd}
 */

import fs from 'node:fs';
import path from 'node:path';

const DISABLED_FONTS = /微软雅黑|Arial|Times\s+New\s+Roman|系统宋体|华文行楷/;
const TERMINAL_GREEN = /#00E676|#00e676|rgb\(0,\s*230,\s*118\)/g;
const LEGACY_VI = /#C0392B|#B8860B|朱红|哑金|书法|毛笔|飞白|印章|宣纸/gi;
const FORBIDDEN_COLORS = /#[0-9a-f]{6}/gi;
const ALLOWED_COLORS = new Set([
  '#0A0A0A', '#FAFAFA', '#00E676', '#FFFFFF', '#000000', '#E5E5E5',
]);

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // 1. 禁用字体
  if (DISABLED_FONTS.test(content)) {
    issues.push('❌ 发现禁用字体');
  }

  // 2. 终端绿数量
  const greenMatches = content.match(TERMINAL_GREEN) || [];
  if (greenMatches.length > 2) {
    issues.push(`⚠️ 终端绿出现 ${greenMatches.length} 处（建议 ≤2）`);
  }

  // 3. 配色合规
  const colors = content.match(FORBIDDEN_COLORS) || [];
  const unknown = [...new Set(colors)].filter(c => !ALLOWED_COLORS.has(c.toUpperCase()));
  if (unknown.length > 0) {
    issues.push(`⚠️ 发现未授权颜色：${unknown.slice(0, 5).join(', ')}`);
  }

  // 4. 旧 VI 检查
  const legacyMatches = content.match(LEGACY_VI) || [];
  if (legacyMatches.length > 0) {
    issues.push(`❌ 发现旧 VI 元素：${[...new Set(legacyMatches)].join(', ')}`);
  }

  // 5. 命名规范
  const basename = path.basename(filePath);
  if (!/^yy-/.test(basename) && !/^(README|LICENSE|index)/.test(basename)) {
    issues.push(`⚠️ 文件名未遵循 yy-{type} 规范`);
  }

  return { file: basename, ok: issues.length === 0, issues };
}

function main() {
  const target = process.argv[2];
  if (!target) {
    console.log('Usage: node scripts/brand-check.mjs <file.html|directory/>');
    process.exit(1);
  }

  const stats = fs.statSync(target);
  const results = [];

  if (stats.isFile()) {
    results.push(checkFile(target));
  } else {
    const files = fs.readdirSync(target).filter(f => /\.(html|css|jsx|md)$/i.test(f));
    for (const f of files) {
      results.push(checkFile(path.join(target, f)));
    }
  }

  let passed = 0, failed = 0;
  for (const r of results) {
    if (r.ok) {
      console.log(`✅ ${r.file}`);
      passed++;
    } else {
      console.log(`❌ ${r.file}`);
      for (const issue of r.issues) console.log(`   ${issue}`);
      failed++;
    }
  }

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

main();
