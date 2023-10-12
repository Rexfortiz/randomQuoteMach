// inheritance = a child class can inherit all the
//               methods and properties from another class

class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleep`);
    }
}

class Rabbit extends Animal{
    alive = true;
    name = "rabbit";
  
    run(){
        console.log(`${this.name} is run`);
    }
}

class Fish extends Animal{
    
    name = "fish";

    swim(){
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    alive = true;
    name = "hawk";

    fly(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive)
rabbit.eat();
fish.sleep();
