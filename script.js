// YAS HESAPLAMASI

var birthday = new Date('10/04/1984')

var ageDifMs = Date.now() - birthday.getTime();

console.log(ageDifMs); //milisecond cinsinden yas

var ageDate = new Date(ageDifMs);

console.log(ageDate);

console.log(ageDate.getFullYear() - 1970);

/*
console.log(Date.now());

console.log(birthday.getTime()); milisecond cinsinden yazar

console.log(Date.now());  Date.now metodu 1970 den simdiki tarihe kadar gecen süreyi milisecond cinsinden gösterir.

*/



// Her yil mayis ayinin 2.haftasi pazar günü kutlanan anneler günü 2021 yilinda ne zaman kutlanacaktir ?

var annelerGünü = new Date();
annelerGünü.setHours(0,0,0,0);
annelerGünü.setFullYear(2021);
annelerGünü.setDate(1);
annelerGünü.setMonth(4);

while(annelerGünü.getDay() != 0){
  annelerGünü.setDate(annelerGünü.getDate()+1)
}

annelerGünü.setDate(annelerGünü.getDate()+7);
console.log('2021 yilinda anneler günü:'+annelerGünü);




