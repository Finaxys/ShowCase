import { Injectable, ViewContainerRef } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Book } from './classes/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { ToastsManager } from 'ng2-toastr';

const API_URL = environment.apiUrl;
@Injectable()
export class ApiService {

  constructor(
    private http: Http, public toastr: ToastsManager, public vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }
  

  public getAllBooks(): Observable<Book[]> {
    return this.http
      .get(API_URL + '/Books')
      .map(response => {
        const books = response.json();
        return books.map((book) => new Book(book));
      })
      .catch(this.handleError);
  }
 
    public insert(book:Book) : Observable<Book> {
        return this.http
          .post(API_URL + '/Books',book)
          .map(response => {
            console.log("hhhhhhhhhhhhh");
            this.toastr.success('Book added successfully', 'Success!');                     
            return new Book(response.json());
          })
          .catch(this.handleError);
    }

 
    public getById(id: number) : Observable<Book> {
      return this.http
        .get(API_URL + '/Books/' + id)
        .map(response => {
          return new Book(response.json());
        })

        .catch(this.handleError);
    }
  
    public deleteById(id: number) 
      : Observable<null> {
        return this.http
          .delete(API_URL + 'Books/' + id)
          .map(response => {this.toastr.success('Book deleted successfully', 'Success!');  })
          .catch(this.handleError);
    }

    private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      this.toastr.error(error, 'ERROR!');
      
      return Observable.throw(error);
    }
  }

