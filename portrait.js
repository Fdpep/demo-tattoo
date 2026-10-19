'use strict';
const portraitToggle=document.querySelector('.portrait-motion-toggle');
portraitToggle.addEventListener('click',()=>{const frame=document.querySelector('.artist-frame'),paused=frame.classList.toggle('effect-paused');portraitToggle.setAttribute('aria-pressed',String(paused));portraitToggle.setAttribute('aria-label',paused?'Riprendi l’effetto luminoso':'Metti in pausa l’effetto luminoso');portraitToggle.textContent=paused?'Riprendi effetto':'Pausa effetto'});
