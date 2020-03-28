import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Injectable({
    providedIn : 'root'
})

export class ErrorIntercept implements HttpInterceptor {
constructor(private authService : AuthService){

}

	intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(
			catchError(err => {
				if (err.status == 401) {
                    localStorage.removeItem('TOKEN');
                    this.authService.logout();
					location.href = '/login';
				}
				const error = err.error.message || err.statusText;
				return throwError(error);
			})
		);
	}
}