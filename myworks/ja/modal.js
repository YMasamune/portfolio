// モーダルを表示する関数の定義
function modalOpen(){
    document.getElementById("modal").style.display = "block";
};

// 送信ボタンをクリックしたときにmodalOpen関数を呼び出す
document.getElementById("submit").onclick = modalOpen;

// モーダルを非表示にする関数の定義
function modalClose(){
    document.getElementById("modal").style.display = "none";
};

// モーダル上で戻るボタンをクリックしたときにmodalClose関数を呼び出す
document.getElementById("modal-close").onclick = modalClose;

// ページを遷移させる関数の定義
function modalSubmit(){
    location = "send.html";
};
// モーダル上で送信ボタンをクリックしたときにmodalSubmit関数を呼び出す
document.getElementById("modal-submit").onclick = modalSubmit;

function menuOpen(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("humb-close").style.display = "block";
};

// 開くアイコンをクリックしたときにmenuOpen関数を呼び出す
document.getElementById("humb-open").onclick = menuOpen;

// メニューを非表示にする関数の定義
function menuClose(){
    document.getElementById("menu").style.display = "none";
}

// 閉じるアイコンをクリックしたときにmenuClose関数を呼び出す
document.getElementById("humb-close").onclick = menuClose;
