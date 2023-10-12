// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use . to access properties/methods

const car1 = {
    model: "Mustang",  //properties
    color: "red",
    year: 2023,

    drive : function(){ //methods
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You brake the car");
    }
}

const car2 = {
    model: "Corvette",  //properties
    color: "blue",
    year: 2023,

    drive : function(){ //methods
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You brake the car");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.brake();