import { Component, OnInit,Input } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit {
  book: Book = {
		title: 'kibadango',
		author: 'kevin Ibadango',
		price: 0,
		reviews: 0,
		rating: 0
  };
  
  constructor(private router : Router,private route: ActivatedRoute,private bookService: BookService) { }


  ngOnInit() {

	this.route.params.subscribe(params => { 
		const {id}= params;
		console.log(this.bookService.getBookById(parseInt(id)));
	  });

  }


  crear() {
		this.bookService.createBook(this.book).subscribe((book: Book) => {
			console.log('book inserted...', book);
			//this.router.navigate(['admin']);
			this.router.navigateByUrl('/adminbooks');
		});
	}

  
  delete() {
		this.bookService.deleteBook(this.book.id).subscribe(() => {
			//this.router.navigate(['admin']);
			this.router.navigateByUrl('/adminbooks');
		});
	}

}
