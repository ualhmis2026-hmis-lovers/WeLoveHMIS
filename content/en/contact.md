---
title: "Contacto"
description: "Dinos algo!"
author: "angel"
slug: "contact"
hiddenInHomeList: true
---

No sabemos aún muy bien *por qué querrías contactar con nosotros*, pero aquí tienes un formulario de **Formspree** para ello:

<form id="contact-form" class="contact-form" action="https://formspree.io/f/xykbgjqd" method="POST">
  <label for="name">Nombre</label>
  <input id="name" name="name" type="text" required>

  <label for="email">Correo electrónico</label>
  <input id="email" name="_replyto" type="email" required>

  <label for="subject">Asunto</label>
  <input id="subject" name="subject" type="text">

  <label for="message">Mensaje</label>
  <textarea id="message" name="message" rows="6" required></textarea>

  <!-- Honeypot field to trap bots (leave empty) -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

  <button type="submit">Enviar mensaje</button>

  <div id="contact-form-status" class="contact-status" aria-live="polite"></div>
</form>

