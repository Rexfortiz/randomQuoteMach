// this = reference to a particular object
//        the object depends on the immediate context

this.name = "FarelWindow";
console.log(this);

const car1 = {
    model: "Mustang",  //properties
    color: "red",
    year: 2023,

    drive : function(){ //methods
        console.log(`You drive the ${this.model}`);
    },
    brake : function(){
        console.log("You brake the car");
    }
}

const car2 = {
    model: "Corvette",  //properties
    color: "blue",
    year: 2024,

    drive : function(){ //methods
        console.log(`You drive the ${this.model}`);
    },
    brake : function(){
        console.log("You brake the car");
    }
}

car1.drive();
car2.drive();