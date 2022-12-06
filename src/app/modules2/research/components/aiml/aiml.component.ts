import { Router } from '@angular/router';
import { ReserchService } from './../reserch.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aiml',
  templateUrl: './aiml.component.html',
  styleUrls: ['./aiml.component.css'],
})
export class AimlComponent implements OnInit {
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
    if (temp2 == 12345) {

    this.http.delete("http://localhost:3000/api/research/delete/"+id)
    .subscribe(()=>{
      // this.Tservices.getTalents();
      console.log("inseide delete function");
        this.router.navigate(['/']);
    });
      };
    }


  }

