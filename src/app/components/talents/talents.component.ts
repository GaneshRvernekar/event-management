import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { AddtalentService } from '../addtalent.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/authentication/auth-service.service';
import { talent } from '../talent.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css'],
})
export class TalentsComponent implements OnInit {
  userId: string;
  talents: talent[] = [];
  totalCount: number;
  userIsAuthenticated = false;
  searchText: any;
  like=0;
  dislike=0;

  private postsSub: Subscription | undefined;

  constructor(
    public Tservices: AddtalentService,
    public http: HttpClient,
    public Aservice: AuthServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.Tservices.getTalents();

    this.userId = this.Aservice.getUserId();
    this.postsSub = this.Tservices.talentsUpdatedListener().subscribe(
      (postData: { talents: talent[]; talentCount: number }) => {
        console.log(postData.talents);
        console.log(postData.talentCount);
        this.talents = postData.talents;
        this.totalCount = postData.talentCount;
      }
    );

    this.userIsAuthenticated = this.Aservice.getIsAuth();
  }
  likeCount(){
    this.like=this.like+1;
  }


  Delete(Id:string){

    this.http.delete("http://localhost:3000/api/talents/"+Id)
    .subscribe(()=>{
      // this.Tservices.getTalents();
      console.log("inseide delete function");
        this.router.navigate(['/']);
    });

  }
}
