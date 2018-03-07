var alphabet = [
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

var state = 1;

function next(curr_num) {
    if (state == 1) {
        hui(curr_num);
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
    rand_num[0] = Math.floor(Math.random() * alphabet.length);
    rand_num[1] = Math.floor(Math.random() * alphabet[rand_num[0]].length);
    var char = alphabet[rand_num[0]][rand_num[1]];
    var guess_box_div = document.getElementById("guess-box");
    guess_box_div.innerHTML = char;
    guess_box_div.value = rand_num[0] + ';' + rand_num[1];
    state = 1;
}

function hui(curr_num) {
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
    var kanatable = document.getElementById("kanatable");
    var guess_box_div = document.getElementById("guess-box");

    if (kanatable.style.display == 'block') {
        kanatable.style.display = 'none';
        guess_box_div.style.display = 'block';
    } else {
        kanatable.style.display = 'block';
        guess_box_div.style.display = 'none';
    }
}
////////function kanatable() {
////////    var kanatable = document.getElementById("kanatable");
////////    var guess_box_div = document.getElementById("guess-box");

////////    if (kanatable.style.visibility == 'hidden') {
////////	kanatable.style.visibility = 'visible';
////////	guess_box_div.style.visibility = 'hidden';
////////    } else {
////////	kanatable.style.visibility = 'hidden';
////////	guess_box_div.style.visibility = 'visible';
////////    }
////////}
