(() => {
  'use strict';
  const text = document.querySelector('#missionText');
  if (!text) return;
  const sentence = text.textContent;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const typingMs = 7000, visibleMs = 8000;
  // One stable accessible message; visual characters reserve their full layout.
  const accessible = document.createElement('span');
  accessible.className = 'sr-only';
  accessible.textContent = sentence;
  const visual = document.createElement('span');
  visual.setAttribute('aria-hidden', 'true');
  const letters = Array.from(sentence, character => {
    const span = document.createElement('span');
    span.textContent = character;
    visual.append(span);
    return span;
  });
  text.replaceChildren(accessible, visual);
  const weights = letters.map(letter => /[,.;:!?]/.test(letter.textContent) ? 5 : 1);
  const unitMs = typingMs / weights.reduce((sum, weight) => sum + weight, 0);
  const deadlines = []; let elapsed = 0;
  weights.forEach(weight => { deadlines.push(elapsed); elapsed += weight * unitMs; });
  let timer, index = 0, started = 0;
  function showAll() {
    clearTimeout(timer);
    letters.forEach(letter => { letter.style.visibility = 'visible'; letter.classList.remove('typing-head'); });
  }
  function start() {
    clearTimeout(timer);
    if (reduced.matches || document.hidden) { showAll(); return; }
    index = 0; started = performance.now();
    letters.forEach(letter => { letter.style.visibility = 'hidden'; letter.classList.remove('typing-head'); });
    type();
  }
  function type() {
    if (reduced.matches || document.hidden) { showAll(); return; }
    if (index) letters[index - 1].classList.remove('typing-head');
    const now = performance.now() - started;
    while (index < letters.length && deadlines[index] <= now) letters[index++].style.visibility = 'visible';
    if (index < letters.length) {
      if (index) letters[index - 1].classList.add('typing-head');
      timer = setTimeout(type, Math.max(1, deadlines[index] - now));
    } else {
      timer = setTimeout(start, visibleMs);
    }
  }
  reduced.addEventListener('change', start);
  document.addEventListener('visibilitychange', start);
  if (reduced.matches || document.hidden) showAll();
  else { letters.forEach(letter => { letter.style.visibility = 'hidden'; }); timer = setTimeout(start, 650); }
})();
