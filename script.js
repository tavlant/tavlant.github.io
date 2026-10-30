// Theme toggle (saved in localStorage) + footer year. No dependencies.
(function () {
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return media && media.matches ? 'dark' : 'light';
  }

  function updateMeta(theme) {
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].setAttribute('content', theme === 'dark' ? '#0b0f17' : '#fbfbfd');
      metas[i].removeAttribute('media');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      var label = function () {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
        btn.setAttribute('title', 'Switch to ' + next + ' theme');
      };
      label();
      btn.addEventListener('click', function () {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        updateMeta(next);
        label();
      });
    }

    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
