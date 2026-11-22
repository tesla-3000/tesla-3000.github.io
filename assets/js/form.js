(function () {
  var f = document.getElementById('cf');
  if (!f) return;
  var msg = f.querySelector('.msg');
  function mailto() {
    var d = new FormData(f), body = '';
    ['name', 'email', 'role', 'clients', 'message'].forEach(function (k) { body += k + ': ' + (d.get(k) || '') + '\n'; });
    location.href = 'mailto:' + f.dataset.mailto + '?subject=' + encodeURIComponent('Contatto sito / Website contact') + '&body=' + encodeURIComponent(body);
  }
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (f.website.value) return; // honeypot
    if (!f.dataset.endpoint) { mailto(); return; }
    var data = Object.fromEntries(new FormData(f).entries());
    data.lang = f.dataset.lang; data.page = location.pathname;
    fetch(f.dataset.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); msg.textContent = f.dataset.ok; f.reset(); })
      .catch(function () { msg.textContent = f.dataset.err; mailto(); });
  });
})();
