//the input example
const input = 'BEEAKFYDJXUQYHYJIQRYHTYJIQFBQDUYJIIKFUHCQD';
const CHARCODE_A_UC = 65;
//alphabet in UpperCase
const alphabet = new Array(26).fill(null).map((v, i) => String.fromCharCode(CHARCODE_A_UC + i))

//遍历
const decipher = (str) => {
    const input = str.split('');
    for(let i = 1; i<26; i++){
        const result = [];
        input.forEach(letter=>{
            //每个字母+i模26
            result.push(alphabet[(alphabet.indexOf(letter)+i)%26])
        });
        console.log('the result of adding ',i,'is ',result.join(''))
    }
}
decipher(input);

/* output
the result of adding  1 is  CFFBLGZEKYVRZIZKJRSZIUZKJRGCREVZKJJLGVIDRE
the result of adding  2 is  DGGCMHAFLZWSAJALKSTAJVALKSHDSFWALKKMHWJESF
the result of adding  3 is  EHHDNIBGMAXTBKBMLTUBKWBMLTIETGXBMLLNIXKFTG
the result of adding  4 is  FIIEOJCHNBYUCLCNMUVCLXCNMUJFUHYCNMMOJYLGUH
the result of adding  5 is  GJJFPKDIOCZVDMDONVWDMYDONVKGVIZDONNPKZMHVI
the result of adding  6 is  HKKGQLEJPDAWENEPOWXENZEPOWLHWJAEPOOQLANIWJ
the result of adding  7 is  ILLHRMFKQEBXFOFQPXYFOAFQPXMIXKBFQPPRMBOJXK
the result of adding  8 is  JMMISNGLRFCYGPGRQYZGPBGRQYNJYLCGRQQSNCPKYL
the result of adding  9 is  KNNJTOHMSGDZHQHSRZAHQCHSRZOKZMDHSRRTODQLZM
the result of adding  10 is  LOOKUPINTHEAIRITSABIRDITSAPLANEITSSUPERMAN
the result of adding  11 is  MPPLVQJOUIFBJSJUTBCJSEJUTBQMBOFJUTTVQFSNBO
the result of adding  12 is  NQQMWRKPVJGCKTKVUCDKTFKVUCRNCPGKVUUWRGTOCP
the result of adding  13 is  ORRNXSLQWKHDLULWVDELUGLWVDSODQHLWVVXSHUPDQ
the result of adding  14 is  PSSOYTMRXLIEMVMXWEFMVHMXWETPERIMXWWYTIVQER
the result of adding  15 is  QTTPZUNSYMJFNWNYXFGNWINYXFUQFSJNYXXZUJWRFS
the result of adding  16 is  RUUQAVOTZNKGOXOZYGHOXJOZYGVRGTKOZYYAVKXSGT
the result of adding  17 is  SVVRBWPUAOLHPYPAZHIPYKPAZHWSHULPAZZBWLYTHU
the result of adding  18 is  TWWSCXQVBPMIQZQBAIJQZLQBAIXTIVMQBAACXMZUIV
the result of adding  19 is  UXXTDYRWCQNJRARCBJKRAMRCBJYUJWNRCBBDYNAVJW
the result of adding  20 is  VYYUEZSXDROKSBSDCKLSBNSDCKZVKXOSDCCEZOBWKX
the result of adding  21 is  WZZVFATYESPLTCTEDLMTCOTEDLAWLYPTEDDFAPCXLY
the result of adding  22 is  XAAWGBUZFTQMUDUFEMNUDPUFEMBXMZQUFEEGBQDYMZ
the result of adding  23 is  YBBXHCVAGURNVEVGFNOVEQVGFNCYNARVGFFHCREZNA
the result of adding  24 is  ZCCYIDWBHVSOWFWHGOPWFRWHGODZOBSWHGGIDSFAOB
the result of adding  25 is  ADDZJEXCIWTPXGXIHPQXGSXIHPEAPCTXIHHJETGBPC
*/

//the answer
//LOOK UP IN THE AIR ITS A BIRD ITS A PLANE ITS SUPERMAN