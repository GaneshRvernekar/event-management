import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReserchService } from './../reserch.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css'],
})
export class CloudComponent implements OnInit {
  public getEvent: Subscription | undefined;
  researches: any[] = [];

  constructor(private Rservices: ReserchService, public route: Router,public http:HttpClient,public router:Router) {}

  ngOnInit(): void {
    this.Rservices.getResearches();
    this.getEvent = this.Rservices.getEventUpdatedListener().subscribe(
      (postData: { researches: any[]; maxResearch: number }) => {
        this.researches = postData.researches;
        console.log(this.researches);
      }
    );
  }


  Delete_(id: string) {
    var temp = prompt('Enter the security key!');
    var temp2 = +temp;
    if (temp2 == 67891) {

    this.http.delete("http://localhost:3000/api/research/delete/"+id)
    .subscribe(()=>{
      // this.Tservices.getTalents();
      // console.log("inseide delete function");
        this.router.navigate(['/']);
    });
      };
    }

}
