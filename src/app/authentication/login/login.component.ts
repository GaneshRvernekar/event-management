import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  isLoading:boolean=false;
  private authStatusSub :Subscription;

  constructor(public auth :AuthServiceService ) { }
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

  onLogin(form:NgForm){

    if(form.invalid)
    {
      return;
    }
    this.isLoading=true;
    this.auth.login(form.value.email,form.value.password);
  }

  ngOnInit(): void {

    this.authStatusSub= this.auth.getAuthStatusListener().subscribe(

     authStatus=>{
       this.isLoading=false;
     }
    );

}
}
