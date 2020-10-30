class Document {
    id;
    name;
    author;
    price;
    publishDate;
    constructor(id, name, author, price, publishDate) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
    }
    get info(){
        return `
        Document ${this.id}, ten ${this.name}, cua tac gia ${this.author}, co gia ${this.price}, ngay san xuat ${this.publishDate}`
    }
    set info(data) {
        this.id = data.id;
        this.name = data.name;
        this.author = data.author;
        this.price = data.price;
        this.publishDate = data.publishDate;
    }
}

class EBook extends Document {
    discount;
    constructor(id, name, author, price, publishDate, discount) {
        super(id, name, author, price, publishDate);
        this.discount = discount;
    }
    get info() {
        let price = this.price - (this.discount / 100)
        return `Ebook: ${this.name}, author: ${this.author}, publish date: ${this.publishDate}, price: ${price}`
    }
}

class HardCopy extends Document {
    source;
    constructor(id, name, author, price, publishDate, source) {
        super(id, name, author, price, publishDate);
        this.source = source;
    }
    get info() {
        return `HardCopy: ${this.name},author: ${this.author}, publish date: ${this.publishDate},price: ${this.price}, source: ${this.source}`;
    }
}
class DocumentCase {
    id;
    name;
    books = [];
    owner;
    dateModified;
    constructor(id, name, books, owner, dateModified) {
        this.id = id;
        this.name = name;
        this.books = books;
        this.owner = owner;
        this.dateModified = dateModified;
    }
    addDocument(document) {
        this.books = this.books.push(document);
    }
}
let dcase = new DocumentCase('dcase', 'dcase', 'books','kulboiz','30/10/2020')
let ebook1 = new EBook('ebook1', `ebook1`, `hugo`, 120, '30/10/2020', 20);
let ebook2 = new EBook('ebook2', `ebook2`, 'hugo', 90, '30/10/2020', 30)
let copy1 = new HardCopy("copy1", `copy1`, "huy", 100, "30/10/2020", "google");
let copy2 = new HardCopy("copy2", `copy2`, "huy", 200, "30/10/2020", "google");