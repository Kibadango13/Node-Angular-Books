import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
const URL ='http://immense-forest-87642.herokuapp.com/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {     }

    getBooks():Observable <Book[]> {
      return this.http.get<Book[]>(URL);
  }

  getBookById(id:number):Observable<Book> {
    return this.http.get<Book>(`${URL}/${id}`);
}

createBook(book: Book): Observable<Book> {
  console.log(book);
  return this.http.post<Book>(URL, book);
}


deleteBook(id:number): Observable<void> {

  return this.http.delete<void>(`${URL}/${id}`);
}
/*
DeleteBook(id:number): Observable<Book> {
  return this.http.delete;
}*/
}
