// Submit contact form via fetch to the form endpoint and show status messages
(function(){
  function el(id){return document.getElementById(id)}
  function setStatus(msg, kind){
    var st = el('contact-form-status'); if(!st) return;
    st.textContent = msg;
    st.classList.remove('success','error');
    if(kind) st.classList.add(kind);
  }

  document.addEventListener('submit', function(e){
    var form = e.target;
    if(!form || form.id !== 'contact-form') return;
    e.preventDefault();

    var statusEl = el('contact-form-status');
    if(!statusEl){ console.warn('No status element for contact form'); }

    // Honeypot: if filled, treat as spam (silently succeed)
    var gotcha = form.querySelector('input[name="_gotcha"]');
    if(gotcha && gotcha.value.trim() !== ''){
      setStatus('Mensaje enviado, gracias.', 'success');
      form.reset();
      return;
    }

    // Ensure action is configured
    var action = form.getAttribute('action') || '';
    if(!action || action.indexOf('formspree.io') === -1){
      setStatus('Configura la URL de envío en el atributo action del formulario.', 'error');
      return;
    }

    // Disable submit button
    var submit = form.querySelector('button[type="submit"]');
    if(submit){ submit.disabled = true; submit.setAttribute('aria-busy','true'); }
    setStatus('Enviando...', null);

    fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(response){
      if(response.ok){
        setStatus('Mensaje enviado, gracias.', 'success');
        form.reset();
      } else {
        return response.json().then(function(data){
          var message = (data && (data.error || data.message)) || 'Error al enviar el formulario.';
          setStatus(message, 'error');
        }).catch(function(){ setStatus('Error al enviar el formulario.', 'error'); });
      }
    }).catch(function(){ setStatus('No se pudo conectar con el servicio de envío.', 'error'); })
    .finally(function(){ if(submit){ submit.disabled = false; submit.removeAttribute('aria-busy'); } });
  });
})();
