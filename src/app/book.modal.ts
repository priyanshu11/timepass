  
export class Book {

    id: number;
    author: string;
    title: string;
    price: number;
    txt: string[]=[];
    constructor(id:number, author:string, title:string, price:number) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.price = price;
    }
}
