import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css'],
})
export class AddeventsComponent implements OnInit {
  eventForm: FormGroup;
  msg = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {

    var value = prompt('Please enter the unique ID provided to you');
    var value_:number = +value;

    const gdsc=12345;
    const gfg=67891;
    const bnb=12340;

     if( value_ != gdsc)
     {
       if(value_!=gfg)
       {
         if(value_!=bnb)
         {
           this.router.navigate(['/'])

         }
       }
     }

    this.eventForm = this.formBuilder.group({
      ClubID: ['', Validators.required,Validators.requiredTrue],
      description: ['', Validators.required, Validators.minLength(10)],
      eDate: ['', Validators.required,Validators.requiredTrue],
      time: ['', Validators.required,Validators.requiredTrue],
      venue: ['', Validators.required],
    });
  }

  submit_() {
    // console.log(this.eventForm.getRawValue());
    this.http
      .post(
        'http://localhost:3000/api/event/store',
        this.eventForm.getRawValue()
      )
      .subscribe(() => {
        this.msg = 'Event Added successfully!!';
        this.router.navigate(['/Clubs']);
      });
  }
}
