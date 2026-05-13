// 共通の問題データ
const commonBefore = [
    { q: "あいりの誕生日は何月何日？", c: ["5月25日", "4月13日", "4月12日"], a: "4月13日" }, // 例
    { q: "今日であいりは何歳になった？", c: ["22歳", "23歳", "24歳"], a: "24歳" },
    { q: "あいりの出身地はどこ？", c: ["京都", "大阪", "奈良"], a: "奈良" },
    { q: "あいりのチャームポイントは？", c: ["全部", "目", "まつげ"], a: "全部" },
    { q: "あいりの血液型は何型？", c: ["A型", "B型", "O型"], a: "B型" },
    { q: "あいりの身長は何センチくらい？", c: ["155cm", "152cm", "156cm"], a: "155cm" },
    { q: "「最後の晩餐」に選びたい大好物は？", c: ["しゃぶしゃぶ", "シャブ", "チーズ"], a: "しゃぶしゃぶ" },
    { q: "これだけは無理！一番苦手な食べ物は？", c: ["パセリ", "セロリ", "大体全部"], a: "大体全部" },
    { q: "カフェに行ったらつい頼むのは？", c: ["抹茶ラテ", "ほうじ茶ラテ", "ティー"], a: "ほうじ茶ラテ" },
    { q: "カラオケで一番最初に歌う得意な曲は？", c: ["怪獣の花唄", "べテルギウス", "踊"], a: "べテルギウス" },
    { q: "お洒落をするとき一番こだわっているのは？", c: ["メイク", "服", "オーラ"], a: "メイク" },
    { q: "今、一番推しているのは誰？", c: ["天月", "キヨ", "Vanilla"], a: "Vanilla" }
];

// 上級編（人によって出し分ける部分：13問目〜18問目）
const specialQuestions = {
    "itsuki": [
        { q: "私（いつき）とあいりが出会った場所は？", c: ["小学４年生", "小学５年生", "小学６年生"], a: "小学４年生" },
        { q: "初めて会った時の、私（いつき）の第一印象は？", c: ["怖そう", "ムードメーカー", "元気"], a: "ムードメーカー" },
        { q: "2人が一緒に行った中で一番遠いところはどこ？", c: ["有馬温泉", "北海道", "ディズニー"], a: "ディズニー" },
        { q: "2人がこれまでで一番長く電話した時、何時間くらい話した？", c: ["２時間", "３時間", "４時間"], a: "３時間" },
        { q: "2人の間だけで通じる「秘密の合言葉」や「定番ネタ」と言えば？", c: ["マジこめかみ", "壱、拾、百、千、満点サロメー！", "るんちょま"], a: "マジこめかみ" },
        { q: "（あいりが思う）あいりが私（いつき）の誕生日にしてくれたことで、一番感動したのは？", c: ["20個の誕生日プレゼント", "高級レストランで夜景見ながらディナー", "サプライズケーキ"], a: "20個の誕生日プレゼント" },
    ],
    "ayako": [
        { q: "私（あやこ）とあいりが出会った場所は？", c: ["小学４年生", "小学５年生", "小学６年生"], a: "小学５年生" },
        { q: "初めて会った時の、私（あやこ）の第一印象は？", c: ["怖そう", "ムードメーカー", "静かで控えめ"], a: "静かで控えめ" },
        { q: "2人が一緒に行った中で一番遠いところはどこ？", c: ["シンガポール", "韓国", "ディズニー"], a: "シンガポール" },
        { q: "2人がこれまでで一番長く電話した時、何時間くらい話した？", c: ["３時間", "４時間", "５時間"], a: "５時間" },
        { q: "2人の間だけで通じる「秘密の合言葉」や「定番ネタ」と言えば？", c: ["こんちゃろっす", "壱、拾、百、千、満点サロメー！", "特にない"], a: "特にない" },
        { q: "（あいりが思う）あいりが私（あやこ）の誕生日にしてくれたことで、一番感動したのは？", c: ["ケーキ持って彼氏登場", "高級レストランで夜景見ながらディナー", "0時にお祝い"], a: "ケーキ持って彼氏登場" },
    ],
    "kanonn": [
        { q: "私（かのん）とあいりが出会った場所は？", c: ["小学５年生", "小学６年生", "中学１年生"], a: "中学１年生" },
        { q: "初めて会った時の、私（かのん）の第一印象は？", c: ["怖そう", "毛量多い子", "元気"], a: "毛量多い子" },
        { q: "2人が一緒に行った中で一番遠いところはどこ？", c: ["有馬温泉", "北海道", "淡路"], a: "淡路" },
        { q: "2人がこれまでで一番長く電話した時、何時間くらい話した？", c: ["０時間", "１時間", "２時間"], a: "０時間" },
        { q: "2人の間だけで通じる「秘密の合言葉」や「定番ネタ」と言えば？", c: ["タピオカたけと", "壱、拾、百、千、満点サロメー！", "特にない"], a: "特にない" },
        { q: "（あいりが思う）あいりが私（かのん）の誕生日にしてくれたことで、一番感動したのは？", c: ["イプサの化粧水", "フラッシュモブ", "サプライズケーキ"], a: "イプサの化粧水" },
    ]
};

const commonAfter = [
    { q: "あいりが無意識に言ってしまう口癖は？", c: ["たしかに", "それな", "きまづい"], a: "きまづい" },
    { q: "寝る前に必ずやっているルーティンは？", c: ["ストレッチ", "読書", "SNS徘徊"], a: "SNS徘徊" },
    { q: "「1ヶ月休み！」と言われたら何をする？", c: ["海外旅行、美容医療", "ひたすら寝る、だらだら", "全部"], a: "全部" },
    { q: "今、喉から手が出るほど欲しがっているものは？", c: ["バッグ", "お金", "PC"], a: "お金" },
    { q: "あいりを動物に例えるなら何？", c: ["いぬ", "ねこ", "うさぎ"], a: "ねこ" },
    { q: "24歳の1年間で達成したい目標は？", c: ["貯金", "２級建築士合格", "一人旅"], a: "２級建築士合格" }
];

let quizList = [


]; // 最終的な24問が入る
let currentIdx = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const progressEl = document.getElementById('progress');

// 1. 最初に誰が解くか選んでもらう
function startQuiz(type) {
    quizList = [...commonBefore, ...specialQuestions[type], ...commonAfter];
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    loadQuiz();
}

function loadQuiz() {
    feedbackEl.innerText = "";
    choicesEl.innerHTML = "";
    const currentQuiz = quizList[currentIdx];
    progressEl.innerText = `第 ${currentIdx + 1} 問 / 24 問`;
    questionEl.innerText = currentQuiz.q;

    currentQuiz.c.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(choice);
        choicesEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = quizList[currentIdx].a;
    if (selected === correct) {
        score++;
        feedbackEl.innerText = "正解！✨";
        feedbackEl.style.color = "#0288d1";
    } else {
        feedbackEl.innerText = `残念！正解は「${correct}」だよ。`;
        feedbackEl.style.color = "#ff5252";
    }

    setTimeout(() => {
        currentIdx++;
        if (currentIdx < quizList.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }, 1200);
}

function showResult() {
    // 1. 進捗テキストや問題を書き換える
    progressEl.innerText = "クイズ終了！";
    questionEl.innerText = `結果発表：${quizList.length}問中 ${score}問正解！`;
    
    // 2. 選択肢（ボタンが並んでいた場所）を「タイトルに戻る」ボタンに入れ替える
    choicesEl.innerHTML = `<button onclick="location.reload()">もう一度挑戦する</button>`;
    
    // 3. フィードバック（正解・不正解の文字）を消す
    feedbackEl.innerText = "";

    // 【重要】quiz-area は隠さない！ (隠すと結果の文字が見えなくなるため)
    // その代わり、リンクを表示させる
    const finalLinks = document.getElementById('final-links');
    if (finalLinks) {
        finalLinks.style.display = 'flex'; 
        
        // 少し遅らせてアニメーションを適用
        setTimeout(() => {
            finalLinks.classList.add('is-visible');
        }, 100);
    }
}
