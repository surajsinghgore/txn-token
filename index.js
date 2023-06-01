

const dateObj=new Date();
const month=dateObj.getMonth();
const date=dateObj.getDate();
const year=dateObj.getFullYear();
const hours=dateObj.getHours();
const minute=dateObj.getMinutes();
const seconds=dateObj.getSeconds();
// generate radom numbers
const Digit1=Math.floor(Math.random() * 10);
const Digit2=Math.floor(Math.random() * 10);
const Digit3=Math.floor(Math.random() * 10);
const Digit4=Math.floor(Math.random() * 10);

function GenTxnToken(){
const numberGenerate=`${month}${hours}${Digit1}${minute}${Digit3}${seconds}${date}${Digit2}${year}${Digit4}`
return Number(numberGenerate);
}


module.exports=GenTxnToken;