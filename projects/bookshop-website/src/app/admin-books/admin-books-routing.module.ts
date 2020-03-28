import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBooksComponent } from './admin-books.component';
import {AdminBookComponent  } from './admin-book/admin-book.component';



const routes: Routes = [
  { path: '', component: AdminBooksComponent },
  { path: ':id', component: AdminBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBooksRoutingModule { }
