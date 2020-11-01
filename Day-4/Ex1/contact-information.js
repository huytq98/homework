export default class ContactInformation {
    name;
    phoneNumber;
    workPlace;

    constructor(name, phoneNumber, workPlace) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.workPlace = workPlace;
    }

    get info(){
        return `
        name: ${this.name},
        phone number: ${this.phoneNumber},
        work place: ${this.workPlace},
        `
    }

    set info(data){
        this.name = name;
        this.phoneNumber = data.phoneNumber;
        this.workPlace = data.workPlace;
    }

}