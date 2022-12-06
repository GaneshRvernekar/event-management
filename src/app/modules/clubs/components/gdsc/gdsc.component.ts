import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventSService } from '../event-s.service';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';

@Component({
  selector: 'app-gdsc',
  templateUrl: './gdsc.component.html',
  styleUrls: ['./gdsc.component.css'],
})
export class GdscComponent implements OnInit {
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
    public route: Router,
    public http: HttpClient,
    public Aservice: AuthServiceService
  ) {}

  change: boolean = true;

  move_1() {
    this.change = false;
  }
  rmove_1() {
    this.change = true;
  }

  change2: boolean = true;

  move_2() {
    this.change2 = false;
  }
  rmove_2() {
    this.change2 = true;
  }

  change3: boolean = true;

  move_3() {
    this.change3 = false;
  }
  rmove_3() {
    this.change3 = true;
  }
  isAuth = false;
  public getEvent: Subscription | undefined;
  events2: any[] = [];

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
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
    // this.http.delete("http://localhost:3000/api/event/delete/"+id).subscribe(() => {
    //   console.log("In delete function")
    //   // this.Eservice.getEvents();
    //   this.route.navigate(['/bitsnbytes']);
    // });
    var temp = prompt('Enter the security key!');
    var temp2 = +temp;
    if (temp2 == 123) {
      this.Eservice.deleteEvents(id).subscribe(() => {
        this.route.navigate(['/GDSC']);
      });
    }
  }
}
