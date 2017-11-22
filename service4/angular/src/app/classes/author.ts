import { Book } from "./book";

export class Author {
    id:number;
    name:string;
    books: Book[] = [];
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
