/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here

class BaseSignal{
    constructor(signal) {
        if(this.constructor.name === "BaseSignal"){
            throw new Error("Hello, This class cannot be instantiated");
        }
        this.type = signal;
    }
    send(){
        console.log(`Sending ${this.type} signal`);
    }
}

class TvSignal extends BaseSignal {
    constructor(signal){
        // Add code here
        super(signal);
        this.type = "tv"
        }
    }

class AirconSignal extends BaseSignal {
    constructor(signal){
        super(signal);
        this.type = "aircon"
    }
}

class DoorSignal extends BaseSignal {
    constructor(signal){
        super(signal);
        this.type = "door"
    }
}

const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"

// checking if the instantiated error work
console.log(`Simulating the instance error here ----->`)
const BS = new BaseSignal();  
BS.send();