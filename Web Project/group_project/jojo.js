
const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);

// 复制链接
document.getElementById('copy-link').onclick = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        alert('copied link');
    } catch {
        alert('unable to copy link');
    }
};

document.getElementById('ENG').addEventListener('click', () => location.reload());

//切換頁面語言
var CHIN = document.getElementById("CHIN");
// var ENG = document.getElementById("ENG");


CHIN.addEventListener("click", chinese, false);
// ENG.addEventListener("click", english, false);

var header1 = document.getElementById("header1");
var header2 = document.getElementById("header2");
var subtitle = document.getElementById("subtitle");


var home = document.getElementById("nav-home");

var projO = document.getElementById("nav-objective");

var H_origin = document.getElementById("nav-origins");
var R_Anarchy = document.getElementById("nav-anarchy");
var C_darkness = document.getElementById("nav-darkness");

var life = document.getElementById("nav-life");
var demolition = document.getElementById("nav-demolition");
var today = document.getElementById("nav-today");

var prak = document.getElementById("park");
var Exh = document.getElementById("Exhibition");
var food = document.getElementById("food");
var food2 = document.getElementById("food2");
var kwc_att = document.getElementById("kwc_attraction");
var art = document.getElementById("art");

var intro = document.getElementById("intro");
var his = document.getElementById("history");
var thecity = document.getElementById("thecity");
var TG = document.getElementById("TG");
var other = document.getElementById("other");
var Cus = document.getElementById("ContactUs");

var footer_note = document.getElementById("footer-note");

var theH1 = document.getElementById("Theh1");
var TContent = document.getElementById("TContent");

var no1 = document.getElementById("no.1");
var no2 = document.getElementById("no.2");
var no3 = document.getElementById("no.3");
var no4 = document.getElementById("no.4");
var no5 = document.getElementById("no.5");
var no6 = document.getElementById("no.6");

var Tno1 = document.getElementById("Tno.1");
var Tno2 = document.getElementById("Tno.2");
var Tno3 = document.getElementById("Tno.3");
var Tno4 = document.getElementById("Tno.4");
var Tno5 = document.getElementById("Tno.5");
var Tno6 = document.getElementById("Tno.6");

var add1 = document.getElementById("address1");
var add2 = document.getElementById("address2");
var add3 = document.getElementById("address3");
var add4 = document.getElementById("address4");
var add5 = document.getElementById("address5");
var add6 = document.getElementById("address6");

var op1 = document.getElementById("Opening1");
var op2 = document.getElementById("Opening2");
var op3 = document.getElementById("Opening3");
var op4 = document.getElementById("Opening4");
var op5 = document.getElementById("Opening5");
var op6 = document.getElementById("Opening6");

var Howto1 = document.getElementById("Howto1");
var Howto2 = document.getElementById("Howto2");
var Howto3 = document.getElementById("Howto3");
var Howto4 = document.getElementById("Howto4");
var Howto5 = document.getElementById("Howto5");
var Howto6 = document.getElementById("Howto6");

var why = document.getElementById("Why");
var W = document.getElementById("W");




function chinese() {
    header1.textContent = "九龍";
    header2.textContent = "遺忘之城：九龍城寨";
    subtitle.textContent = "九龍城寨";


    home.textContent = "首頁";

    intro.textContent = "簡介";

    projO.textContent = "關於本網站";

    his.textContent = "歷史";

    H_origin.textContent = "歷史起源";
    R_Anarchy.textContent = "無政府狀態的崛起";
    C_darkness.textContent = "黑暗之城";

    thecity.textContent = "城市";

    life.textContent = "牆內生活";
    demolition.textContent = "拆除與遺產";
    today.textContent = "今日的城牆城市";

    TG.textContent = "旅遊指南";

    prak.textContent = "九龍寨公園";
    Exh.textContent = "九龍寨展";
    food.textContent = "附近美食地點（1）";
    food2.textContent = "附近美食地點（2）";
    kwc_att.textContent = "九龍城景點";
    art.textContent = "衍生藝術作品";

    other.textContent = "其他";

    Cus.textContent = "聯絡我們";

    footer_note.textContent = "香港九龍城寨°❀*";

    theH1.textContent = "九龍城附近美食地點（2）";
    TContent.textContent = "目錄";

    no1.textContent = "九龍市集";
    no2.textContent = "樂園茶攤";
    no3.textContent = "錦泰烤串";
    no4.textContent = "Cambo 泰式餐廳";
    no5.textContent = "桂一記潮州麵包店";
    no6.textContent = "德興魚丸公司與德昌魚丸麵";

    Tno1.textContent = "九龍市集";
    Tno2.textContent = "樂園茶攤";
    Tno3.textContent = "錦泰烤串";
    Tno4.textContent = "Cambo 泰式餐廳";
    Tno5.textContent = "桂一記潮州麵包店";
    Tno6.textContent = "德興魚丸公司與德昌魚丸麵";

    add1.textContent = "地址";
    add2.textContent = "地址";
    add3.textContent = "地址";
    add4.textContent = "地址";
    add5.textContent = "地址";
    add6.textContent = "地址";

    op1.textContent = "營業時間";
    op2.textContent = "營業時間";
    op3.textContent = "營業時間";
    op4.textContent = "營業時間";
    op5.textContent = "營業時間";
    op6.textContent = "營業時間";

    Howto1.textContent = "如何到達？";
    Howto2.textContent = "如何到達？";
    Howto3.textContent = "如何到達？";
    Howto4.textContent = "如何到達？";
    Howto5.textContent = "如何到達？";
    Howto6.textContent = "如何到達？";
    W.textContent = "位於九龍城市政大廈的傳統室內街市，因商品種類多、新鮮及品質高，吸引不少明星、名人來選購食材，如周潤發、劉青雲等曾被拍到在此買餸，被稱為「明星街市」。街市佔地寬敞，檔口販賣生鮮蔬果、肉類海產及各色地道食材，亦設有熟食中心，供應多種港式平民美食。九龍城街市人氣名店包括：賣雞女王玲姐主理的周華記、打邊爐必食手切牛肉檔李輝記牛欄，以及獲蔡瀾提字的陶記鮮蔬等。";

}
