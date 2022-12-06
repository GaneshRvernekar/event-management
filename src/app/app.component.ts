import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './authentication/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'web development course project';

  constructor(public authService:AuthServiceService){}

  ngOnInit(){
    console.log("hi everyone");
    this.authService.autoAuthUser();
  }

}
