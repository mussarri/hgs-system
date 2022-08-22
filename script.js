class Vehicle {
    constructor(hgsNumber, fullname, balance) {
        this.hgsNumber = hgsNumber
        this.fullname = fullname
        this.balance = balance
    }
}

class Car extends Vehicle{
    constructor(hgsNumber, fullname, balance){
        super(hgsNumber, fullname, balance)
        this.typeOfVehicle = "Car"
    }
}

class MiniBus extends Vehicle{
    constructor(hgsNumber, fullname, balance){
        super(hgsNumber, fullname, balance)
        this.typeOfVehicle = "Minibus"
    }
}

class Bus extends Vehicle{
    constructor(hgsNumber, fullname, balance){
        super(hgsNumber, fullname, balance)
        this.typeOfVehicle = "Bus"
    }
}

class Gise{
    constructor(){
        this.report = []
    }
    passingVehicle(vehicle){
        const date = new Date()
        const fees = {
            "Car" : 10,
            "Minibus" : 15,
            "Bus" : 20,
        }
        let status

        if(vehicle.balance < fees[vehicle.typeOfVehicle]){
            status = "Failed"
        }else{
            vehicle.balance -= fees[vehicle.typeOfVehicle]
        }       

        this.report.push({
            ...vehicle,
            date: date,
            fee: fees[vehicle.typeOfVehicle],
            status: status || "Succesful"
        })
    }

    getDailyEarnings(){
        const today = new Date().toDateString()
        let earnings = 0
        for (let i = 0; i < this.report.length; i++) {
            if (this.report[i].date.toDateString() == today) {
                earnings += this.report[i].fee
            }            
        }
        return earnings;
    }
}


// database
const vehicles = {
    2213 : new Car(2123, "Mehmet Yılmaz", 0),
    2243 : new MiniBus(2243, "Ahmet Gümüş", 300),
    6223 : new Bus(6223, "Ali Aktaş", 400),
    1219 : new Car(1219, "Ayşe Altın", 100),
    2342 : new MiniBus(2342, "Gül Yıldırım", 250),
    6403 : new Bus(6403, "Mustafa Demir", 460),
}

// scan vehicle hgs code and check if it is registered 
function scanHgsCode(hgsNumber){
    if(!vehicles[hgsNumber]) return console.log("Vehicle is not found");
    gise.passingVehicle(vehicles[hgsNumber])
}

const gise = new Gise()

scanHgsCode(2213)

gise.getDailyEarnings(); 



