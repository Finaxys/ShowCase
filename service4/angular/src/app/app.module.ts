import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './components/book-form/book-form.component';
import { AuthorService } from './author.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    BookFormComponent,
    ListAuthorsComponent,
    AddAuthorComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    Ng2PaginationModule , 
    BrowserAnimationsModule, 
    ToastModule.forRoot(),    
    RouterModule.forRoot([
      {
        path: 'books',
        component: ListBooksComponent
      },
      {
        path: 'addBook',
        component: BookFormComponent
      },
      {
        path: 'authors',
        component: ListAuthorsComponent
      },
      {
        path: 'addAuthor',
        component: AddAuthorComponent
      }
    ])
  ],
  providers: [ApiService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
