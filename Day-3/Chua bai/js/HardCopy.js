import Document from "./Document";

export default class HardCopy extends Document{
    source;
    constructor(name, author, price, publishDate, source) {
        super(name, author, price, publishDate);
        this.source = source;
    }
    get info(){
        return`
        id: ${this.id},
        name: ${this.name},
        price: ${this.price},
        author: ${this.author},
        Publish Date: ${this.publishDate},
        source: ${this.source}
        `
    }
}