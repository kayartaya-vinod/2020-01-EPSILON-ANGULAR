import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // you may wish to modify the req (which is an immutable object)
    let token = sessionStorage.getItem('token');
    
    if(!token) {
      return next.handle(req);
    }

    let authHeader = new HttpHeaders({ 'authorization': 'Bearer ' + token })
    let newReq = req.clone({ headers: authHeader });
    return next.handle(newReq);
  }
}
