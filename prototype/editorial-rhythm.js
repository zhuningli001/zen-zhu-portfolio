(() => {
 if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (!entry.isIntersecting) return;
   entry.target.classList.add('rhythm-reveal');
   observer.unobserve(entry.target);
  });
 }, {threshold:0.08});
 const watch = root => root.querySelectorAll('.section-heading,.about-preview h2,.contact-section h2,.artboard-intro h1,.art-piece,.note-prose h2,.case-section .section-label').forEach(el => observer.observe(el));
 watch(document);
})();
