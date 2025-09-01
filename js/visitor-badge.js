// docs/js/visitor-badge.js
(function () {
  var container = document.getElementById('visitor-counter');
  if (!container) return;

  // 1) 프로덕션에서만 렌더링 (미리보기/로컬에서는 에러 없이 스킵)
  var PROD_HOSTS = ['suminphd.github.io'];
  if (!PROD_HOSTS.includes(location.host)) {
    // 미리보기/로컬에서는 조용히 빠져나옴
    return;
  }

  // 2) 대상 URL 계산: canonical 링크가 있으면 그것, 없으면 현재 URL
  var canonical = document.querySelector('link[rel="canonical"]');
  var targetUrl = 'https://suminphd.github.io/comm-theories-archive/';
  // var targetUrl = canonical ? canonical.href : (location.origin + location.pathname);

  // 3) 배지 이미지 동적 생성
  var img = new Image();
  img.alt = 'Visitors';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.referrerPolicy = 'no-referrer'; // 리퍼러로 인한 차단을 회피

  img.onerror = function () {
    // 실패 시 깔끔한 텍스트 대체 (에러 이미지/alt 노출 방지)
    container.textContent = 'Visitors: n/a';
    container.style.opacity = '0.7';
  };

  img.src =
    'https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=' +
    encodeURIComponent(targetUrl) +
    '&count_bg=%23007ACC&title_bg=%23555555&icon=github.svg&icon_color=%23FFFFFF' +
    '&title=Visitors&edge_flat=false';

  container.appendChild(img);
})();
