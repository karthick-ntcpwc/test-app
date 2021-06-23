import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeString'
})
export class TimeStringPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value)
    var convert = value;
    var hr= new Date(value).getHours();
    var mm = new Date(value).getMinutes();
    var fullTime = hr +":"+mm
    return fullTime;
  }

}
