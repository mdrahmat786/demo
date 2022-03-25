import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  @Input() dataFromP = '';
  @Output() newItemEvent = new EventEmitter<string>();

  title = 'demo-app';
  val= 9;
  arr = [{id: 1,name: 'meetu'},{id: 2,name: 'rehmat'},{id: 3,name: 'aditya'}];
  isAdd = true;
  constructor(
    public activatedRoute: ActivatedRoute
  ){
    
  }

  ngOnInit(){
    localStorage.removeItem('username');
    this.activatedRoute.queryParams.subscribe(param=>{
     
      if(param['state'] === 'add'){
        this.isAdd = true;
      } else if( param['state'] === 'edit'){
        this.isAdd = false;
      }
    })
    this.newItemEvent.emit('data from child')

  }


  increaseCount(){
    var a = [1,2,3];
    this.val = this.val + 1;
  }

}
