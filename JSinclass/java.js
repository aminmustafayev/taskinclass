// let num=Number(prompt(`reqem daxil edin`))
// let qaliq=num%60
// let minit= parseInt(num/60)
// console.log(`${qaliq} deqiqe ${minit} saniye`);

// Task 2:
// Daxil edilən temperaturun dəyərini özündə saxlayan bir variable yaradın və bu temperaturun necə selsi olduğunu tapan proqram yazın.
// Düstur= 5/9 * (temperatur-32)


// let temperatur=prompt("tempi daxil et")
// let celsi=parseInt(5/9 * (temperatur-32))
// console.log(`${celsi}celsi`)


// Task 3:
// Tələbənin 5 fənn üzrə balını daxil edib, ortalamasını öyrənə biləcəyi proqram yazın.

// let firtlesson=parseInt(prompt("birinci bali daxil edin"))
// let secondlesson=parseInt(prompt("ikinci bali daxil edin"))
// let thereelesson=parseInt(prompt("ucuncu bali dacil edin"))
// let fourlesson=parseInt(prompt("dorduncu bali daxil edin"))
// let fivelesson=parseInt(prompt("besinci bali daxil edin"))
// let ortalama=parseInt(firtlesson+secondlesson+thereelesson+fourlesson+fivelesson)/5
// console .log (`${ortalama}ballar`)


// Task 4:

// Daxil edilən doğum ilinə görə yaşı hesablayn proqram yazın.

// let year=parseInt(prompt("ilinizi daxil edin"))
// let halhazirkiil=2024
// let yas=2024-year
// console.log(`${yas}yas`)

// Task 5:

// Ədədin faizini tapan proqram yazın.

// let num1=parseInt(prompt("reqem 1 daxil et"))
// let num2=parseInt(prompt("reqem 2 daxil et"))
// let faiz=parseInt((num2*num1)/100)
// console.log(`${faiz}faiz`)

// Task 6:

// Daxil edilən katetlərə görə düzbucaqlı üçbucağın sahəsini tapan proqram yazın.

// let sahe=parseInt(prompt("ilk reqemi qeyd et"))
// let sahe2=parseInt(prompt("ikinci reqemi daxil et"))
// let cemi=parseInt((sahe*sahe2)/2)
// console.log(`${cemi}sahesi`)


// Task 7:

// İstifadəçidən alınan kredit miqdarı,faiz dərəcəsi və kredit müddəti əsasında aylar üzrə nə qədər ödəniş etməli olduğunu tapan proqram yazın.

// let credit=parseInt(prompt("kredit miqdari"))
// let creditfaiz=parseInt(prompt("faizi daxil et"))
// let ayliqodenis=parseInt(prompt("ayliq dusen mebleg"))
// let end=(credit+(credit*creditfaiz/100))/ayliqodenis
// console.log(`${end}ayliq`)

// Task 8:

// İstifadəçidən ad və soyadını alaraq onu salamlayan mətin yaradın.

// let firstname=prompt("istifadecinin adi")
// let surnema=prompt("istifadecini soyadi")
// console.log(`${firstname} ${surnema} salam aleykum`)


// Task 9:

// Kvadratın perimetr və sahəsini hesablayan proqram yazın.
// let bucaq=parseInt(prompt("bucaq daxil et"))
// let bucaq2=parseInt(prompt("bucaq daxil et"))
// let bucaq3=parseInt(prompt("bucaq daxil et"))
// let bucaq4=parseInt(prompt("bucaq daxil et"))
// let perimetr=parseInt(bucaq*4)
// let sahe=parseInt(bucaq*bucaq)
// console.log(`${perimetr}-perimetr ${sahe} sahe `)


// Task 10:




// Task 1:
// Daxil edilən yaşa görə istifadəçinin pensiya yaşına çatıb-çatmadığını tapan proqram yazın.
// Ədəd müsbət və 125-dən balaca olmalıdır.

// let age=Number(prompt("Yasinizi daxil edin"))
// if (age>=65){
//     alert("siz pensiya yasina catmisiniz")
// }
// else{
//     alert("sizpensiya yasina catmamisiniz")
// }
// Task 2:

// Daxil edilən 3 rəqəmə əsasən üçbucağın tərəfinə görə hansı növü olduğunu müəyyənləşdirən proqram yazın.Hər üç rəqəm müsbət olmalıdır.
// let num1=Number(prompt("birinci teref"))
// let num2=Number(prompt("ikinci teref"))
// let num3=Number(prompt("ucuncu teref"))
// if (num1,num2,num3>0){
//     if (num1==num2 && num2==num3 && num1==num3){
//         alert("Beraber terefli")
//     }
//     else if(num1==num2 || num2==num3 || num1==num3){
//         alert("beraber yanli")
//     }
// else { alert("Muxtelif Terefli")}
// }
// else{
//     alert("eded menfidir"
//     )
// }
// Task 3:

// Daxil edilən rəqəmin cüt yoxsa tək olmasını tapın.Ədəd müsbət olmadır.

// Task 4:

// Daxil edilən 1-12 arasındakı müsbət rəqəmlərdən hər hansı birinə uyğun olan ayın adını yazan proqram yazın. Məsələn 2 daxil edilsən Fevral yazılmalıdır.(switch ilə yazılmalıdır.) 1-dən kiçik və 12-dən böyük rəqəm daxil edildikdən consolda  "Zəhmət olmasa sadəcı 1-12 aralığında ədəd daxil edin" yazılsın.
// let num=Number(prompt("enter your number"))
// switch (num) {
//     case 1:
//     console.log("Yanvar")
//         break;
//         case 2:
//     console.log("Fevral")
//         break;
//         case 3:
//     console.log("Mart")
//         break;
//         case 4:
//     console.log("Aprel")
//         break;
//         case 5:
//     console.log("May")
//         break;
//         case 6:
//     console.log("Iyun")
//         break;
//         case 7:
//     console.log("Iyul")
//         break;
//         case 8:
//     console.log("Avqust")
//         break;
//         case 9:
//     console.log("Sentyabr")
//         break;
//         case 11:
//     console.log("Oktyabr")
//         break;
//         case 12:
//     console.log("Dekabr")
//         break;

//     default:
//         break;
// }

// Task 5:

// Daxil edilən müsbət ədədin 3 və 5 ədədinə eyni anda bölünüb-bölünmədiyini tapan proqram yazın.
// let x=Number(prompt("enter your number"));
// if (x%3==0 && x%5==0){
//     console.log("bolunur")

// }
// else {
//     console.log("bolunmur")
// }


// Task 6:

// Daxil edilən müsbət ədədin 2-yə tam bölünüb-bölünmədiyini tapan proqram yazın. Əgər tam bölünürsə, consolda bölündü yazılsın,tam bölünmürsə qalıq hesablanıb yazılsın.
// let x=Number(prompt("enter your number"));
// if (x%2==0){
//     console.log("bolunur")
// }
// else{
//     let result=x%2
//     console.log(result)
// }

// Task 7:

// Daxil edilən 2 ədədin hasilinin müsbət yoxsa mənfi ədəd olmasını göstərən funksiya yazın.
// let x=Number(prompt("enter your number"));
// let y=Number(prompt("enter your number"));
// let result=x*y>0

// if (result){
//     console.log("musbet")
// }
// else{
//    console.log("menfi");
// }

// Task 8:

// Daxil edilən müsbət ədədin 1-100 arasında olub-olmadığını tapan proqram yazın.

// Task 9:

// Daxil edilən 3 müsbət ədədin ən böyüyünü tapan proqram yazın.

// Task 10:

// Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.


// Task 11:

// İstifadəçi yaşını daxil edir.Yaş 18-dən azdırsa "Yeniyetmə", 18-64 yaşdadırsa "Yetkin", 65 və daha yuxarıdırsa "Yaşlı" kimi çıxış edən proqram yazın.Ədəd müsbət olmalıdır.


// Task 11:

// Daxil edilən saata uyğun "Sabahınız xeyir", "Günortanız xeyir", "Axşamınız xeyir" yazan proqram yazın. Ədəd müsbət və 0-24 arasında olmalıdır.


// Task 12:

// Daxil edilən x və y ədədlərinin aşağıdakı şərtlərinə görə hesablamasını edən proqram yazın. Bu şərtlərdən başqası daxil edilərsə consolda "Sadəcə tələb olunan şərtləri daxil edin yazılsın."

// Əgər x>0 və y<0 isə 4x+2y+4 ifadəsini hesablayın.
// Əgər x>0 və y=0 isə 2x-y+3 ifadəsini hesablayın.
// Əgər x<0 və y>0 isə 3x+4y+3 ifadəsini hesablayın.




// Task 13:

// İstifadəçidən 3 dəyər alın bunlardan ikisi rəqəm, biri isə riyazi əməl olsun.Riyazi əmələ görə rəqəmlər üzərində əməliyyat aparsın. Riyazi əməllər toplama,çıxma,vurma və bölmə olacaq.Bu dörd əməldən başqası daxil edilərsə console "Zəhmət olmasa düzgün əməl daxil edin yazılsın." Taskı switch-case ilə yazın.


// Task 14:

//  Kişik bir lotoreya oyunu yazın. Bu oyunda komputer bir random rəqəm yaradacaq, istifadəçidən isə promptla bir rəqəm alınacaq. Şərtlər belədir:
// 1. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədəd üst-üstə düşərsə alertlə " Siz 1000 manat qazandınız yazın".
// 2. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədədin hər iki mərtəbəsi uyğun gələrsə, amma mərtəbələrin yeri dəyişikdirsə alertlə " Siz 500 manat qazandınız" yazın. Yəni random ədəd 45-dir amma istifadəçi 54 yazıbsa o 500 manat qazanır.
// 3. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədədin bir mərtəbəsi uyğun gələrsə,alertlə " Siz 100 manat qazandınız" yazın. Yəni random ədəd 32-dir istifadəçi 42 yazıbsa o 100 manat qazanır.
// 4. Bu hallardan heç biri deyilsə, alertlə "Bir daha sınayın" yazın.







// Task 1:

// Öz adınızı ekranda 5 dəfə çap edən proqram yazın.
// let x="Amin"
// for ( i = 0; i < 5; i++) {
//     console.log(x);
    
// }


// Task 2:

// Ədədləri 20dən geriyə yazdırın.
// for(let i=20;i>0;i--){
//     console.log(i);
// }

// Task 3:
// ["Bakı","Gəncə","Sumqayıt"]

// // arrayin elementlərini consolda göstərin.(hem for,hem for of istifadə edin)
// let city=["Bakı","Gəncə","Sumqayıt"]
// let text=""
// for (let index = 0; index < city.length; index++) {   
//     console.log(city)
//     break
// }
// 2
// let city=["Bakı","Gəncə","Sumqayıt"]
// let text=""
// for (const x of city) {
//     text+=x+"/br"
//     console.log(city)
//     break
    
// }

// Task 4:

// ["Bakı","Gəncə","Sumqayıt"]

// arrayin elementlərinin indeksini consolda göstərin.(hem for,hem for in istifadə edin)

//  let city=["Bakı","Gəncə","Sumqayıt"]
//  let text=""
//  for (let index = 0; index < city.length; index++) {
//     console.log(index);
//  }
// let city=["Bakı","Gəncə","Sumqayıt"]
// let text=""
// for (const x of city) {
//   console.log(x)
// }
// for (const key in city) {
//    console.log(key)
// }


// Task 5:
// [1,4,5,6,7,8,34,56,98]

// arrayin elementlərinin cəmini tapın.
// let x=[1,4,5,6,7,8,34,56,98]
// cont=0
// for (let i= 0; i< x.length; i++) {
//     cont=cont+x[i]
//     console.log(cont);
// }


// Task 6:

// 1-dən 50-yə qədər ədədləri consolda yazdırın.

// for (let i = 0; i < 51; i++) {
//     console.log(i) 
// }

// Task 7:

// 1-dən 50-yə qədər ədədlər 3-3 artıraraq yazdırı.

// for (let i = 0; i < 51; i+=3) {
//     console.log(i) 
// }
// Task 8:

// 1-dən 50-yə qədər cüt ədədləri yazdırın.
// for (let i = 0; i < 51; i++) {
//     if (i%2===0) {
//         console.log(i);
//     }
// }

// Task 9:

// 1-dən 50-yə qədər 8-ə bölünən ədədləri yazdırın.

// for (let i = 0; i < 50; i++) {
//    if(i%8===0){
//     console.log(i);
//    }
    
// }

// Task 10:

// 1dən 100ə qədər rəqəmlərin cəmini tapan proqram yazın.
// sum=0
// for (let i = 0; i < 101; i++) {
//   sum+=i  
// }
// console.log(sum)

// Task 11:

// Daxil edilən ədədin faktorialını tapan proqram yazın.

// let num=Number(prompt("Eded daxil edin"))
// let hasil=1
// for(let i=num;i>0;i--){
//     hasil*=i
// }
// console.log(hasil)

// Task 12:

// 1-100 arasında rəqəmlərdən 3-ə bölünənlər üçün konsola Fizz, 5-ə bölünənlər üçün Buzz, hər ikisinə bölünənlər üçünsə FizzBuzz yazdırın.
// for (let i = 1; i <=100; i++) {
// if(i%15==0){
// console.log(`${i}"FizzBuzz"`)
// }
// else if((i%5==0)){
//     console.log(`${i}"Buzz"`)
// }else if(i%3==0){
    
//     console.log(`${i}"Fizz"`)
    
// }
// }

// Task 13:

// 3 rəqəmli Armstronq nömrələrini tapan JavaScript proqramı yazın.
// Qeyd: Üçrəqəmli Armstronq ədədi rəqəmlərinin kublarının cəmi həmin ədədin özünə bərabər olan tam ədəddir. Məsələn, 3**3 + 7**3 + 1**3 = 371, buna görə də 371 Armstronq nömrəsidir.
let num=(prompt("enter your number"))
let sum=0
for (let i = 0; i < num.length; i++) {
    sum+=num[i]**3
}
if(num==sum){
    console.log("YES");
}else{
    console.log('NO');
}


// Task 14:

// Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın. Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.

// Task 15:
// Bir array daxilindəki ədədlərin hasili əgər cüt ədəddirsə, həmin ədədlərin cəmini consolda göstərin. Yox əgər təkdirsə, consolda sıfır göstərin.


// Task 16:
// Bir arraydə bütün ədədlər cütdürsə consoleda true, təkdirsə false yazın.

// Task 17:
// Daxil edilən arraydə ədədlərin ədədi ortasını tapın. Tam ədədə yuvarlaqlaşdırın.

// Task 18:

// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərf o sözün içində varsa consoleda true, yoxdursa false yazılsın.


// Task: 19
// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərfin o sözün içində neçə dəfə olduğunu consoleda yazdırın.

// Task: 20

// Bir dəyişən təyin edin.Bu dəyişən sizin sözünüz olacaq. O sözün içində neçə sait olduğunu consoleda yazdırın

