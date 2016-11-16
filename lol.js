var hero = "Deadpool"
var gender = "Female"
var age = "42"
var weapon = "Boomstick McBoom"
var pronoun = null
var xp = null

if (gender == "male"){
	pronoun = "his";
} else if (gender == "Female"){
	pronoun = "her";
} else{
	pronoun = "their";
}

if (age < 18){
	xp = "is just beginning";
}
else if (age > 21 && age < 40){
	xp = "has seen a few battles";
}
else (age > 40);{
	xp = "has lived through many epic battles";
}
console.log(hero + " is our lovable hero, who " + xp + " with " + pronoun +" trusty " + weapon);

//1 Fish 2 Fish
var count;
var animal = "cheetah";
function animalHouse (Ani1, Ani2){
	if (Ani1 + Ani2){
		count = 3;
		console.log(count);
	}
}
animalHouse(1237846123894612, 6785123465129)

if (count > 2){
	console.log("We have too many " + animal + "s");
}
else{
	console.log("Welcome to the club");
}

//EWW AVENGERS
var hero = "Irunman"

function avengersAssemble (avenger){
	if(avenger == "Ironman"){
		console.log("Sorry, you are not needed for this mission");
	}
	else if (avenger == "KAPiTAN murica"){
		console.log("Sorry, you are not needed for this mission");
	}
	else if (avenger == "blackwindow"){
		console.log("Sorry, you are not needed for this mission");
	}
	else {
		console.log("I am a man with a very particular set of skills. I will find you; And I will kill you.")
	}
}
avengersAssemble(hero)

// LIGHTS OUT SPOOOOPPYY~~~
var lights = true

if (lights == true){
	console.log("And then were was light");
}
else {
	console.log("Lights out. Sucks for you.");
}

//VROOM VROOM BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
var carType = "Lamborghini";
var color = "blue";
var num = 1969;

	if (carType == "Lamborghini" && color == "red") {
      console.log("We have " + carType + color + num);
	}
	else if (carType == "Toyota" && color == "blue"){
      console.log("We have " + carType + color + num);
	}

	else if (carType == "Tesla" && color == "black"){
      console.log("We have " + carType + color + num);
	}
     else {
      console.log("We don't have any blue Toyotas in stock");
 }
