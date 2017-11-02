import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Author } from '../../classes/author';
import { Book } from '../../classes/book';
import { AuthorService } from '../../author.service';
import { ApiService } from '../../api.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  providers:[AuthorService,ApiService]
})
export class AddAuthorComponent implements OnInit {
    model: Author = new Author();
  
    constructor(private authorService: AuthorService ,public toastr: ToastsManager, public vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }
  
    ngOnInit() {
    }
  
    addAuthor() {
      console.log(this.model);
      this.authorService.create(this.model).subscribe(b=>{});
      }
    }