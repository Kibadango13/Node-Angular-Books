import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss']
})
export class AdminBooksComponent implements OnInit {


  

  isLoggedIn : boolean = false;
  faShoppingCart=faEdit;

 // userProfile: UserProfile;
  faUser=faTrash;

  constructor(private router : Router,private route: ActivatedRoute,private bookService: BookService) { }

  books : Book[] =[];

  ngOnInit() {
    console.log('ingreso al nginti');
    this.loadData();
  }

  async loadData(){
    this.books = await this.bookService.getBooks().toPromise();
    console.log('hello kevin its amm ')
    console.log(this.books);
  }

  delete(id) {
		this.bookService.deleteBook(id).subscribe(() => {
			//this.router.navigate(['admin']);
  
      this.loadData();
		});
	}

}
