/* Split text nodes inside elements with class .dance[data-mode="letters"]
   Wraps each character in a span.dance-letter and sets --i index for staggered delays
*/
(function(){
  function splitLetters(root){
    if(root.dataset && root.dataset.danceProcessed) return;
    let index = 0;
    // set per-container step (stagger) from data-step or default
    var step = root.dataset && root.dataset.step ? root.dataset.step : '0.06s';
    try{ root.style.setProperty('--step', step); }catch(e){}
    function walk(node){
      let children = Array.from(node.childNodes);
      for(let child of children){
        if(child.nodeType === Node.TEXT_NODE){
          let text = child.nodeValue;
          if(!text.trim()){
            // still keep spaces to preserve layout
            let frag = document.createDocumentFragment();
            for(let ch of text){
              let sp = document.createElement('span');
              sp.className = 'dance-letter';
              sp.style.setProperty('--i', index);
              sp.textContent = ch === ' ' ? '\u00A0' : ch;
              frag.appendChild(sp);
              index++;
            }
            node.replaceChild(frag, child);
            continue;
          }
          let frag = document.createDocumentFragment();
          for(let ch of text){
            let sp = document.createElement('span');
            sp.className = 'dance-letter';
            sp.style.setProperty('--i', index);
            sp.textContent = ch === ' ' ? '\u00A0' : ch;
            frag.appendChild(sp);
            index++;
          }
          node.replaceChild(frag, child);
        } else if(child.nodeType === Node.ELEMENT_NODE){
          walk(child);
        }
      }
    }
    walk(root);
    if(root.dataset) root.dataset.danceProcessed = '1';
  }

  function init(){
    let els = document.querySelectorAll('.dance[data-mode="letters"]');
    els.forEach(el => splitLetters(el));
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
