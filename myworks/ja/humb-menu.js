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

