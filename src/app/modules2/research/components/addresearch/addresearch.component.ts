import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresearch',
  templateUrl: './addresearch.component.html',
  styleUrls: ['./addresearch.component.css'],
})
export class AddresearchComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ResearchForm!: FormGroup;
  msg = '';




  ngOnInit(): void {
    // var value = prompt('Please enter the unique ID provided to you');
    // var value_: number = +value;

    // if (value_ != 456) {
    //   this.router.navigate(['/Research']);
    // }

       var value = prompt('Please enter the unique ID provided to you');
    var value_:number = +value;

    const aiml=12345;
    const cloud=67891;

     if( value_ != aiml)
     {
       if(value_!=cloud)
       {
           this.router.navigate(['/']);
       }
     }

    this.ResearchForm = this.formBuilder.group({
      resID: ['', Validators.required],
      resName: ['', Validators.required],
      description: ['', Validators.required, Validators.minLength(10)],
      name: ['', Validators.required],
      contact: ['', Validators.required,Validators.minLength(10)],
      email: ['', Validators.required],
    });
  }

  submit() {
    // console.log(this.eventForm.getRawValue());
    this.http
      .post(
        'http://localhost:3000/api/research/addResearch',
        this.ResearchForm.getRawValue()
      )
      .subscribe(() => {
        this.msg = 'Research Added successfully!!';
        this.router.navigate(['/Research']);
      });
  }
}
