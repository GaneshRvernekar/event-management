import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './user';
import { environment } from 'src/environments/environment';

// const BACKEND_URL = environment.apiUrl+"user";
@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http:HttpClient,private router:Router) { }

  private token :string | undefined;
  private userId:string | undefined;
  private isAuthenticated= false;
  private tokenTimer :any;
  private authStatusListener = new Subject<boolean>();

  createuser(email:string,password:string){

    const authData:AuthData={email:email,password:password};

    this.http.post("http://localhost:3000/api/user/signup",authData)
    .subscribe((responce)=>{
      this.router.navigate(['/']);
    },error=>{
      this.authStatusListener.next(false);
    });
  }

  getAuth(){
    return this.authStatusListener.asObservable();
  }

  getToken(){
    return this.token;
  }

  login(email:string,password:string){


    const authData:AuthData={email:email,password:password};
    // console.log(authData);

    this.http.post<{expiresIn:number,token:string,userId:string}>("http://localhost:3000/api/user/login",authData)
    .subscribe(responce=>{

      const token = responce.token;
      this.token = token;
      if(token)
      {
        const expiresInDuration = responce.expiresIn;
        // console.log(expiresInDuration);
        this.setAuthTime(expiresInDuration);
        this.isAuthenticated=true;
        this.userId=responce.userId;
        this.token =token;
        this.authStatusListener.next(true);
        console.log(this.isAuthenticated);
        const now = new Date();
        const expirationDate=new Date ((now.getTime())+expiresInDuration*1000);
        console.log(expirationDate);
        this.SaveAuthData(token,expirationDate)
        this.router.navigate(['/']);
      }
    },error=>{
      this.authStatusListener.next(false);
      console.log(this.isAuthenticated);
      this.router.navigate(['/']);
    })

  }

  getIsAuth()
  {
    return this.isAuthenticated;
  }

  getUserId(){

    return this.userId;
  }

  getAuthStatusListener()
  {
     return this.authStatusListener.asObservable();
  }

  autoAuthUser(){

    const authInformation = this.getAuthData();
    console.log(authInformation);

    if(!authInformation){
      return;
    }

    const now = new Date();

    const expiresIn = authInformation.expirationDate.getTime()-now.getTime();

    // console.log(authInformation);

    if(expiresIn>0)
    {
      console.log("let me check");
      this.token=authInformation.token;
      this.isAuthenticated=true;
      this.setAuthTime(expiresIn/1000);
      this.authStatusListener.next(true);
    }
  }


  private setAuthTime(duration:number){
    // console.log("setting timer" + duration);

    this.tokenTimer=setTimeout(()=>{
      this.logout();
    },duration*1000);

  }



  logout(){
    this.token=null;
    this.isAuthenticated=false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private SaveAuthData(token:string,expirationDate:Date)
  {
    localStorage.setItem('token',token);
    localStorage.setItem('expiration',expirationDate.toISOString());
  }

  private clearAuthData()
  {
    localStorage.removeItem( 'token');
    localStorage.removeItem("expiration");
  }

  getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if(!token || !expirationDate)
    {
      return null;
    }
    return {
      token:token,
      expirationDate:new Date(expirationDate)
    }
  }

}
