import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SharedService } from '../../../services/shared.service';

export class AuthInterceptor implements HttpInterceptor {

    shared: SharedService;

    constructor(){
        this.shared = SharedService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest: any;
        if(this.shared.isLoggedIn()){
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }
}
