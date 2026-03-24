document.addEventListener('click', function (e) {
  var s = e.target.closest('.spoiler-summary');
  if (s) {
    var block = s.closest('.spoiler');
    if (!block) return;
    block.classList.toggle('open');
    return;
  }

  var inline = e.target.closest('.spoiler-inline');
  if (inline) {
    inline.classList.toggle('open');
    return;
  }
});

document.addEventListener('keydown', function (e) {
  var s = e.target.closest && e.target.closest('.spoiler-summary');
  if (s) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      var block = s.closest('.spoiler');
      if (!block) return;
      block.classList.toggle('open');
    }
    return;
  }

  var inline = e.target.closest && e.target.closest('.spoiler-inline');
  if (inline) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inline.classList.toggle('open');
    }
  }
});
