import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// to inject the service into the file
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";

import { AuthServiceService } from "./auth-service.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor(public TService:AuthServiceService){}

  intercept(req:HttpRequest<any>, next: HttpHandler){

    const authToken = this.TService.getToken();

    const authRequest = req.clone({
      headers:req.headers.set('Authorization',"Bearer "+authToken)
    })

    return next.handle(authRequest);
  }
}
