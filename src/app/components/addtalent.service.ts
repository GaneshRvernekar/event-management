import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { talent } from './talent.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AddtalentService {
  private talentsUpdated = new Subject<{
    talents: talent[];
    talentCount: number;
  }>();
  handlerError: any;
  private talents2: talent[] = [];
  userId: string;
  msg = '';
  constructor(private http: HttpClient, private route: Router) {}
  getMessage() {
    return this.msg;
  }
  addTalent(
    id: string,
    name: string,
    year: string,
    department: string,
    skill: string,
    image: File
  ) {
    const postData = new FormData();
    postData.append('name', name);
    postData.append('year', year);
    postData.append('department', department);
    postData.append('skill', skill);
    postData.append('image', image);

    this.http
      .post<{ message: string; talObj: talent }>(
        'http://localhost:3000/api/talents',
        postData
      )
      .subscribe((responceData) => {
        console.log(responceData.message);
        console.log(responceData.talObj);

        this.msg = 'Talent Post Added Successfully!';
      });
  }

  getTalent(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
      year: string;
      department: string;
      skill: string;
      imagePath: string;
      creator: string;
    }>('http://localhost:3000/api/talents/' + id);
  }

  deleteTalents(id: string) {
    return this.http.delete('http://localhost:3000/api/talents/' + id);
  }

  getTalents() {
    this.http
      .get<{ message: string; talents: any; maxTalents: number }>(
        'http://localhost:3000/api/talents'
      )
      .pipe(
        map((postData) => {
          console.log(postData);
          return {
            posts: postData.talents.map((post: any) => {
              return {
                id: post._id,
                name: post.name,
                year: post.year,
                department: post.department,
                imagePath: post.imagePath,
                creator: post.creator,
              };
            }),
            maxTalents: postData.maxTalents,
          };
        })
      )
      .subscribe((transformedPostData) => {
        console.log(transformedPostData);
        this.talents2 = transformedPostData.posts;
        this.talentsUpdated.next({
          talents: [...this.talents2],
          talentCount: transformedPostData.maxTalents,
        });
      });
  }

  talentsUpdatedListener() {
    return this.talentsUpdated.asObservable();
  }

  updateTalent(
    id: string,
    name: string,
    year: string,
    department: string,
    skill: string,
    image: File
  ) {
    let TalData: talent | FormData;

    if (typeof image === 'object') {
      const TalData = new FormData();
      TalData.append('name', name);
      TalData.append('year', year);
      TalData.append('department', department);
      TalData.append('skill', skill);
      TalData.append('image', image, name);
    } else {
      TalData = {
        id: id,
        name: name,
        year: year,
        department: department,
        skill: skill,
        imagePath: image,
        creator: this.userId,
      };
    }

    this.http
      .put('http://localhost:3000/api/talents/' + id, TalData)
      .subscribe((response) => {
        this.route.navigate(['/']);
      });
  }
}
