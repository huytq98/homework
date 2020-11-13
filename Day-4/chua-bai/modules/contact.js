export default class Contact{
    name;
    numberPhone;
    address;
    email;
    constructor(name, numberPhone, address, email) {
        this.name = name;
        this.numberPhone = numberPhone;
        this.address = address;
        this.email = email;
    }
    showInfo(){
        console.log(`
        Name: ${this.name}
        Number phone: ${this.numberPhone}
        address: ${this.address}
        email: ${this.email}
        `)
    }

    set sName(name){
        if (name.trim() ===""){
            return
        }
        this.name = name;
    }
    set sAddress(address){
        if (address.trim() ===""){
            return
        }
        this.address = address;
    }
    set sEmail(email){
        if (email.trim() ===""){
            return
        }
        this.email = email;
    }
    set sNumberPhone(numberPhone){
        if (numberPhone.trim() ==="" || numberPhone.length !== 10 || isNaN(Number(numberPhone))){
            return
        }
        this.numberPhone = numberPhone;
    }
}