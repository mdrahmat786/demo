import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstServiceService } from 'src/app/services/first-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  data: number = 0;
  username: string = '';
  studentForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]),
    email: new FormControl('',[this.validateEmail]),
    password: new FormControl(''),

  });
  constructor(public _firstService: FirstServiceService,
    public router: Router) { 
      
  }

  get f(){
    return this.studentForm.controls
  }
  ngOnInit(): void {
    this.router.events.subscribe(routeInfo=>{
    })
    this.data = this._firstService.add(2,7);
  }
  
  validateEmail(control: AbstractControl){
    if(!control.value){
      console.log("==contrl")
      return {inalidData: true}
    }
    return null;
  }
  // ngOnDestroy(){
  //   console.log("====ngOnDestroy==")

  // }

  // addUnmber(data: string){
  //   // this.filePath = data;
  //   // this.showButton = false;

  // }

  go(){
    localStorage.setItem('username', this.username)
    this.router.navigate(['second-page']);

  }

  onSubmit(){
    console.log("======form grouyps===", this.studentForm)
  }
  
date= Date()
}
