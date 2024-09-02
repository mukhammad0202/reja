// console.log("Jack Ma maslahatlari");                              // CallBack function
// const list = [
//     "yaxshi talaba bo'ling",  // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ]

// //  CALLBACK functions
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         // setTimeout(function() {
//           setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log('passed here 0');
// maslahatBering( 65, (err, data) => {            // agar son orniga sozlar yozilsa "salom" error chiqaradi
//     if(err) console.log ('ERROR', err);
//     else {
//         console.log('Javob:', data);
//     }
// });
// console.log("passed here 1");

// console.log("Jack Ma maslahatlari");                              // Async functionlari
// const list = [
//     "yaxshi talaba bo'ling",  // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ]

// ASYNC functions
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list [5]);
//             }, 5000);
//         });
//         // setTimeout(function() {
//         //     return list[5];
//         // }, 5000);
//     }
// }

//  call via then / catch
// console.log('passed here 0');
// maslahatBering(25)
//    .then(data =>{
//     console.log('javob:', data);
// })
//   .catch(err => {
//     console.log("ERROR:", err);
// })
// console.log('passed here 1');

//  call via  async / await                                   // hammasini ketma ket chaqirish
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// =======================================     A-TASK       =================================

// function countLetter(letter, word) {
//         let count = 0;
//     for( let i = 0; i <= word.length; i++) {
//         if(word[i] === letter) {
//             count++
//         }
//     }
//     return count;
// }
// const result = countLetter("e", "engineer");
// console.log(result);

// =============================================  B-TASK ===================

// function countDigits(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(!isNaN(str[i]) && str[i] !== '') {
//             count++;
//         }
//     }
//     return count;
// }
// const result = countDigits("ad2a54y79wet0sfgb9");
// console.log(result);

// =============================================== C-TASK ======================================

// function checkContent(string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   // let tempDic = {};
//   // for (let i=0, l=string1.length-1; i<l; i++){

//   // }
//   const sortedString1 = string1.split("").sort().join("");
//   const sortedString2 = string2.split("").sort().join("");
//   return sortedString1 === sortedString2;
// }
// const result = checkContent("mit15", "i1mt5");
// console.log(result);

// ================================================= D-TASK =============================

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   getCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     const time = this.getCurrentTime();
//     console.log(
//       `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
//     );
//   }

//   sotish(mahsulot, soni) {
//     const time = this.getCurrentTime();
//     if (this[mahsulot] !== undefined && this[mahsulot] >= soni) {
//       this[mahsulot] -= soni;
//       console.log(`Hozir ${time}da ${soni}ta ${mahsulot} sotildi.`);
//     } else {
//       console.log(`Kechirasiz, ${time}da yetarli ${mahsulot} mavjud emas.`);
//     }
//   }

//   qabul(mahsulot, soni) {
//     const time = this.getCurrentTime();
//     if (this[mahsulot] !== undefined) {
//       this[mahsulot] += soni;
//       console.log(`Hozir ${time}da ${soni}ta ${mahsulot} qabul qilindi.`);
//     } else {
//       console.log(`Kechirasiz, ${time}da noto'g'ri mahsulot turi.`);
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// =========================================== E-TASK =================================

// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(getReverse("hello"));

// =========================================== F-TASK =================================

function findDoublers(s) {
  const seen = new Set();

  for (const char of s) {
    if (seen.has(char)) {
      return true;
    }
    seen.add(char);
  }
  return false;
}

console.log(findDoublers("hello"));
