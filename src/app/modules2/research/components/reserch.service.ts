import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReserchService {
  constructor(public http: HttpClient, private route: Router) {}

  private researchUpdated = new Subject<{
    researches: Event[];
    maxResearch: number;
  }>();
  private research2: any[] = [];

  getResearches() {
    this.http
      .get<{ message: string; researches: any; maxResearches: number }>(
        'http://localhost:3000/api/research'
      )
      .pipe(
        map((postData) => {
          // console.log(postData);
          return {
            posts: postData.researches.map((post: any) => {
              return {
                id: post._id,
                resID: post.resID,
                resName: post.resName,
                description: post.description,
                name: post.name,
                contact: post.contact,
                email: post.email,
              };
            }),
            maxResearches: postData.maxResearches,
          };
        })
      )
      .subscribe((transformedPostData) => {
        // console.log(transformedPostData);
        this.research2 = transformedPostData.posts;
        this.researchUpdated.next({
          researches: [...this.research2],
          maxResearch: transformedPostData.maxResearches,
        });
      });
  }

  getEventUpdatedListener() {
    return this.researchUpdated.asObservable();
  }
  deleteResearch(id: string) {
    return this.http.delete('http://localhost:3000/api/research/delete/'+id);
  }
}
