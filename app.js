var alphabet_h = [
    ['あ', 'い', 'う', 'え', 'お'],
    ['か', 'き', 'く', 'け', 'こ'],
    ['さ', 'し', 'す', 'せ', 'そ'],
    ['た', 'ち', 'つ', 'て', 'と'],
    ['な', 'に', 'ぬ', 'ね', 'の'],
    ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['ま', 'み', 'む', 'め', 'も'],
    ['や',       'ゆ',       'よ'],
    ['ら', 'り', 'る', 'れ', 'ろ'],
    ['わ',             'ん', 'を']
]

var alphabet_k = [
    ['ア', 'イ', 'ウ', 'エ', 'オ'],
    ['カ', 'キ', 'ク', 'ケ', 'コ'],
    ['サ', 'シ', 'ス', 'セ', 'ソ'],
    ['タ', 'チ', 'ツ', 'テ', 'ト'],
    ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    ['マ', 'ミ', 'ム', 'メ', 'モ'],
    ['ヤ',       'ユ',       'ヨ'],
    ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    ['ワ',             'ン', 'ヲ']
]

var pronounce = [
    ['А',  'И',  'У',  'Э',  'О' ],
    ['КА', 'КИ', 'КУ', 'КЭ', 'КО'],
    ['СА', 'СИ', 'СУ', 'СЭ', 'СО'],
    ['ТА', 'ТИ', 'ЦУ', 'ТЭ', 'ТО'],
    ['НА', 'НИ', 'НУ', 'НЭ', 'НО'],
    ['ХА', 'ХИ', 'ФУ', 'ХЭ', 'ХО'],
    ['МА', 'МИ', 'МУ', 'МЭ', 'МО'],
    ['Я',         'Ю',        'Ё'],
    ['РА', 'РИ', 'РУ', 'РЭ', 'РО'],
    ['ВА',        'Н',    'О<br>(ВО)']
]

// mode 
// h - hiragana only
// k - katakana only
// b - both
var mode = 'h';
// 1 if kanatable is visible
var table_show = 0;
// 0 if pronounce is visible
var state = 1;

function alphabet_swap() {
    var alphabet_span = document.getElementById("curr_alphabet");
    if (table_show == 1){
        kanatable();
    }
    if (mode == 'h'){
        mode = 'k';
        alphabet_span.innerHTML = 'ア';
    }else if (mode == 'k') {
        mode = 'b';
        alphabet_span.innerHTML = 'あ/ア';
    } else {
        mode = 'h';
        alphabet_span.innerHTML = 'あ';
    }
}

function next(curr_num) {
    if (state == 1) {
        unravel(curr_num);
        return;
    }
    if (curr_num == undefined) {
        curr_num = [0, 0];
    } else {
        curr_num = curr_num.split(";");
        curr_num[0] = parseInt(curr_num[0]);
        curr_num[1] = parseInt(curr_num[1]);
    }
    var rand_num = curr_num;
    rand_num[0] = Math.floor(Math.random() * alphabet_h.length);
    rand_num[1] = Math.floor(Math.random() * alphabet_h[rand_num[0]].length);
    if (mode == 'h'){
        var char = alphabet_h[rand_num[0]][rand_num[1]];
    }else if (mode == 'k'){
        var char = alphabet_k[rand_num[0]][rand_num[1]];
    }else{
        if (Math.random() >= 0.5){
            var char = alphabet_h[rand_num[0]][rand_num[1]];
        }else{
            var char = alphabet_k[rand_num[0]][rand_num[1]];
        }
    }
    var guess_box_div = document.getElementById("guess-box");
    guess_box_div.innerHTML = char;
    guess_box_div.value = rand_num[0] + ';' + rand_num[1];
    state = 1;
}

function unravel(curr_num) {
    if (curr_num == undefined) {
        curr_num = [0, 0];
    }else{
        curr_num = curr_num.split(";");
        curr_num[0] = parseInt(curr_num[0]);
        curr_num[1] = parseInt(curr_num[1]);
    }
    var char = pronounce[curr_num[0]][curr_num[1]];
    var guess_box_div = document.getElementById("guess-box");
    guess_box_div.innerHTML = char;
    guess_box_div.value = curr_num[0] + ';' + curr_num[1];
    state = 0;
}

function kanatable() {
    if (mode == 'h'){
        var kanatable = document.getElementById("kanatable_h");
    }else if (mode == 'k'){
        var kanatable = document.getElementById("kanatable_k");
    }else {
        var kanatable = document.getElementById("kanatable_b");
    }
    var guess_box_div = document.getElementById("guess-box");

    if (kanatable.style.display == 'block') {
        kanatable.style.display = 'none';
        guess_box_div.style.display = 'block';
        table_show = 0;
    } else {
        kanatable.style.display = 'block';
        guess_box_div.style.display = 'none';
        table_show = 1;
    }
}