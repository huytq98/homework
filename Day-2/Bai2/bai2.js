class Company{
    name;
    establishData;
    country;
    businessType;
    employee = [];
    constructor(name, establishDate, country, businessType, employee) {
        this.name = name;
        this.establishData = establishDate;
        this.country = country;
        this.businessType = businessType;
            this.employee= employee;
    }
    showAllEmployee(){
        this.employee.forEach(function (employee, index){
            console.log(`${index+1}. ${employee.name}, ${employee.age}, ${employee.sex}, ${employee.address}`)
        })
    }
    showCEO(){
        this.employee.forEach(function (employee, index){
            if(employee instanceof CEO){
                console.log(`${index+1}. ${employee.name}, ${employee.age}, ${employee.sex}, ${employee.address}, ${employee.strategy}`)
            }
        })
    }
    showManager(){
        console.log('m')
    }
    showStaff(){
        console.log('s')
    }
}

class Employee {
    name;
    age;
    sex;
    address;
    constructor(name, age, sex, address) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
    about(){
        console.log(`My name is ${this.name}, i'm ${this.age}`)
    }
}

class CEO extends Employee{
    strategy;
    constructor(name, age, sex, address, strategy) {
        super(name, age, sex, address);
        this.strategy = strategy;
    }
}

class Manager extends Employee{
    managementStyle;
    constructor(name, age, sex, address, managementStyle) {
        super(name, age, sex, address);
        this.managementStyle = managementStyle;
    }
}

class Staff extends Employee{
    experience;
    constructor(name, age, sex, address, experience) {
        super(name, age, sex, address);
        this.experience = experience;
    }
}


let mrHugo = new CEO("mrHugo", 30, "nam", "HN","Open source")

let mrA = new Manager("mrA", 25, "nam","HN","Hard")
let mrB = new Manager("mrB", 26, "nam","TN","Easy")
let mrsC = new Manager("mrsC", 28, "nu","TB","Medium")
let mrsD = new Manager("mrsD", 24, "nu","TB","Medium")
let mrsE = new Manager("mrsE", 24, "nu","HN","Hard")


let mrF = new Staff("mrF", 26, "nam","HN",10);
let mrG = new Staff("mrG", 37, "nam","HN",13);
let mrH = new Staff("mrH", 47, "nam","HN",15);
let mrI = new Staff("mrI", 29, "nam","HN",14);
let mrK = new Staff("mrK", 20, "nam","HN",12);
let mrsL = new Staff("mrsL", 47, "nam","HN",10);
let mrN = new Staff("mrN", 36, "nam","HN",12);
let mrsO = new Staff("mrsO", 17, "nam","HN",2);
let mrsP = new Staff("mrsP", 57, "nam","HN",23);
let mrQ = new Staff("mrQ", 22, "nam","HN",10);

let employees = [mrHugo,mrA, mrB, mrsC, mrsD,mrsE, mrF, mrG, mrH,mrI, mrK, mrsL, mrN, mrsO,mrsP,mrQ]

let mindx = new Company("Mindx","2020-03-15","Viet Nam", "Open", employees)
console.log(mindx);
// mindx.showAllEmployee();
mindx.showCEO();