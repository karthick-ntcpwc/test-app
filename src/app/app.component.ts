import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    name:number = 0;
    view:boolean = false;
    user=[{name:"superman",comic:"dc"},{name:"batman",comic:"dc"}]
    // ngOnInit(){
    //   setTimeout(() => {
    //     this.name = 12;
    //   }, 2000);
      
    // }
    ngAfterViewInit(){
      this.name = 0;
    }
    
    onClick(){
      console.log(this.name)
      this.name = this.name + 1;
      this.view = true
    }

}
