import Document from "./Document";

export default class Ebook extends Document{
    discount;
    constructor(name, author, price, publishDate, discount) {
        super(name, author, price, publishDate);
        this.discount = discount;
    }
    get info(){
        return`
        id: ${this.id},
        name: ${this.name},
        price: ${this.price * (100 - this.discount)/100},
        author: ${this.author},
        Publish Date: ${this.publishDate}
        `
    }
}