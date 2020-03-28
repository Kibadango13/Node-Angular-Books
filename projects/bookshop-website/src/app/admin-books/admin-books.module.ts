import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FontAwesomeModule }        from '@fortawesome/angular-fontawesome';
import { AdminBooksRoutingModule }  from './admin-books-routing.module';
import { AdminBooksComponent }      from './admin-books.component';
import { AdminBookComponent }       from './admin-book/admin-book.component';
import { FormsModule }              from '@angular/forms';

@NgModule({
  declarations: [AdminBooksComponent, AdminBookComponent],
  imports: [
    CommonModule,
    AdminBooksRoutingModule,
    FontAwesomeModule,
    FormsModule
  
  ]
})
export class AdminBooksModule { }
