//we dont talk about how long this took 


function showPage(page) {
    // this one helps with hiding the pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // shows target page
    document.getElementById('page-' + page).classList.add('active');

    // this is the sidebar active state, and yes, another help (bless my bro)
    document.querySelectorAll('.sidebar nav a').forEach(a => a.classList.remove('active'));
    const activeLink = document.getElementById('nav-' + page);
    if (activeLink) activeLink.classList.add('active');

    // closes sidebar on mobile <---this is important
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');

    // scrolls to top
    window.scrollTo(0, 0);
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
}




document.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash; // e.g. "#page-anarchy"
  if (!hash) return;

  const pageKey = hash.replace('#page-', ''); // "anarchy"
  // 若 showPage 已定義，直接呼叫
  if (typeof showPage === 'function') {
    try {
      showPage(pageKey);
    } catch (e) {
      console.error('showPage 呼叫失敗', e);
    }
    return;
  }

  // fallback: 若 showPage 不存在，嘗試點擊側邊欄連結或顯示元素
  fallbackOpen(hash);
});

function fallbackOpen(hash) {
  const id = hash.slice(1); 
  // 嘗試找到側邊欄連結（常見寫法）
  const link = document.querySelector(`#sidebar a[href="${hash}"], #sidebar a[href="#${id}"], #nav-${id}`);
  if (link) {
    // 模擬使用者點擊
    link.click();
    return;
  }
  // 若找不到連結，直接顯示目標元素
  // const el = document.getElementById(id) || document.getElementById('page-' + id.replace(/^page-/, ''));
  // if (el) {
  //   el.style.display = '';
  //   el.classList.add('active');
  //   requestAnimationFrame(() => {
  //     el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     window.scrollBy(0, -80); // 若有 sticky header，調整高度
  //   });
  // }
}

// The share function

document.addEventListener('copy-link', () => {
  // 找到按鈕（id 必須完全相同）
  const btn = document.getElementById('copy-link');
  if (!btn) {
    console.warn('copy-link not found');
    return;
  }

  // 綁定事件（使用 addEventListener 避免被覆寫）
  btn.addEventListener('click', async (e) => {
    e.preventDefault(); // 若按鈕在表單內避免 submit
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('copied link'); // 保留原本提示方式
    } catch (err) {
      console.error('copy failed', err);
      alert('unable to copy link'); // 保留原本提示方式
    }
  });
});

