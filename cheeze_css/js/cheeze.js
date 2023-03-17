/* ========== デフォルトヘッダーナビゲーション開閉用 ========== */
// .js-nav-activeを付与／削除
const jsToggleHeaderNavi = () => {
    document.getElementById('header').classList.toggle('js-nav-active');
    document.getElementById('nav-header').classList.toggle('js-nav-active');
    document.getElementById('center-container').classList.toggle('js-nav-active');
    document.body.classList.toggle('js-nav-active');
}
// ウィンドウの幅が768px以下である場合に.js-nav-activeを外す処理
function switchByWidth() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
        document.getElementById('header').classList.remove('js-nav-active');
        document.getElementById('nav-header').classList.remove('js-nav-active');
        document.getElementById('center-container').classList.remove('js-nav-active');
        document.body.classList.remove('js-nav-active');
    }
}
//ロードとリサイズの両方で同じ処理を付与する
window.addEventListener('load', switchByWidth);
window.addEventListener('resize', switchByWidth);




/* ========== アクティブクラス付与処理（任意ID指定） ========== */
const jsToggleClassForId = (idName1) => {
    document.getElementById(idName1).classList.toggle('js-active');
}