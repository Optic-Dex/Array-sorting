  
// Mit array 
 let myArray = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]
 //Jeg sortere mit array
 myArray.sort()
 //og konventere det til en string som jeg printer i console
 console.table("Stigende Alfabetisk Sortering : " + myArray.toString())

//nu reverse sortere jeg mit array
 myArray.reverse()

 //og konventere det til en string som jeg printer i console
 console.table("Faldende Alfabetisk Sortering : " + myArray.toString())

 //her skaber jeg et tomt array 
  let carNameLenght = []

//her går jeg myArray igennem og får lenght på hver element og pusher det til mit tomme array
 myArray.forEach(car => {
     carNameLenght.push(car.length) 
      
 });

 //og laver så en nummerisk sortering
 carNameLenght.sort(function (a ,b) {
     return a - b
 })

//  og printer det som en string
 console.table("Array med længden på elementerne i myArray sorteret : " + carNameLenght.toString())

//nu reverse sortere jeg det 
 carNameLenght.sort(function (a ,b) {
    return b - a
})
//  og printer det som en string
console.table("Array med længden på elementerne i myArray reverse sorteret : " + carNameLenght.toString())

//nu random sortere jeg myArray 
myArray.sort(function () {return 0,5 - Math.random ()})

//og printer det som en string
console.table("myArray random sorteret : " + myArray.toString())


// laver et array med objekter
const cars = [
    {Navn: "Mercedes", Årgang: 2010, Døre: 5, Personer: 5, Pris: 105000},
    {Navn: "Volvo", Årgang: 2016, Døre: 5, Personer: 7, Pris: 405000},
    {Navn: "BMW", Årgang: 2014, Døre: 3, Personer: 2, Pris: 375000},
    {Navn: "Fiat", Årgang: 2011, Døre: 3, Personer: 5, Pris: 60000},
    {Navn: "Toyota", Årgang: 2016, Døre: 7, Personer: 9, Pris: 450000},
    {Navn: "Citroen", Årgang: 1999, Døre: 5, Personer: 5, Pris: 12000},
    {Navn: "Tesla", Årgang: 2019, Døre: 5, Personer: 5, Pris: 675000},
    {Navn: "Opel", Årgang: 2010, Døre: 3, Personer: 5, Pris: 45000}
]


//Sorter efter navne i alfabetisk rækkefølge
cars.sort(function(a, b) {
    if(a.Navn < b.Navn) { return -1; }
    if(a.Navn > b.Navn) { return 1; }
    return 0;
 });
 console.table(cars)
 console.table("Navne Stigende")

 //sortere nu mit array med biler efter årgang Faldende
cars.sort(function (a, b) {return b.Årgang - a.Årgang});
console.table(cars)
console.table("Årgang Faldende")

 //sortere nu mit array med biler efter Døre Stigende 
 cars.sort(function (a, b) {return a.Døre - b.Døre});
 console.table(cars)
 console.table("Døre Stigende")

 //sortere nu mit array med biler efter Personer Faldende
 cars.sort(function (a, b) {return b.Personer - a.Personer});
 console.table(cars)
 console.table("Personer Faldende")


  //sortere nu mit array med biler efter Pris Stigende
  cars.sort(function (a, b) {return a.Pris - b.Pris});
  console.table(cars)
  console.table("Pris Stigende")
   //sortere nu mit array med biler efter Pris Faldende
   cars.sort(function (a, b) {return b.Pris - a.Pris});
  console.table(cars)
  console.table("Pris Faldende")