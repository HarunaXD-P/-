const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//加密解密矩阵
const encodeMatrix = [[11,8],[3,7]];
const decodeMatrix = [[7,18],[23,11]];
const CHARCODE_A_LC = 97;
const alphabet = new Array(26).fill(null).map((v, i) => String.fromCharCode(CHARCODE_A_LC + i));
//处理一个两字母的向量
const handleVector = (str,mode) =>{
    if(str.length!=2){
        throw new Error('字符串分割长度不为2');
    }
    const result = [];
    const matrix = mode ==='e'?encodeMatrix:decodeMatrix;
    const char1 = alphabet.indexOf(str.charAt(0));
    const char2 = alphabet.indexOf(str.charAt(1));
    //2*2矩阵乘法
    result.push((char1*matrix[0][0]+char2*matrix[1][0])%26);
    result.push((char1*matrix[0][1]+char2*matrix[1][1])%26);
    return result.map(pos=>alphabet[pos]).join('');
}
//把输入字符串补齐、分割为2字母字符串数组、依次分割处理再合并为字符串
const encrypt = (str) => {
    if(str.length%2){
        str+='x';
    }
    let strArray = str.split('');
    strArray = strArray.map((item,index)=>index%2?null:item+strArray[index+1]).filter(Boolean).map(vector=>handleVector(vector,'e'));
    return strArray.join('');
    
}
const decrypt = (str) => {
    if(str.length%2){
        throw new Error('字符串长度错误');
    }
    let strArray = str.split('');
    strArray = strArray.map((item,index)=>index%2?null:item+strArray[index+1]).filter(Boolean).map(vector=>handleVector(vector,'d'));
    return strArray.join('');
}
//输入需要操作的字符串+ 空格+ 'e'/'d' 进行加密解密操作
rl.on('line', function(input){
    try{
        const [str,option] = input.split(' ');
        console.log(option === 'e' ? encrypt(str) : decrypt(str))
    }catch(e){
        console.error(e);
    }
})

/*
input:
july e
delw d
abcd e

output:
delw
july
dhfl
*/
