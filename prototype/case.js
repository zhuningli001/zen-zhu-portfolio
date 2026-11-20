(() => {
  const languageButton = document.querySelector('#case-language');
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName) && caseTranslations[node.textContent]) {
      textNodes.push({ node, zh: node.textContent, en: caseTranslations[node.textContent] });
    }
  }
  const attributes = [];
  document.querySelectorAll('[alt], [aria-label]').forEach(element => {
    for (const name of ['alt', 'aria-label']) {
      const zh = element.getAttribute(name);
      if (!zh) continue;
      const en = zh.startsWith('放大：') ? 'Enlarge: ' + (caseTranslations[zh.slice(3)] || zh.slice(3)) : caseTranslations[zh];
      if (en) attributes.push({ element, name, zh, en });
    }
  });
  let language = 'en';
  function setLanguage(value) {
    language = value === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    document.body.dataset.language = language;
    document.dispatchEvent(new Event("portfolio:language"));
    textNodes.forEach(item => { item.node.textContent = item[language]; });
    attributes.forEach(item => item.element.setAttribute(item.name, item[language]));
    languageButton.textContent = language === 'zh' ? 'EN' : '中';
    languageButton.setAttribute('aria-label', language === 'zh' ? '切换到英文' : 'Switch to Chinese');
    try { localStorage.setItem('portfolio-language', language); } catch {}
  }
  try { language = localStorage.getItem('portfolio-language') === 'zh' ? 'zh' : 'en'; } catch {}
  setLanguage(language);
  languageButton.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));

  const theme = document.querySelector('#theme');
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch {}
  if (saved === 'dark') document.body.dataset.theme = 'dark';
  theme.addEventListener('click', () => {
    const value = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = value;
    try { localStorage.setItem('portfolio-theme', value); } catch {}
  });
  const dialog = document.querySelector('#lightbox');
  document.addEventListener('click', event => {
    const button = event.target.closest('.zoom');
    if (!button) return;
    const source = button.querySelector('img');
    const image = dialog.querySelector('img');
    image.src = source.src; image.alt = source.alt;
    dialog.showModal();
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      document.querySelectorAll('.case-index nav a').forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-10% 0px -60% 0px' });
  document.querySelectorAll('.case-section').forEach(section => observer.observe(section));
})();
