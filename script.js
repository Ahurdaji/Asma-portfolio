// Typing animation for the hero name
const nameEl = document.getElementById('typed-name');
const fullText = "Asma Khourdaji";
let i = 0;
function type(){
  if(i <= fullText.length){
    nameEl.innerHTML = fullText.slice(0,i) + '<span class="type-cursor">&nbsp;</span>';
    i++;
    setTimeout(type, 65);
  } else {
    nameEl.innerHTML = fullText;
  }
}
type();

// Scroll-reveal animation for sections as they enter the viewport
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// Smooth scroll for internal nav links
document.querySelectorAll('[data-scroll-to]').forEach(el=>{
  el.addEventListener('click', ()=>{
    const target = document.getElementById(el.getAttribute('data-scroll-to'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});
