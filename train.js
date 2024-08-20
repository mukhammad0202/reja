console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling",  // 0-20
    "togri boshliq tanlang va koproq hato qiling", // 20-30
    "uzingizga ishlashingizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", // 60
]

function maslahatBering(a, callback) {
    if(typeof a !== 'number') callback("insert a number", null);
    else if(a <= 20) callback(null, list[0]); 
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function() {
            callback(null, list[5]);
        }, 5000);
    }
}

console.log('passed here 0');
maslahatBering( 65, (err, data) => {            // agar son orniga sozlar yozilsa "salom" error chiqaradi
    if(err) console.log ('ERROR', err);
    else {
        console.log('Javob:', data);
    }
});
console.log("passed here 1");