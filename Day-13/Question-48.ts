let laptop_price1 = [1000 , 1300 , 1500];
let laptop_price2 = [1200 , 1400 , 1100];
let laptop_price3 = [...laptop_price1 , ...laptop_price2].sort();

console.log(laptop_price3);