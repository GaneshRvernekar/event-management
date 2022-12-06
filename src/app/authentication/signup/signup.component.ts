import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {

  constructor(public auth :AuthServiceService ) { }


  isLoading:boolean= false;
  private authStatusSub :Subscription;

  onSignUp(form:NgForm)
  {
    if(form.invalid){
      return ;
    }
    this.isLoading=true;
    this.auth.createuser(form.value.email,form.value.password);
  }

  ngOnInit(): void {

   this.authStatusSub= this.auth.getAuthStatusListener().subscribe(

    authStatus=>{
      this.isLoading=false;
    }
   );

  }
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}
