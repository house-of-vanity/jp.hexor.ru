var alphabet_h = [
    ['あ', 'い', 'う', 'え', 'お'],
    ['か', 'き', 'く', 'け', 'こ'],
    ['さ', 'し', 'す', 'せ', 'そ'],
    ['た', 'ち', 'つ', 'て', 'と'],
    ['な', 'に', 'ぬ', 'ね', 'の'],
    ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['ま', 'み', 'む', 'め', 'も'],
    ['や', 'ゆ', 'よ'],
    ['ら', 'り', 'る', 'れ', 'ろ'],
    ['わ', 'ん', 'を']
]

var alphabet_k = [
    ['ア', 'イ', 'ウ', 'エ', 'オ'],
    ['カ', 'キ', 'ク', 'ケ', 'コ'],
    ['サ', 'シ', 'ス', 'セ', 'ソ'],
    ['タ', 'チ', 'ツ', 'テ', 'ト'],
    ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    ['マ', 'ミ', 'ム', 'メ', 'モ'],
    ['ヤ', 'ユ', 'ヨ'],
    ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    ['ワ', 'ン', 'ヲ']
]

var pronounce = [
    ['А', 'И', 'У', 'Э', 'О'],
    ['КА', 'КИ', 'КУ', 'КЭ', 'КО'],
    ['СА', 'СИ', 'СУ', 'СЭ', 'СО'],
    ['ТА', 'ТИ', 'ЦУ', 'ТЭ', 'ТО'],
    ['НА', 'НИ', 'НУ', 'НЭ', 'НО'],
    ['ХА', 'ХИ', 'ФУ', 'ХЭ', 'ХО'],
    ['МА', 'МИ', 'МУ', 'МЭ', 'МО'],
    ['Я', 'Ю', 'Ё'],
    ['РА', 'РИ', 'РУ', 'РЭ', 'РО'],
    ['ВА', 'Н', 'О<br>(ВО)']
]

// mode_kana 
// h - hiragana only
// k - katakana only
// b - both
var mode_kana = 'h';
// 1 if kanatable is visible
var table_show = 0;
// 0 if pronounce is visible
var state = 1;
// mode_learning
// if kana - alphabetes learning mode
// if words - words  learning mode
var mode_learning = 'kana';

// default unit nubmer
var unit = 1;
// onload ivents
window.onload = function () {
    //fill in kana tables
    document.getElementById("kana_helper_table").innerHTML = hiragana_table + katakana_table + both_kana_table;
}

function alphabet_swap() {
    var alphabet_span = document.getElementById("curr_alphabet");
    if (table_show == 1) {
        kanatable();
    }
    if (mode_kana == 'h') {
        mode_kana = 'k';
        alphabet_span.innerHTML = 'ア';
    } else if (mode_kana == 'k') {
        mode_kana = 'b';
        alphabet_span.innerHTML = 'あ/ア';
    } else {
        mode_kana = 'h';
        alphabet_span.innerHTML = 'あ';
    }
}

function next_letter(curr_num) {
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
    if (mode_kana == 'h') {
        var char = alphabet_h[rand_num[0]][rand_num[1]];
    } else if (mode_kana == 'k') {
        var char = alphabet_k[rand_num[0]][rand_num[1]];
    } else {
        if (Math.random() >= 0.5) {
            var char = alphabet_h[rand_num[0]][rand_num[1]];
        } else {
            var char = alphabet_k[rand_num[0]][rand_num[1]];
        }
    }
    var guess_box_div = document.getElementById("kana-guess");
    guess_box_div.innerHTML = char;
    guess_box_div.value = rand_num[0] + ';' + rand_num[1];
    state = 1;
}

// returns pronounce for requested letter number
function unravel(curr_num) {
    if (curr_num == undefined) {
        curr_num = [0, 0];
    } else {
        curr_num = curr_num.split(";");
        curr_num[0] = parseInt(curr_num[0]);
        curr_num[1] = parseInt(curr_num[1]);
    }
    var char = pronounce[curr_num[0]][curr_num[1]];
    var guess_box_div = document.getElementById("kana-guess");
    guess_box_div.innerHTML = char;
    guess_box_div.value = curr_num[0] + ';' + curr_num[1];
    state = 0;
}

// show/hide kanatable for current mode
function kanatable() {
    if (mode_kana == 'h') {
        var kanatable = document.getElementById("kanatable_h");
    } else if (mode_kana == 'k') {
        var kanatable = document.getElementById("kanatable_k");
    } else {
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

// swap learning modes and call switch_page for new mode
function switch_learning_mode() {
    if (table_show == 1) {
        kanatable();
    }
    if (mode_learning == 'kana') {
        mode_learning = 'words';
    } else if (mode_learning == 'words') {
        mode_learning = 'kana';
    }
    switch_page(mode_learning);
}

// setting up page for requested mode.
function switch_page(mode) {
    if (mode == 'kana') {
        document.getElementById("title").innerHTML = 'KANA';
        document.getElementById("guess-box").innerHTML = '<div id="kana-guess" onclick="next_letter(this.value)">あ</div>';
        document.getElementById("kana_helper").innerHTML = '<div id="kana_helper-content" onclick="kanatable()">?</div>';
        document.getElementById("mode_switch").innerHTML = '<span onclick="alphabet_swap()" id="curr_alphabet"></span>';
        document.getElementById("kana_helper_table").innerHTML = hiragana_table + katakana_table + both_kana_table;
        var alphabet_span = document.getElementById("curr_alphabet");
        if (mode_kana == 'h') {
            alphabet_span.innerHTML = 'あ';
        } else if (mode_kana == 'k') {
            alphabet_span.innerHTML = 'ア';
        } else if (mode_kana == 'b') {
            alphabet_span.innerHTML = 'あ/ア';
        }
    } else if (mode == 'words') {
        document.getElementById("title").innerHTML = 'WORDS';
        document.getElementById("guess-box").innerHTML = '<div id="word-guess" onclick="next_word(this.value)">tap to start</div>';
        document.getElementById("mode_switch").innerHTML = '<div onclick="change_unit()">u.' + unit + '</div>';
        document.getElementById("kana_helper").innerHTML = '';

    }
}

function change_unit() {
    if (unit < unit_size(WORDS)) {
        unit++;
    } else {
        unit = 1;
    }
    document.getElementById("mode_switch").innerHTML = '<div onclick="change_unit()">u.' + unit + '</div>';
}

function unit_size(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function word_tap() {
    document.getElementById("word-rus").className = "word-rus-tap";
}

// words logic...
function next_word() {
    if (mode_learning != 'words') {
        return;
    } else {
        size = unit_size(WORDS["unit" + unit]);
        rand_num = Math.floor(Math.random() * size);
        word = Object.keys(WORDS["unit" + unit])[rand_num];
        translation = WORDS["unit" + unit][word];
        document.getElementById("guess-box").innerHTML = '<div id="word-guess"  onclick="next_word(this.value)">' +
            word + '</div><div id="word-rus" class="word-rus" onclick="word_tap()"><span id="unrawel-word">tap to give up ^_,,_^</span><br>' + translation + '</div>';
        return word + ' - ' + translation;
    }

}