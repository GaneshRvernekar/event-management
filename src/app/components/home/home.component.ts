import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})

export class HomeComponent implements OnInit {

  arr:any[];
  arr2=new Array();
  i=0;

  constructor(public http:HttpClient) { }
  images = [944, 1011, 984].map((n) => `https://www.linkpicture.com/q/gdsc.jpeg`);

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }

    this.http.get<{articles:any[]}>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=929e8ec8ec8b4d6d9f68f69dab95ee27')
    .subscribe(result=>{
      this.arr=result.articles

      this.arr.forEach(ele=>{
         this.arr2.push(ele.title);
      })

    })

  }


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






}
