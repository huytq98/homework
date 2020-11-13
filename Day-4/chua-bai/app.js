import Contacts from "./modules/contacts.js";
let contactOfA = new Contacts();
contactOfA.addContact("mrA", "0213214213")
contactOfA.showContact();
contactOfA.editContact("0213214213", {numberPhone: '133333333333'})
contactOfA.showContact();
contactOfA.search("1333")