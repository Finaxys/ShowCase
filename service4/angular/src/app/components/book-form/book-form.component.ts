import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Author } from '../../classes/author';
import { Book } from '../../classes/book';
import { AuthorService } from '../../author.service';
import { ApiService } from '../../api.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers:[AuthorService,ApiService]
})
export class BookFormComponent implements OnInit {

  authors : Author[] =[];
  model: Book = new Book();
  selectedValue: Author = new Author();

  constructor(private authorService: AuthorService , private apiService: ApiService,public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.model.author = new Author(); 
  }

  ngOnInit() {
    this.authorService
    .getAllAuthors()
    .subscribe(
      (authors) => {
        this.authors = authors;
      }
    );
  }

  addBook() {
    console.log("selected item", this.selectedValue);
    this.model.author = this.selectedValue;
    console.log(this.model);
    this.apiService.insert(this.model).subscribe(b=>{});
    }
  }