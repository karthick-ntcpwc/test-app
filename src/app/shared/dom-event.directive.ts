import { Directive , ElementRef, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appDomEvent]'
})
export class DomEventDirective implements OnInit {
  @Input() name:any;
  @Input() value:any;
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor ="red"
   }
  ngOnInit(){
    console.log("name "+this.name);
    console.log("val "+0);
  }

}
