var hiragana_table = `
<div id='kanatable_h' style='display:none'>
            <table class="kanatable">
                <tbody>
                    <tr>
                        <td class="seion"><span class='hira'>あ</span></td>
                        <td class="seion"><span class='hira'>い</span></td>
                        <td class="seion"><span class='hira'>う</span></td>
                        <td class="seion"><span class='hira'>え</span></td>
                        <td class="seion"><span class='hira'>お</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">а</td>
                        <td class="romaji">и</td>
                        <td class="romaji">у</td>
                        <td class="romaji">э</td>
                        <td class="romaji">о</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>か</span></td>
                        <td class="seion"><span class='hira'>き</span></td>
                        <td class="seion"><span class='hira'>く</span></td>
                        <td class="seion"><span class='hira'>け</span></td>
                        <td class="seion"><span class='hira'>こ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ка</td>
                        <td class="romaji">ки</td>
                        <td class="romaji">ку</td>
                        <td class="romaji">кэ</td>
                        <td class="romaji">ко</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>さ</span></td>
                        <td class="seion"><span class='hira'>し</span></td>
                        <td class="seion"><span class='hira'>す</span></td>
                        <td class="seion"><span class='hira'>せ</span></td>
                        <td class="seion"><span class='hira'>そ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">са</td>
                        <td class="romaji">си</td>
                        <td class="romaji">су</td>
                        <td class="romaji">сэ</td>
                        <td class="romaji">со</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>た</span></td>
                        <td class="seion"><span class='hira'>ち</span></td>
                        <td class="seion"><span class='hira'>つ</span></td>
                        <td class="seion"><span class='hira'>て</span></td>
                        <td class="seion"><span class='hira'>と</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">та</td>
                        <td class="romaji">ти</td>
                        <td class="romaji">цу</td>
                        <td class="romaji">тэ</td>
                        <td class="romaji">то</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>な</span></td>
                        <td class="seion"><span class='hira'>に</span></td>
                        <td class="seion"><span class='hira'>ぬ</span></td>
                        <td class="seion"><span class='hira'>ね</span></td>
                        <td class="seion"><span class='hira'>の</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">на</td>
                        <td class="romaji">ни</td>
                        <td class="romaji">ну</td>
                        <td class="romaji">нэ</td>
                        <td class="romaji">но</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>は</span></td>
                        <td class="seion"><span class='hira'>ひ</span></td>
                        <td class="seion"><span class='hira'>ふ</span></td>
                        <td class="seion"><span class='hira'>へ</span></td>
                        <td class="seion"><span class='hira'>ほ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ха</td>
                        <td class="romaji">хи</td>
                        <td class="romaji">фу</td>
                        <td class="romaji">хэ</td>
                        <td class="romaji">хо</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>ま</span></td>
                        <td class="seion"><span class='hira'>み</span></td>
                        <td class="seion"><span class='hira'>む</span></td>
                        <td class="seion"><span class='hira'>め</span></td>
                        <td class="seion"><span class='hira'>も</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ма</td>
                        <td class="romaji">ми</td>
                        <td class="romaji">му</td>
                        <td class="romaji">мэ</td>
                        <td class="romaji">мо</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>や</span></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='hira'>ゆ</span></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='hira'>よ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">я</td>
                        <td class="romaji"></td>
                        <td class="romaji">ю</td>
                        <td class="romaji"></td>
                        <td class="romaji">ё</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>ら</span></td>
                        <td class="seion"><span class='hira'>り</span></td>
                        <td class="seion"><span class='hira'>る</span></td>
                        <td class="seion"><span class='hira'>れ</span></td>
                        <td class="seion"><span class='hira'>ろ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ра</td>
                        <td class="romaji">ри</td>
                        <td class="romaji">ру</td>
                        <td class="romaji">рэ</td>
                        <td class="romaji">ро</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>わ</span></td>
                        <td class="seion"></td>
                        <td class="seion"></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='hira'>を</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ва</td>
                        <td class="romaji"></td>
                        <td class="romaji"></td>
                        <td class="romaji"></td>
                        <td class="romaji">во
                        </td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='hira'>ん</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">н</td>
                    </tr>
                </tbody>
            </table>
        </div>
`

var katakana_table = `
        <div id='kanatable_k' style='display:none'>
            <table class="kanatable">
                <tbody>
                    <tr>
                        <td class="seion"><span class='kata'>ア</span></td>
                        <td class="seion"><span class='kata'>イ</span></td>
                        <td class="seion"><span class='kata'>ウ</span></td>
                        <td class="seion"><span class='kata'>エ</span></td>
                        <td class="seion"><span class='kata'>オ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">а</td>
                        <td class="romaji">и</td>
                        <td class="romaji">у</td>
                        <td class="romaji">э</td>
                        <td class="romaji">о</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>カ</span></td>
                        <td class="seion"><span class='kata'>キ</span></td>
                        <td class="seion"><span class='kata'>ク</span></td>
                        <td class="seion"><span class='kata'>ケ</span></td>
                        <td class="seion"><span class='kata'>コ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ка</td>
                        <td class="romaji">ки</td>
                        <td class="romaji">ку</td>
                        <td class="romaji">кэ</td>
                        <td class="romaji">ко</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>サ</span></td>
                        <td class="seion"><span class='kata'>シ</span></td>
                        <td class="seion"><span class='kata'>ス</span></td>
                        <td class="seion"><span class='kata'>セ</span></td>
                        <td class="seion"><span class='kata'>ソ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">са</td>
                        <td class="romaji">си</td>
                        <td class="romaji">су</td>
                        <td class="romaji">сэ</td>
                        <td class="romaji">со</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>タ</span></td>
                        <td class="seion"><span class='kata'>チ</span></td>
                        <td class="seion"><span class='kata'>ツ</span></td>
                        <td class="seion"><span class='kata'>テ</span></td>
                        <td class="seion"><span class='kata'>ト</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">та</td>
                        <td class="romaji">ти</td>
                        <td class="romaji">цу</td>
                        <td class="romaji">тэ</td>
                        <td class="romaji">то</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ナ</span></td>
                        <td class="seion"><span class='kata'>ニ</span></td>
                        <td class="seion"><span class='kata'>ヌ</span></td>
                        <td class="seion"><span class='kata'>ネ</span></td>
                        <td class="seion"><span class='kata'>ノ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">на</td>
                        <td class="romaji">ни</td>
                        <td class="romaji">ну</td>
                        <td class="romaji">нэ</td>
                        <td class="romaji">но</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ハ</span></td>
                        <td class="seion"><span class='kata'>ヒ</span></td>
                        <td class="seion"><span class='kata'>フ</span></td>
                        <td class="seion"><span class='kata'>ヘ</span></td>
                        <td class="seion"><span class='kata'>ホ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ха</td>
                        <td class="romaji">хи</td>
                        <td class="romaji">фу</td>
                        <td class="romaji">хэ</td>
                        <td class="romaji">хо</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>マ</span></td>
                        <td class="seion"><span class='kata'>ミ</span></td>
                        <td class="seion"><span class='kata'>ム</span></td>
                        <td class="seion"><span class='kata'>メ</span></td>
                        <td class="seion"><span class='kata'>モ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ма</td>
                        <td class="romaji">ми</td>
                        <td class="romaji">му</td>
                        <td class="romaji">мэ</td>
                        <td class="romaji">мо</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ヤ</span></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='kata'>ユ</span></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='kata'>ヨ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">я</td>
                        <td class="romaji"></td>
                        <td class="romaji">ю</td>
                        <td class="romaji"></td>
                        <td class="romaji">ё</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ラ</span></td>
                        <td class="seion"><span class='kata'>リ</span></td>
                        <td class="seion"><span class='kata'>ル</span></td>
                        <td class="seion"><span class='kata'>レ</span></td>
                        <td class="seion"><span class='kata'>ロ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ра</td>
                        <td class="romaji">ри</td>
                        <td class="romaji">ру</td>
                        <td class="romaji">рэ</td>
                        <td class="romaji">ро</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ワ</span></td>
                        <td class="seion"></td>
                        <td class="seion"></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='kata'>ヲ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ва</td>
                        <td class="romaji"></td>
                        <td class="romaji"></td>
                        <td class="romaji"></td>
                        <td class="romaji">во
                        </td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ン</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">н</td>
                    </tr>
                </tbody>
            </table>
        </div>
`
var both_kana_table = `
        <div id='kanatable_b' style='display:none'>
            <table class="kanatable">
                <tbody>
                    <tr>
                        <td class="seion"><span class='kata'>ア</span> <span class='hira'>あ</span></td>
                        <td class="seion"><span class='kata'>イ</span> <span class='hira'>い</span></td>
                        <td class="seion"><span class='kata'>ウ</span> <span class='hira'>う</span></td>
                        <td class="seion"><span class='kata'>エ</span> <span class='hira'>え</span></td>
                        <td class="seion"><span class='kata'>オ</span> <span class='hira'>お</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">а</td>
                        <td class="romaji">и</td>
                        <td class="romaji">у</td>
                        <td class="romaji">э</td>
                        <td class="romaji">о</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>カ</span> <span class='hira'>か</span></td>
                        <td class="seion"><span class='kata'>キ</span> <span class='hira'>き</span></td>
                        <td class="seion"><span class='kata'>ク</span> <span class='hira'>く</span></td>
                        <td class="seion"><span class='kata'>ケ</span> <span class='hira'>け</span></td>
                        <td class="seion"><span class='kata'>コ</span> <span class='hira'>こ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ка</td>
                        <td class="romaji">ки</td>
                        <td class="romaji">ку</td>
                        <td class="romaji">кэ</td>
                        <td class="romaji">ко</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>サ</span> <span class='hira'>さ</span></td>
                        <td class="seion"><span class='kata'>シ</span> <span class='hira'>し</span></td>
                        <td class="seion"><span class='kata'>ス</span> <span class='hira'>す</span></td>
                        <td class="seion"><span class='kata'>セ</span> <span class='hira'>せ</span></td>
                        <td class="seion"><span class='kata'>ソ</span> <span class='hira'>そ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">са</td>
                        <td class="romaji">си</td>
                        <td class="romaji">су</td>
                        <td class="romaji">сэ</td>
                        <td class="romaji">со</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>タ</span> <span class='hira'>た</span></td>
                        <td class="seion"><span class='kata'>チ</span> <span class='hira'>ち</span></td>
                        <td class="seion"><span class='kata'>ツ</span> <span class='hira'>つ</span></td>
                        <td class="seion"><span class='kata'>テ</span> <span class='hira'>て</span></td>
                        <td class="seion"><span class='kata'>ト</span> <span class='hira'>と</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">та</td>
                        <td class="romaji">ти</td>
                        <td class="romaji">цу</td>
                        <td class="romaji">тэ</td>
                        <td class="romaji">то</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ナ</span> <span class='hira'>な</span></td>
                        <td class="seion"><span class='kata'>ニ</span> <span class='hira'>に</span></td>
                        <td class="seion"><span class='kata'>ヌ</span> <span class='hira'>ぬ</span></td>
                        <td class="seion"><span class='kata'>ネ</span> <span class='hira'>ね</span></td>
                        <td class="seion"><span class='kata'>ノ</span> <span class='hira'>の</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">на</td>
                        <td class="romaji">ни</td>
                        <td class="romaji">ну</td>
                        <td class="romaji">нэ</td>
                        <td class="romaji">но</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ハ</span> <span class='hira'>は</span></td>
                        <td class="seion"><span class='kata'>ヒ</span> <span class='hira'>ひ</span></td>
                        <td class="seion"><span class='kata'>フ</span> <span class='hira'>ふ</span></td>
                        <td class="seion"><span class='kata'>ヘ</span> <span class='hira'>へ</span></td>
                        <td class="seion"><span class='kata'>ホ</span> <span class='hira'>ほ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ха</td>
                        <td class="romaji">хи</td>
                        <td class="romaji">фу</td>
                        <td class="romaji">хэ</td>
                        <td class="romaji">хо</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>マ</span> <span class='hira'>ま</span></td>
                        <td class="seion"><span class='kata'>ミ</span> <span class='hira'>み</span></td>
                        <td class="seion"><span class='kata'>ム</span> <span class='hira'>む</span></td>
                        <td class="seion"><span class='kata'>メ</span> <span class='hira'>め</span></td>
                        <td class="seion"><span class='kata'>モ</span> <span class='hira'>も</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ма</td>
                        <td class="romaji">ми</td>
                        <td class="romaji">му</td>
                        <td class="romaji">мэ</td>
                        <td class="romaji">мо</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ヤ</span> <span class='hira'>や</span></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='kata'>ユ</span> <span class='hira'>ゆ</span></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='kata'>ヨ</span> <span class='hira'>よ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">я</td>
                        <td class="romaji"></td>
                        <td class="romaji">ю</td>
                        <td class="romaji"></td>
                        <td class="romaji">ё</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ラ</span> <span class='hira'>ら</span></td>
                        <td class="seion"><span class='kata'>リ</span> <span class='hira'>り</span></td>
                        <td class="seion"><span class='kata'>ル</span> <span class='hira'>る</span></td>
                        <td class="seion"><span class='kata'>レ</span> <span class='hira'>れ</span></td>
                        <td class="seion"><span class='kata'>ロ</span> <span class='hira'>ろ</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ра</td>
                        <td class="romaji">ри</td>
                        <td class="romaji">ру</td>
                        <td class="romaji">рэ</td>
                        <td class="romaji">ро</td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ワ</span> <span class='hira'>わ</span></td>
                        <td class="seion"></td>
                        <td class="seion"></td>
                        <td class="seion"></td>
                        <td class="seion"><span class='kata'>ヲ</span> <span class='hira'>を</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">ва</td>
                        <td class="romaji"></td>
                        <td class="romaji"></td>
                        <td class="romaji"></td>
                        <td class="romaji">во
                        </td>
                    </tr>
                    <tr>
                        <td class="seion"><span class='kata'>ン</span> <span class='hira'>ん</span></td>
                    </tr>
                    <tr>
                        <td class="romaji">н</td>
                    </tr>
                </tbody>
            </table>
        </div>
`

WORDS = new Object();
WORDS = {
	"unit1": {
		"word1": "tr1",
		"word2": "tr2",
		"word3": "tr3",
		"word4": "tr4",
		"word5": "tr5",
		"word6": "tr6"
	},
	"unit2": {
		"ord1": "tr1",
		"ord2": "tr2",
		"ord3": "tr3",
		"ord4": "tr4",
		"ord5": "tr5",
		"ord6": "tr6"
	}
}
