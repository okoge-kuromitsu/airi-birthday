// 画面が完全に読み込まれてから動かす
document.addEventListener('DOMContentLoaded', () => {
    
    // ページ全体で「クリック」を見張る
    document.addEventListener('click', (e) => {
        // クリックされた場所から一番近い「.card」を探す
        const card = e.target.closest('.card');
        
        // もしカードが見つかったら
        if (card) {
            // ひっくり返すクラスをつけ外しする
            card.classList.toggle('is-flipped');
            console.log("カードをめくりました！");
        }
    });

});

