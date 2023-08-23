//                       Typescript Assignment # 45 :               
//2:
var personName = ("Eric");
console.log("Hello ".concat(personName, " would you like some python today"));
//3:
var personname = ("Eric");
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personName.toLowerCase() + personName.toUpperCase());
//4:
var favourite_person = "Sidhumoosewala";
console.log("once ".concat(favourite_person, " said , we don't use gun for fun"));
//5:
var famous_person = "Babar Azam";
var message = "once ".concat(famous_person, " said ,I have my own batting style and don't \nwant to be compared with kohli");
console.log(message);
//6:
var personNameWithWhitespace = "\t  \n Rehman \t\n ";
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped name:");
console.log(strippedName);
//7 && 8:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//9:
var favourite_number = 47;
console.log("my favourite number is ".concat(favourite_number));
//10:
//       My name : Abdul Rehman Banday
//  current date : 8/9/2023
// 11:
var names = ["Ibrar", "Hadi", "Noor"];
console.log(names);
//12:
var Name = ["Ibrar", "Hadi", "Noor"];
console.log("hello ".concat(Name[0]));
console.log("hello ".concat(Name[1]));
console.log("hello ".concat(Name[2]));
//13:
var transportation = ["Civic", "Prado", "Honda 125"];
console.log("I would like to own a ".concat(transportation[0]));
console.log("I would like to own a ".concat(transportation[1]));
console.log("I would like to own a ".concat(transportation[2]));
//14:
var guest_invited = ["Babar", "Ahad", "Noman"];
console.log(guest_invited);
console.log("".concat(guest_invited[0], " you are invited to dinner"));
console.log("".concat(guest_invited[1], " you are invited to dinner"));
console.log("".concat(guest_invited[2], " you are invited to dinner"));
//15:
console.log(" ".concat(guest_invited[0], " can't make it do dinner"));
var new_guest = ["Ali"];
console.log(" so ".concat(new_guest, " you are invited to dinner"));
//16:
console.log("I found a bigger table for dinner!");
guest_invited.unshift("Rizwan");
guest_invited.unshift("Amir");
//17:
console.log("I can invite only two people for dinner");
guest_invited.pop();
console.log("".concat(guest_invited[2], " sorry you are not invited to dinner"));
//18:
var places = ["Pakistan", "UAE", "New York", "London", "Italy"];
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
console.log(" I am inviting ".concat(guest_invited.length, " people to dinner"));
//20:
var languages = ['Urdu', 'Pashto', 'Punjabi', 'English'];
console.log(languages);
//23:
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//24:
var string1 = 'test';
var string2 = 'TEST';
console.log(string1 == string2);
console.log(string1.toLowerCase() == string2.toUpperCase());
var num1 = 10;
var num2 = 20;
console.log(num1 < num2);
console.log(num1 <= 10);
//25:
var alien_color = "Green";
if (alien_color === "Green") {
    console.log("The player just earned 5 points");
}
alien_color = "Red";
if (alien_color === "Green") {
    console.log("The player just earned 5 points");
}
//26:
alien_color = "Yellow";
if (alien_color === "Green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("The player just earnd 10 points");
}
//27:
alien_color = "Green";
if (alien_color === "Green") {
    console.log("The player just earned 5 points");
}
else if (alien_color === "Red") {
    console.log("The player just earned 10 points");
}
else if (alien_color === "Yellow") {
    console.log("Player just earned 15 points");
}
alien_color = "Red";
if (alien_color === "Green") {
    console.log("The player just earned 5 points");
}
else if (alien_color === "Red") {
    console.log("The player just earned 10 points");
}
else if (alien_color === "Yellow") {
    console.log("Player just earned 15 points");
}
alien_color = "Yellow";
if (alien_color === "Green") {
    console.log("The player just earned 5 points");
}
else if (alien_color === "Red") {
    console.log("The player just earned 10 points");
}
else if (alien_color === "Yellow") {
    console.log("Player just earned 15 points");
}
//28:
var age = 17;
if (age < 2) {
    console.log("The person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is elder");
}
//29:
var favourite_fruits = ["Mango", "Watermelon", "Banana"];
if (favourite_fruits.includes("Mango")) {
    console.log("I really like Mango");
}
if (favourite_fruits.includes("Grapes")) {
    console.log("I really like Grapes");
}
if (favourite_fruits.includes("Watermelon")) {
    console.log("I really like Watermelon");
}
if (favourite_fruits.includes("Banana")) {
    console.log("I really like Banana");
}
if (favourite_fruits.includes("Apple")) {
    console.log("I really like Apple");
}
//30:
var username = ['Admin', 'John', 'Zack', 'Brock', 'James'];
if (username.includes("Admin")) {
    console.log("Hello Admin, would you like to see a status report");
}
else {
    console.log("Hello Eric, thankyou for logging in");
}
//33:
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getOrdinalEnding(number) {
    if (number === 1) {
        return "st";
    }
    else if (number === 2) {
        return "nd";
    }
    else if (number === 3) {
        return "rd";
    }
    else {
        return "th";
    }
}
//34:
var favouritepizza = ["Pepperoni", "Fajita", "Tikka"];
for (var i = 0; i < favouritepizza.length; i++) {
    console.log("I like ".concat(favouritepizza[i], " Pizza"));
}
console.log("I really love Pizza!");
//35:
var animals = ["Cat", "Dog", "Rabbit"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("A ".concat(animals[0], " would make a great pet"));
console.log("A ".concat(animals[1], " would make a great pet"));
console.log("A ".concat(animals[2], " would make a great pet"));
console.log("any of these animal would make a great pet");
//36 & 37:
function make_shirt(size, message) {
    console.log("shirt size : ".concat(size));
    console.log("shirt message : ".concat(message));
}
make_shirt("Large", "I love typescript");
make_shirt("Medium", "Tyescript is awesome");
//38 & 39 :
function describe_city(city, Country) {
    console.log("".concat(city, " is in ").concat(Country));
}
describe_city("Karachi", "Pakistan");
function city_country(City, Country) {
    console.log("\"".concat(City, ", ").concat(Country, "\""));
}
city_country("Rawalpindi", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("Dubai", "UAE");
//41:
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicianNames = [
    "Harry Houdini",
    "David Copperfield",
    "Teller",
];
show_magicians(magicianNames);
//44:
function orderSandwich(items) {
    console.log("Sandwich Order Summary:");
    console.log("Bread + " + items.join(" + ") + " + Bread");
}
orderSandwich(["Ham", "Cheese", "Lettuce"]);
orderSandwich(["Turkey", "Bacon", "Tomato", "Mayonnaise"]);
orderSandwich(["Tuna", "Cucumber"]);
function storeCarInfo(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var _b = extras_1[_a], key = _b[0], value = _b[1];
        carInfo[key] = value;
    }
    return carInfo;
}
var Car1 = storeCarInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
var car2 = storeCarInfo("Honda", "Civic", ["color", "red"], ["optionalFeature", "Sunroof"]);
console.log(Car1);
console.log(car2);
