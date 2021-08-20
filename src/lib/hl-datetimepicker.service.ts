import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HlDatetimepickerService {

  constructor() { }


  formatAMPM(date: any) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log(strTime);
    return strTime;
  }

  getAmPm(date: any) {
    return date.getHours() >= 12 ? 'pm' : 'am';
  }

  getDateFormated(date:any){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return {
      hours : hours,
      minutes : minutes,
      seconds : date.getSeconds(),
      ampm : ampm
    };
  }

}
