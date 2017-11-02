import { Author } from "./author";

export class Book {
    id: number;
    title: string = '';
    price: boolean = false;
    author: Author = new Author(); ;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }