// 1chi masala

// let arr = [2+4+5+9];
// console.log(arr);


// 2chi masala
// function topElement(arr){
//     if(arr.length===0){
//     return"";
//     }
// let maxElement = arr[0];
// for (let i =1; i<arr.length; i++){
// if(arr[i]>maxElement){
// maxElement = arr[i];
// }
// }
// return maxElement;
// }
// let royxat = [2,4,5,7,10];
// console.log(topElement(royxat));


// 3chi masala
// function kichikson(arr){
//     if(arr.length===0){
//     return"";
//     }
// let mixElement = arr[0];
// for (let i =1; i<arr.length; i++){
// if(arr[i]<mixElement){
// mixElement = arr[i];
// }
// }
// return mixElement;
// }
// let sonlar = [2,4,5,7,10];
// let engKichikSon=kichikson(sonlar)
// console.log(engKichikSon);


// 4chi masala

// function manfiy(arr){
// return arr.map((num) => Math.abs(num));
// }
// const a =[-3, -5, -7, -9];
// const b = manfiy(a);
// console.log(b);

// 5chi masala

// function ikkiBarobar (arr){
// for (let i = 0; i<arr.length; i++){
// arr[i] *=2;
// }
// return arr;
// }
// let b =[1,3,5,7,9];
// let c = ikkiBarobar(b);
// console.log(c);

// 6chi masala

// function juftSon(arr){
//     return arr.pop (function(number) {
//         return number % 2 ===0
//     });
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7,];
// let c = juftSon(numbers);
// console.log(c);



// 7chi masala

// function toqSon(arr){
//     return arr.map (function(number) {
//         return number % 2 !==0
//     });
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7,];
// let c = toqSon(numbers);
// console.log(c);

// 8chi masala

// function borElement(a,b){
// return a.includes(b)
// }
// const a =[1,2,3,4,5,6,7]
// const b = 4;
// console.log(borElement(a,b));


// 9chi masala

// function teskariSon(arr){
// return arr.reverse();
// } 
// let a = [1,2,3,4,5,6,7,8,9,10]
// console.log(teskariSon(a));


// 10chi masala


// function kotaQiymat(arr){
//     if(arr.length ===0){
//     return"";
//     }
//     let kotta =arr[0];
//     for(let i =1; i<arr.length; i++)
//     {
//     if (arr[i]>kotta){
//     kotta=arr[i]
//     }
//     }
// return kotta;
// } 
// let a = [1,2,3,4,5,6,9,12];
// console.log(kotaQiymat(a));


// 11chi masala

// function oshirish(arr){
// return arr.map(b=>b+1);
// }
// let a = [1,2,3,4,5,6,7]
// console.log(oshirish(a));

// 12 chi masala

// function indeksTopish(arr,elemet){
// return arr.indexOf(elemet);
// }
// let array = [10,20,30,40,50];
// let elemet =30;
// let indeks = indeksTopish(array,elemet);
// console.log(`${indeks}`);

// 13chi masala

// function counts(arr,val){
// let count = 0;
// arr.forEach (element=>{if(element===val){count++
// }
// });
// return count;
// }
// const a =[1,2,3,4,1,2,1]
// const b = 1;
// const g = counts(a,b);
// console.log(`massivdagi ${b} qiymati ${g} paydo boldi`);


// 14chi masala

// function yangiMassiv(){
// let massiv = [];
// for(let i = 0; i<10; i++){
// let randomNuber=Math.floor(Math.random()*101);
// massiv.push(randomNuber)
// }
// return massiv;
// }
// let yangi=yangiMassiv()
// console.log(yangi);


// 15chi masala

// function manfiyMassiv(){
// let massiv = [];
// let elementSoni = Math.floor(Math.random()*10)+1;
// for(let i = 0; i<elementSoni; i++){
//     let tasodifiy =Math.floor(Math.random()*-100);
// massiv.push(tasodifiy)
// }
// return massiv;
// }
// let yangiMassiv = manfiyMassiv()
// console.log(yangiMassiv);

// 16 chi masala

// function satrAylantirish(massiv){
// return massiv.join(",");
// }
// let testMassiv = ["agr1","agr2","agr3"];
// let satr = satrAylantirish(testMassiv);
// console.log(satr);

// 17chi masala

// function kvadrat(sonlar){
// return sonlar.map (x => x * 2)
// }
// console.log(kvadrat([1,2,3,4,5]));

// 18 chi masala

// function nusxa(arr){
// return arr.upshift()
// }

// let a = [1,2,3,4,5];
// let nusxalar = nusxa (a);
// console.log(nusxalar);


// 19 chi masala

// function ortaQiymat(elements){
// let summa = 0;
// for (let i = 0; i<elements.length; i++){
// summa +=elements[i]
// }
// return summa / elements.length;
// }
// let  a = [4,7,12,5,2];
// let ortacha = ortaQiymat(a);
// console.log(ortacha);
