import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName ="user1"
  val=0;
  time = new Date();
  constructor() { }

  ngOnInit(): void {
    console.log('test')
  }
  Submit(val:any){
    console.log(val.value)
  }
}
