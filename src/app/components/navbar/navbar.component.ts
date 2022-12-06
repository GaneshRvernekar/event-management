import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthServiceService } from 'src/app/authentication/auth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,OnDestroy{

  constructor(public auth :AuthServiceService) { }
   fine=false;

   public authStatusListenerSubs :Subscription;


  ngOnInit(): void {

    this.fine= this.auth.getIsAuth();

    this.authStatusListenerSubs =this.auth.getAuthStatusListener().subscribe(ans=>{
      this.fine= ans;
    })
  }

  logout()
  {
    this.auth.logout()
  }
  ngOnDestroy(){
    this.authStatusListenerSubs.unsubscribe();

  }


}
