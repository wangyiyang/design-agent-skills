const demo = document.body.dataset.demo;
const stage = document.querySelector('.stage');

const metricRows = (items) => items.map(([label, score]) => `
  <div class="metric" style="--score:${score}">
    <div><span>${label}</span><div class="track"></div></div><b>${score}</b>
  </div>`).join('');

const templates = {
  'hero-vi-v2': `
    <main class="stage hero">
      <div class="dark-plane"></div><div class="calibration"></div>
      <div class="hero-copy"><h1>DESIGN<span>SYSTEM</span></h1><div class="hero-rule"></div>
      <div class="hero-note mono">Precision instrument on standby</div></div>
      <div class="meta mono" style="color:rgba(250,250,250,.42)">YY / VI 2.1</div>
      <div class="meta right mono" style="color:rgba(10,10,10,.42)"><i class="signal"></i>System ready</div>
    </main>`,
  'c1-ios-prototype': `
    <main class="stage device-demo"><div class="grid"></div>
      <div class="meta mono">C1 / Interactive prototype</div>
      <section class="terminal"><div class="command"><strong>›</strong> create focus timer<br><br><strong>✓</strong> four states connected<br><strong>✓</strong> interaction verified</div></section>
      <div class="link-line"></div>
      <section class="phone"><h2>深度工作</h2><p>一次只推进一个动作</p><div class="dial"></div><div class="action mono">Start session</div></section>
    </main>`,
  'c2-slides-pptx': `
    <main class="stage slide-demo"><div class="meta mono" style="color:rgba(10,10,10,.42)">C2 / Editable deck</div>
      <div class="slide-stack">
        <article class="slide-card"><div class="number">01</div><h2>从问题开始</h2><div class="green-line"></div></article>
        <article class="slide-card"><div class="number">02</div><h2>建立清晰系统</h2><div class="green-line"></div></article>
        <article class="slide-card"><div class="number">03</div><h2>交付可编辑成品</h2><div class="green-line"></div></article>
      </div><div class="slide-export mono">HTML → PPTX / live text</div>
    </main>`,
  'c3-motion-design': `
    <main class="stage motion-demo"><div class="grid"></div><div class="meta mono">C3 / Motion system</div>
      <div class="axis"></div><div class="ring"></div><div class="playhead"></div>
      <div class="node active mono" style="left:22%;top:50%">Enter</div>
      <div class="node mono" style="left:40%;top:50%">Hold</div>
      <div class="node mono" style="left:60%;top:50%">Signal</div>
      <div class="node mono" style="left:78%;top:50%">Exit</div>
    </main>`,
  'c5-infographic': `
    <main class="stage info-demo"><div class="meta mono" style="color:rgba(10,10,10,.42)">C5 / Data story</div>
      <h1>模型能力<br><em class="year">benchmark</em><br>年度变化</h1>
      <div class="bars">
        ${[42,55,48,68,61,82,72,94].map((v,i)=>`<div class="bar ${i===7?'hot':''}" style="--value:${v}"><span>${v}</span></div>`).join('')}
      </div><div class="dataset mono">08 models<br>04 capability groups<br>01 verified dataset</div>
    </main>`,
  'c6-expert-review': `
    <main class="stage review-demo"><div class="divider"></div>
      <section class="before"><div class="meta mono">Before / diagnosis</div><h2>结构存在，<br>信号不足。</h2>
        ${metricRows([['层级',44],['一致性',38],['可读性',52],['品牌性',31]])}</section>
      <section class="after"><div class="meta mono" style="color:rgba(10,10,10,.42)">After / direction</div><h2>减少噪声，<br>增强张力。</h2>
        ${metricRows([['层级',88],['一致性',92],['可读性',86],['品牌性',90]])}</section>
    </main>`,
  'w3-design-advisor': `
    <main class="stage advisor-demo"><div class="meta mono">W3 / Direction advisor</div><h1>三个方向，一个明确选择。</h1>
      <div class="directions">
        <article class="direction"><span class="index mono">01 / Precision</span><h2>精密仪器</h2><p>严格网格、校准标记、克制的信息密度。</p><div class="diagram"></div></article>
        <article class="direction"><span class="index mono">02 / Tension</span><h2>光暗张力</h2><p>大面积明暗对置，由单一信号建立焦点。</p><div class="diagram"></div></article>
        <article class="direction"><span class="index mono">03 / Terminal</span><h2>终端叙事</h2><p>以过程、状态和可验证输出组织故事。</p><div class="diagram"></div></article>
      </div>
    </main>`
};

if (!templates[demo]) throw new Error(`Unknown showcase: ${demo}`);
stage.outerHTML = templates[demo];

const duration = 7;
let startedAt;
const easeOut = (x) => 1 - Math.pow(1 - x, 4);
const clamp = (x) => Math.max(0, Math.min(1, x));

function draw(now) {
  startedAt ??= now;
  const elapsed = (now - startedAt) / 1000;
  const enter = easeOut(clamp(elapsed / 1.4));
  const progress = clamp(elapsed / duration);
  document.documentElement.style.setProperty('--p', enter.toFixed(4));
  document.documentElement.style.setProperty('--q', progress.toFixed(4));
  if (elapsed < duration) requestAnimationFrame(draw);
}

window.__seek = (seconds) => {
  startedAt = performance.now() - seconds * 1000;
  draw(performance.now());
};

document.fonts.ready.then(() => requestAnimationFrame((now) => {
  startedAt = now;
  window.__ready = true;
  requestAnimationFrame(draw);
}));
