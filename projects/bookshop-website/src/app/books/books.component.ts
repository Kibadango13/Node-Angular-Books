import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import {faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  isLoggedIn : boolean = false;
  faShoppingCart=faShoppingCart;

  //userProfile: UserProfile;
  faUser=faUser;


  constructor(private bookService : BookService) { }
  books : Book[] =[];

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
   this.books = await this.bookService.getBooks().toPromise();
   console.log(this.books);
  }
}
