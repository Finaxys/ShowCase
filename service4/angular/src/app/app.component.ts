import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiService } from './api.service';
import { Book } from './classes/book';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit {
  
    books: Book[] = [];
  
    constructor(
      private apiService: ApiService,private toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }
  
    public ngOnInit() {
      this.apiService
        .getAllBooks()
        .subscribe(
          (books) => {
            this.books = books;
          }
        );
      }

    onAddBook(book) {
      this.apiService
        .insert(book)
        .subscribe(
          (book) => {
            this.books = this.books.concat(book);
          }
        );
    }
  
    onRemoveBook(book) {
      this.apiService
        .deleteById(book.id)
        .subscribe(
          (_) => {
            this.books = this.books.filter((t) => t.id !== book.id);
          }
        );
    }
  }