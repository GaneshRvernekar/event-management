import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventSService } from '../event-s.service';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';

@Component({
  selector: 'app-geekforgeeks',
  templateUrl: './geekforgeeks.component.html',
  styleUrls: ['./geekforgeeks.component.css'],
})
export class GeekforgeeksComponent implements OnInit {
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
    public http: HttpClient,
    public route: Router,
    public Aservice: AuthServiceService
  ) {}

  isAuth = false;
  public getEvent: Subscription | undefined;
  events2: any[] = [];

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    };
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    };

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
        this.route.navigate(['/geekforgeeks']);
      });
    }
  }
}
