(() => {
  const hero = document.querySelector('[data-hero-words]');
  if (!hero) return;
  const word = hero.querySelector('[data-hero-word]');
  const heading = hero.querySelector('h1');
  const greeting = hero.querySelector('[data-hero-greeting]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const roles = {
    en: ['AI UX designer', 'experimenter', 'builder', 'media artist', 'design engineer', 'yogi'],
    zh: ['AI UX 设计师', '实验者', '构建者', '媒体艺术家', '设计工程师', '瑜伽练习者'],
  };
  let language, index = 0, letters = 0, deleting = false, timer;
  let visible = true;
  function canRun() { return !reduced.matches && !document.hidden && visible; }
  function schedule(delay) {
    clearTimeout(timer);
    if (canRun()) timer = setTimeout(tick, delay);
  }
  function tick() {
    if (!canRun()) return;
    const target = roles[language][index];
    letters += deleting ? -1 : 1;
    word.textContent = target.slice(0, letters);
    if (!deleting && letters === target.length) {
      deleting = true;
      schedule(2800);
    } else if (deleting && letters === 0) {
      deleting = false;
      index = (index + 1) % roles[language].length;
      updateGreeting();
      schedule(160);
    } else schedule(deleting ? 50 : 110);
  }
  function updateGreeting() {
    greeting.textContent = language === 'zh' ? '你好，我是一名' :
      (['AI UX designer', 'experimenter'].includes(roles.en[index]) ? 'Hi, I’m an' : 'Hi, I’m a');
  }
  function reset() {
    clearTimeout(timer);
    language = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
    index = 0;
    const text = language === 'zh' ? '你好，我是一名' : 'Hi, I’m a / an';
    updateGreeting();
    heading.setAttribute('aria-label', `${text} ${roles[language].join(' / ')}`);
    word.textContent = roles[language][0];
    letters = roles[language][0].length;
    deleting = true;
    schedule(3200);
  }
  document.addEventListener('portfolio:language', reset);
  document.addEventListener('visibilitychange', () => {
    clearTimeout(timer);
    if (!document.hidden) schedule(1000);
  });
  reduced.addEventListener('change', reset);
  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    clearTimeout(timer);
    if (visible) schedule(2800);
  });
  observer.observe(hero);
  reset();
})();
