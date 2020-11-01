export default class Document {
    id;
    name;
    author;
    price;
    publishDate;

    constructor(name, author, price, publishDate) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
        this.id = uuid.v4();
    }
    get info(){
        return `
        id: ${this.id},
        name: ${this.name},
        price: ${this.price},
        author: ${this.author},
        Publish Date: ${this.publishDate}`
    }

    set info(data){
        this.name = data.name;
        this.author = data.author;
        this.price = data.price;
        this.publishDate = data.publishDate;
    }
}