(() => {
  const links = document.querySelectorAll('.work a'), peek = document.querySelector('.peek');
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const setBg = c => c ? document.body.style.setProperty('--bg', c) : document.body.style.removeProperty('--bg');
  let x = 0, y = 0, raf = 0;
  const move = () => { peek.style.transform = `translate(${x + 24}px,${y - 90}px)`; raf = 0; };
  links.forEach(a => {
    let ok = false;
    const src = a.dataset.img, im = new Image();
    im.onload = () => ok = true; im.src = src;
    const on = () => { setBg(a.dataset.tint); if (fine && ok) { peek.style.backgroundImage = `url(${src})`; peek.classList.add('on'); } };
    const off = () => { setBg(); peek.classList.remove('on'); };
    a.addEventListener('mouseenter', on); a.addEventListener('mouseleave', off);
    a.addEventListener('focus', on); a.addEventListener('blur', off);
  });
  if (fine) addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; if (!raf) raf = requestAnimationFrame(move); });
})();
