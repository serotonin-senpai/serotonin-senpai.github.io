---
---
(() => {
  function initNyan() {
    const nyanDiv = document.createElement('div');
    nyanDiv.id = 'nyan';
    document.body.prepend(nyanDiv);
    const typed = [null, null, null, null];
    function spawnNyan() {
      console.log('SPAWN NYAN');
      const img = document.createElement('img');
      const wrapper = document.querySelector('#nyan');
      const speed = 1 + Math.round(Math.random() * 9);
      img.src = '{{ "/images/nyan.webp" | relative_url }}'
      img.style.position = 'absolute';
      img.width = 520;
      img.height = 237;
      img.style.left = `-${img.width}px`
      img.style.top = `calc(${Math.random()} * (100vh - ${img.height}px))`;
      img.style.transition = `left ${speed}s linear`;
      wrapper.append(img);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          img.style.left = '100%';
          window.setTimeout(() => img.remove(), speed * 1000);
        });
      });
    }
    window.addEventListener('keypress', ev => {
      if (ev.key.length === 1) {
        typed.push(ev.key);
        typed.shift();
        const str = typed.join('');
        if (str === 'nyan') {
          spawnNyan();
        }
      }
    })
  };
  document.addEventListener("DOMContentLoaded", initNyan);
})();
