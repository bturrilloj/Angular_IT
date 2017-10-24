letaDatos = [10,20,30]
letnTotal1 ="";

for(let dato in aDatos) {
    nTotal1 += dato
    console.log(dato);
}
// "0"
// "1"
// "2"
console.log(`Total : ${nTotal1}`);
let nTotal2 = 0;

for(let dato of aDatos) {
    nTotal2 += dato
    console.log(dato);
}
// 10
// 20
// 30
console.log(`Total : ${nTotal2}`);