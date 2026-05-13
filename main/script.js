window.addEventListener('load', () => {
  const opening = document.getElementById('opening');
  
  setTimeout(() => {
    opening.classList.add('is-loaded');
    startTextAnimation(); 
  }, 2500); 
});

function startTextAnimation() {
  const animatedText = document.querySelector('.animate-text');
  if (!animatedText) return;

  animatedText.style.opacity = 1;

  // 子要素（文字、画像、改行など）をすべて取得
  const nodes = Array.from(animatedText.childNodes);
  animatedText.innerHTML = ''; // 一旦リセット
  
  let delayCount = 0;

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      // --- テキスト（文字）の場合 ---
      const chars = Array.from(node.textContent);
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${0.1 * delayCount}s`;
        animatedText.appendChild(span);
        delayCount++;
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // --- タグ（imgやbr）の場合 ---
      if (node.tagName.toLowerCase() === 'br') {
        // 改行タグならそのまま追加（delayCountは増やさないのがコツ！）
        animatedText.appendChild(node.cloneNode(true));
      } else {
        // 画像などの場合はspanで囲ってアニメーションさせる
        const span = document.createElement('span');
        span.appendChild(node.cloneNode(true));
        span.style.animationDelay = `${0.1 * delayCount}s`;
        animatedText.appendChild(span);
        delayCount++;
      }
    }
  });

  // 全体の演出時間（文字数に応じる）
  const totalTime = delayCount * 100 + 2000;

  setTimeout(() => {
    animatedText.classList.add('fade-out');
    setTimeout(() => {
      animatedText.style.display = 'none';
      const content = document.querySelector('.main-content');
      if (content) {
        content.classList.add('is-visible');
        // 本文内の要素を監視開始（imgも含める）
        document.querySelectorAll('.button-container .main-content h2, .main-content p, .main-content img, .reveal-section').forEach((el) => {
          observer.observe(el);
        });
      }
    }, 1500);
  }, totalTime);
}

// 本文のふわっと表示用
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
    setTimeout(() => {
    entry.target.classList.add('is-visible');
    }, index * 1200); // 1.2秒ずつずらして表示開始
    }
  });
}, observerOptions);

// 一番最後の行も修正
document.querySelectorAll('.main-content p, .main-content img, .main-content h2, .button-container').forEach((el) => {
  observer.observe(el);
});