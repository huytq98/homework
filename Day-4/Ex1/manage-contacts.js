import ContactInformation from "./contact-information.js";
class ManageContacts {
    name;
    contactList;

    constructor(name) {
        this.name = name;
        this.contactList = [];
    }

    addContact(info){
        if(info instanceof ContactInformation){
            this.contactList.push(info)
        }else {
            console.log('something else')
        }
    }

    updateContact(phoneNumber, data){
        let found = this.contactList.find((info)=>{
            info.phoneNumber = phoneNumber;
        })
        if (found !== null){
            found.info = data;
        }
    }

    deleteContact(phoneNumber){
        let foundIndex = this.contactList.findIndex(function (info){
            return info.phoneNumber === phoneNumber;
        })
        if (foundIndex>=0){
            this.contactList.splice(foundIndex, 1);
        }
    }

    showContact(){
        this.contactList.forEach(function (info){
            console.log(info.info);
        })
    }

    findContact(data){
        let result = this.contactList.filter(function (info){
            return info.name === data || info.phoneNumber === data;
        })
        return result;
    }
}