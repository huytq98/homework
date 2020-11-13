import Contact from "./contact.js";

export default class Contacts{
    lists = [];
    constructor(lists = []) {
        this.lists = lists;
    }
    addContact(name, numberPhone, address = '', email= ''){
        if(name.trim()==="" || numberPhone.length !== 10 || isNaN(Number(numberPhone))){
            return "input invalid";
        }
        let contact = new Contact(name, numberPhone, address, email)
        this.lists.push(contact)
    }

    editContact(numberPhone, contact){
        let index = this.lists.findIndex(function (contact){
            return contact.numberPhone === numberPhone;
        })

        if(index !== -1){
            if ('name' in contact){
                this.lists[index].sName = contact.name;
            }if ("numberPhone" in contact){
                this.lists[index].sNumberPhone = contact.numberPhone;
            }if ("email" in contact){
                this.lists[index].sEmail = contact.email;
            }if ("address" in contact){
                this.lists[index].sAddress = contact.address;
            }
        }
    }

    deleteContact(numberPhone){
        this.lists = this.lists.filter(function (contact){
            return contact.numberPhone !== numberPhone;
        })
    }
    search(key){
        let contactFilter = this.lists.filter(function (contact){
            return contact.name.indexOf(key) !== -1 || contact.numberPhone.indexOf(key) !== -1;
        })
        console.log(contactFilter)
    }
    showContact(){
        console.log(this.lists)
    }
}