import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppComponent }     from './app.component';
import { HeaderComponent }  from './global/header/header.component';
import { FooterComponent }  from './global/footer/footer.component';
import { LogoComponent }    from './global/logo/logo.component';
import { SearchComponent }  from './global/search/search.component';
import { UtilNavComponent } from './global/util-nav/util-nav.component';
import { MenuComponent }    from './global/menu/menu.component';

import { HomeModule       } from './home/home.module';
import { NewsModule       } from './news/news.module';

import { AuthService      } from './services/auth.service';
import { SecurityModule   } from './security/security.module';

import { TokenInterceptor } from './interceptors/http-interceptor';
import { ErrorIntercept   } from './interceptors/error-interceptor';
import { initUserProfile  } from './initializers/user-profile-initializer';


 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    UtilNavComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    NewsModule,
    SecurityModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide : APP_INITIALIZER,
      useFactory : initUserProfile,
      multi: true,
      deps : [AuthService]
    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass : ErrorIntercept,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
