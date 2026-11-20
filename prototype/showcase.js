// Real source screens and PDF pages. These galleries are not demo recordings.
const projectShowcases = {
  'cxd-ai': [
    ['./assets/cases/evidence-04-result.png', '画布与成图', 'Canvas & output'],
    ['./assets/cases/evidence-01-intake.png', '需求输入', 'Brief intake'],
    ['./assets/cases/evidence-02-plan.png', '套图规划', 'Plan the set'],
    ['./assets/cases/evidence-05-edit.png', '定向修改', 'Targeted edits'],
  ],
  'momcozy-web': [
    ['./assets/work/momcozy-web-1200.webp', '首页体验', 'Homepage experience'],
    ['./assets/showcase/portfolio-22.jpg', '跨设备导航', 'Cross-device navigation'],
    ['./assets/showcase/portfolio-23.jpg', '移动搜索与助手', 'Mobile search & assistant'],
  ],
  'eca': [
    ['./assets/showcase/portfolio-38.jpg', '展览与活动视觉', 'Exhibition & event'],
    ['./assets/showcase/portfolio-39.jpg', '书籍与出版', 'Book & publication'],
    ['./assets/work/eca-1200.webp', '品牌与海报', 'Identity & posters'],
  ],
  'halovida': [
    ['./assets/work/halovida-1200.webp', '品牌与网站', 'Brand & website'],
    ['./assets/showcase/portfolio-94.jpg', '产品视觉', 'Product visuals'],
    ['./assets/showcase/portfolio-93.jpg', '渠道表达', 'Channel design'],
  ],
};

function showcaseLanguage() {
  return document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
}

function renderProjectShowcase(project, { controls = true } = {}) {
  const slides = projectShowcases[project.id];
  const zh = showcaseLanguage() === 'zh';
  return `<div class="project-showcase" data-showcase="${project.id}">
    <div class="showcase-stage">
      <img class="showcase-image" src="${slides[0][0]}" alt="${slides[0][zh ? 1 : 2]}" loading="lazy" decoding="async">
    </div>
    ${controls ? `<div class="showcase-controls" data-showcase-control role="group" aria-label="${zh ? '切换项目展示' : 'Project views'}">
      ${slides.map((slide, index) => `<button type="button" data-showcase-control data-slide="${index}" aria-pressed="${index === 0}"><span class="showcase-step">${String(index + 1).padStart(2,'0')}</span><span>${slide[zh ? 1 : 2]}</span></button>`).join('')}
    </div>` : ''}
  </div>`;
}

document.addEventListener('click', event => {
  const control = event.target.closest('button[data-slide]');
  if (!control) return;
  const gallery = control.closest('[data-showcase]');
  const slide = projectShowcases[gallery.dataset.showcase][Number(control.dataset.slide)];
  const image = gallery.querySelector('.showcase-image');
  image.src = slide[0];
  image.alt = slide[showcaseLanguage() === 'zh' ? 1 : 2];
  gallery.querySelectorAll('[data-slide]').forEach(button => button.setAttribute('aria-pressed', String(button === control)));
});

function mountCaseShowcase() {
  document.querySelectorAll('[data-case-showcase]').forEach(mount => {
    const selected = mount.querySelector('[aria-pressed="true"]')?.dataset.slide || '0';
    mount.innerHTML = renderProjectShowcase({id:mount.dataset.caseShowcase});
    const stage = mount.querySelector('.showcase-stage');
    const zoom = document.createElement('button');
    zoom.type = 'button';
    zoom.className = 'zoom';
    zoom.setAttribute('aria-label', showcaseLanguage() === 'zh' ? '放大当前设计稿' : 'Enlarge current design');
    zoom.append(stage.firstElementChild);
    stage.append(zoom);
    const selectedButton = mount.querySelector(`[data-slide="${selected}"]`);
    if (selected !== '0') selectedButton.click();
  });
}
document.addEventListener('portfolio:language', mountCaseShowcase);

// Navigation follows actual content location; no decorative fake tabs.
function initProductNavigation() {
  const nav = document.querySelector('[data-nav-menu]');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a')];
  function select(id) {
    links.forEach(link => {
      const url = new URL(link.href);
      const current = id === 'top' ? link.classList.contains('nav-home') :
        id === 'work' ? url.hash === '#work' :
        id === 'contact' ? url.hash === '#contact' : url.pathname.endsWith(`/${id}.html`);
      if (current) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }
  const page = location.pathname.split('/').pop();
  if (!page || page === 'index.html') {
    select('top');
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if (visible.length) select(visible[0].target.classList.contains('hero') ? 'top' : visible[0].target.id);
    }, {rootMargin:'-15% 0px -60% 0px'});
    document.querySelectorAll('main > .hero, #work, #notes, #about, #contact').forEach(section=>observer.observe(section));
  } else select(page.replace('.html',''));
}
initProductNavigation();
