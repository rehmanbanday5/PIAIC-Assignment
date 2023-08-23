
//                       Typescript Assignment # 45 :               


//2:
let personName:string=("Eric")
 console.log(`Hello ${personName} would you like some python today`)

//3:
let personname:string=("Eric")
console.log(personname.toLowerCase())
console.log(personname.toUpperCase())
console.log(personName.toLowerCase()+personName.toUpperCase());
  
//4:
let favourite_person:string="Sidhumoosewala";
console.log(`once ${favourite_person} said , we don't use gun for fun`)

//5:
let famous_person:string="Babar Azam";
let message:string=`once ${famous_person} said ,I have my own batting style and don't 
want to be compared with kohli`;
console.log(message);

//6:
let personNameWithWhitespace: string = "\t  \n Rehman \t\n ";
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);

let strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped name:");
console.log(strippedName);

//7 && 8:
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//9:
let favourite_number:number=47;
console.log(`my favourite number is ${favourite_number}`);

//10:
//       My name : Abdul Rehman Banday
//  current date : 8/9/2023

// 11:
let names : string[]=["Ibrar","Hadi","Noor"]
console.log(names);

//12:
let Name:string[]=["Ibrar","Hadi","Noor"]
console.log(`hello ${Name[0]}`)
console.log(`hello ${Name[1]}`)
console.log(`hello ${Name[2]}`)

//13:

let transportation:string[]=["Civic","Prado","Honda 125"]
console.log(`I would like to own a ${transportation[0]}`)
console.log(`I would like to own a ${transportation[1]}`)
console.log(`I would like to own a ${transportation[2]}`)

//14:
let guest_invited:string[]=["Babar","Ahad","Noman"]
console.log(guest_invited);
console.log(`${guest_invited[0]} you are invited to dinner`)
console.log(`${guest_invited[1]} you are invited to dinner`)
console.log(`${guest_invited[2]} you are invited to dinner`)

//15:
console.log(` ${guest_invited[0]} can't make it do dinner`)
let new_guest:string[]=["Ali"]
console.log(` so ${new_guest} you are invited to dinner`)

//16:
console.log("I found a bigger table for dinner!")
guest_invited.unshift("Rizwan");
guest_invited.unshift("Amir");

//17:
console.log("I can invite only two people for dinner")
guest_invited.pop();
console.log(`${guest_invited[2]} sorry you are not invited to dinner`)

//18:
let places:String[]=["Pakistan","UAE","New York","London","Italy"]
console.log(places);

console.log(places.sort());

console.log(places);

console.log(places.sort().reverse());

console.log(places);

places.reverse();
console.log(places);

places.reverse();
console.log(places);

places.sort();
console.log(places);

places.reverse();
console.log(places);


//19:
console.log(` I am inviting ${guest_invited.length} people to dinner`)

//20:
let languages:string[]=['Urdu','Pashto','Punjabi','English']
console.log(languages)

//23:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//24:
let string1='test';
let string2='TEST';

console.log(string1==string2);
console.log(string1.toLowerCase() == string2.toUpperCase());

let num1=10;
let num2=20;

console.log(num1<num2);
console.log(num1<=10);

//25:
let alien_color="Green"
if(alien_color ==="Green"){
    console.log("The player just earned 5 points")
}

 alien_color ="Red"
if(alien_color === "Green"){
    console.log("The player just earned 5 points")
}

//26:
 alien_color = "Yellow"
if(alien_color === "Green"){
    console.log("Player just earned 5 points for shooting the alien")
}
else{
    console.log("The player just earnd 10 points")
}

//27:
 alien_color = "Green"
if(alien_color === "Green"){
    console.log("The player just earned 5 points")
} 

else if(alien_color === "Red"){
    console.log("The player just earned 10 points")
}

else if (alien_color === "Yellow"){
    console.log("Player just earned 15 points")
}

alien_color = "Red"
if(alien_color === "Green"){
    console.log("The player just earned 5 points")
} 

else if(alien_color === "Red"){
    console.log("The player just earned 10 points")
}

else if (alien_color === "Yellow"){
    console.log("Player just earned 15 points")
}



alien_color = "Yellow"
if(alien_color === "Green"){
    console.log("The player just earned 5 points")
} 

else if(alien_color === "Red"){
    console.log("The player just earned 10 points")
}

else if (alien_color === "Yellow"){
    console.log("Player just earned 15 points")
}


//28:
let age = 17;
if(age<2){
    console.log("The person is baby")
}

else if(age>=2 && age<4){
    console.log("The person is toddler")
}

else if(age>=4 && age<13){
    console.log("The person is kid")
}

else if(age>=13 && age<20){
    console.log("The person is teenager")
}

else if(age>=20 && age<65){
    console.log("The person is an adult")
}
else{
    console.log("The person is elder")
}


//29:
let favourite_fruits:string[]=["Mango","Watermelon","Banana"]

if(favourite_fruits.includes("Mango")){
    console.log("I really like Mango")
}


if(favourite_fruits.includes("Grapes")){
    console.log("I really like Grapes")
}


if(favourite_fruits.includes("Watermelon")){
    console.log("I really like Watermelon")
}

if(favourite_fruits.includes("Banana")){
    console.log("I really like Banana")
}

if(favourite_fruits.includes("Apple")){
    console.log("I really like Apple")
}


//30:
let username=['Admin','John','Zack','Brock','James']
if(username.includes(`Admin`)){
 console.log("Hello Admin, would you like to see a status report")
 }
 else{
 console.log("Hello Eric, thankyou for logging in")
 }




//33:
const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOrdinalEnding(number: number): string {
  if (number === 1) {
    return "st";
  } else if (number === 2) {
    return "nd";
  } else if (number === 3) {
    return "rd";
  } else {
    return "th";
  }
}



//34:
let favouritepizza:String[]=["Pepperoni","Fajita","Tikka"]

for(let i=0;i<favouritepizza.length;i++){
console.log(`I like ${favouritepizza[i]} Pizza`)
}

console.log("I really love Pizza!")


//35:
let animals:string[]=["Cat","Dog","Rabbit"]

for(let i=0;i<animals.length;i++){
console.log(animals[i])
}
console.log(`A ${animals[0]} would make a great pet`)
console.log(`A ${animals[1]} would make a great pet`)
console.log(`A ${animals[2]} would make a great pet`)
console.log("any of these animal would make a great pet")



//36 & 37:
function make_shirt(size:string,message:string){
    console.log(`shirt size : ${size}`)
    console.log(`shirt message : ${message}`)
    }
    make_shirt("Large", "I love typescript");
    make_shirt("Medium","Tyescript is awesome");
    


//38 & 39 :
function describe_city(city:string,Country:string){
    console.log(`${city} is in ${Country}`)
    }
    describe_city("Karachi","Pakistan")
    
    
    
    function city_country(City:String,Country:String){
    console.log(`"${City}, ${Country}"`)
    }
    city_country("Rawalpindi","Pakistan");
    city_country("Lahore","Pakistan")
    city_country("Dubai","UAE")
    


//41:

function show_magicians(magicians: string[]): void {
      for (const magician of magicians) {
        console.log(magician);
      }
    }
    
    const magicianNames: string[] = [
      "Harry Houdini",
      "David Copperfield",
      "Teller",
    ];
    
    show_magicians(magicianNames);



//44:
function orderSandwich(items: string[]): void {
      console.log("Sandwich Order Summary:");
      console.log("Bread + " + items.join(" + ") + " + Bread");
    }
    
    
    orderSandwich(["Ham", "Cheese", "Lettuce"]);
    orderSandwich(["Turkey", "Bacon", "Tomato", "Mayonnaise"]);
    orderSandwich(["Tuna", "Cucumber"]);


//45:
interface CarInfo {
      
          manufacturer: string;
          model: string;
          [key: string]: any;
        }
        
        function storeCarInfo(manufacturer: string, model: string, ...extras: [string, any][]): CarInfo {
          const carInfo: CarInfo = {
            manufacturer,
            model,
          };
        
          for (const [key, value] of extras) {
            carInfo[key] = value;
          }
        
          return carInfo;
        }
        
        const Car1 = storeCarInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
        const car2 = storeCarInfo("Honda", "Civic", ["color", "red"], ["optionalFeature", "Sunroof"]);
        
        console.log(Car1);
        console.log(car2);



















































































