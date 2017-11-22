import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../api.service';
import { Book } from '../../classes/book';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  providers:[ApiService]
})

export class ListBooksComponent implements OnInit {
  books: Book[] = [];
  book:Book=new Book();
  constructor( private apiService: ApiService,public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.apiService
    .getAllBooks()
    .subscribe(
      (books) => {
        this.books = books;
      }
    );
  }
  onRemoveBook(book) {
    console.log(book.Id);
    this.apiService
      .deleteById(+book.Id)
      .subscribe(
        (_) => {
          this.apiService
          .getAllBooks()
          .subscribe(
            (books) => {
              this.books = books;
            }
          )
        }
        );
  }
  }
