// Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('mobile-open');
  });

  // Dropdown: tap-to-toggle on mobile, hover handles desktop via CSS
  document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link=>{
    link.addEventListener('click', (e)=>{
      if (window.matchMedia('(max-width: 680px)').matches){
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Close mobile menu after choosing a link inside the dropdown
  document.querySelectorAll('.dropdown-link, .dropdown-promo .btn').forEach(link=>{
    link.addEventListener('click', ()=>{
      mainNav.classList.remove('mobile-open');
      document.querySelectorAll('.nav-item.open').forEach(li=> li.classList.remove('open'));
    });
  });

  // Cart counter
  let cartCount = 0;
  function addToCart(){
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    const btn = document.getElementById('cartBtn');
    btn.style.transform = 'scale(1.15)';
    setTimeout(()=> btn.style.transform = 'scale(1)', 150);
  }

  // Newsletter
  function handleSubscribe(e){
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Subscribed ✓';
    setTimeout(()=> btn.textContent = original, 2200);
    e.target.reset();
    return false;
  }

  // Wipe test slider
  (function(){
    const tester = document.getElementById('wipeTester');
    const handle = document.getElementById('wipeHandle');
    const clearLayer = document.getElementById('clearLayer');
    let dragging = false;

    function setPosition(clientX){
      const rect = tester.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(4, Math.min(96, pct));
      handle.style.left = pct + '%';
      clearLayer.style.clipPath = `inset(0 0 0 ${pct}%)`;
    }

    tester.addEventListener('mousedown', (e)=>{ dragging = true; setPosition(e.clientX); });
    window.addEventListener('mousemove', (e)=>{ if(dragging) setPosition(e.clientX); });
    window.addEventListener('mouseup', ()=> dragging = false);

    tester.addEventListener('touchstart', (e)=>{ dragging = true; setPosition(e.touches[0].clientX); }, {passive:true});
    tester.addEventListener('touchmove', (e)=>{ if(dragging) setPosition(e.touches[0].clientX); }, {passive:true});
    tester.addEventListener('touchend', ()=> dragging = false);

    // gentle auto demo on load
    let demo = 50;
    let dir = 1;
    let ticks = 0;
    const demoInterval = setInterval(()=>{
      if(dragging){ clearInterval(demoInterval); return; }
      demo += dir * 0.6;
      if(demo > 68 || demo < 32) dir *= -1;
      handle.style.left = demo + '%';
      clearLayer.style.clipPath = `inset(0 0 0 ${demo}%)`;
      ticks++;
      if(ticks > 160) clearInterval(demoInterval);
    }, 30);
  })();