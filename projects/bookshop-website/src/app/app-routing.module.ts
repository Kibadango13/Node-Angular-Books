import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './global/header/header.component';


const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: 'adminbooks', loadChildren: () => import('./admin-books/admin-books.module').then(m => m.AdminBooksModule) }//,
 // {path:'hero',component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
