import { Injectable, ViewContainerRef } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Author } from './classes/author';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { ToastsManager } from 'ng2-toastr';

const API_URL = environment.apiUrl;
@Injectable()
export class AuthorService {

  constructor(
    private http: Http,public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
  }
  public getAllAuthors(): Observable<Author[]> {
    return this.http
      .get(API_URL + '/Authors')
      .map(response => {
        const authors = response.json();
        return authors.map((author) => new Author(author));
      })
      .catch(this.handleError);
  }
 
    public create(author:Author) : Observable<any> {
        return this.http
          .post(API_URL + 'Authors', author)
          .map(response => {
            this.toastr.success('author added successfully', 'Success!');                     
            
          })
          .catch(this.handleError);
    }

    public getById(id: number) : Observable<Author> {
      return this.http
        .get(API_URL + '/Authors/' + id)
        .map(response => {
          return new Author(response.json());
        })

        .catch(this.handleError);
    }
  
    public deleteById(id: number) 
      : Observable<null> {
        return this.http
          .delete(API_URL + '/Authors/' + id)
          .map(response => {this.toastr.success('Book deleted successfully', 'Success!');})
          .catch(this.handleError);
    }

    private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      return Observable.throw(error);
    }
  }

