import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../api.service';
import { Book } from '../../classes/book';
import { ToastsManager } from 'ng2-toastr';
import { AuthorService } from '../../author.service';
import { Author } from '../../classes/author';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css'],
  providers:[AuthorService]
})
export class ListAuthorsComponent implements OnInit {
  authors: Author[] = [];
  author:Author=new Author();
  constructor( private authorService: AuthorService,public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
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
  
  onRemoveAuthor(author) {
    console.log(author.Id);
    this.authorService
      .deleteById(+author.Id)
      .subscribe(
        (_) => {
          this.authorService
          .getAllAuthors()
          .subscribe(
            (authors) => {
              this.authors = authors;
            }
          )
        }
      );
    }
  }
