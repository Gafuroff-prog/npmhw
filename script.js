const strelka = document.getElementById('strelka-element');


const Typed = window.Typed;



const typedMain = new Typed('#element', {
  strings: ['TEXT GRADIENTS'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  startDelay: 1000,
  loop: true,
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  showCursor: false,
});


const typedSub = new Typed('#subtext-element', {
  strings: ['Make your headlines stand out'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  startDelay: 1000,
  loop: true,
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  showCursor: false,
});

document.addEventListener('DOMContentLoaded', function() {
  const strelka = document.getElementById('strelka-element');
  if (strelka) {
    strelka.addEventListener('click', function() {
      window.location.href = '/page2/page2.html';
    });
  }
});
