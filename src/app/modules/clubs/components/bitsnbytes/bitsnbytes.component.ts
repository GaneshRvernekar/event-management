import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventSService } from '../event-s.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';

@Component({
  selector: 'app-bitsnbytes',
  templateUrl: './bitsnbytes.component.html',
  styleUrls: ['./bitsnbytes.component.css'],
})
export class BitsnbytesComponent implements OnInit {
  images = [944, 1011, 984].map(
    (n) => `https://www.linkpicture.com/q/gdsc.jpeg`
  );

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor(
    public Eservice: EventSService,
    public Aservice: AuthServiceService,
    public route: Router,
    public http: HttpClient
  ) {}

  isAuth = false;
  public getEvent: Subscription | undefined;
  events2: any[] = [];

  ngOnInit(): void {
    this.isAuth = this.Aservice.getIsAuth();
    this.Eservice.getEvents();
    this.getEvent = this.Eservice.getEventUpdatedListener().subscribe(
      (postData: { events: any[]; EventCount: number }) => {
        this.events2 = postData.events;
        console.log(this.events2);
      }
    );
  }

  Delete(id: string) {
    var temp = prompt('Enter the security key!');
    var temp2 = +temp;
    if (temp2 == 123) {
      this.Eservice.deleteEvents(id).subscribe(() => {
        this.route.navigate(['/bitsnbytes']);
      });
    }
  }
}
function typeOf(ClubID: any): any {
  throw new Error('Function not implemented.');
}
