import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hl-datetimepicker',
  templateUrl:"./hl-datetimepicker.component.html",
  styleUrls:["./hl-datetimepicker.component.css"] 
})
export class HlDatetimepickerComponent implements OnInit {

  constructor(private eRef : ElementRef) { }


  weekNames : any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames : any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  selectedMonth : number = new Date().getMonth();
  selectedDate : number = new Date().getDate();
  selectedYear : number = new Date().getFullYear();


  showContainer : boolean = false;
 
  @Input("enableDatepicker")  enableDatepicker : boolean = true;
  @Input("enableTimepicker")  enableTimepicker : boolean = true;


  showDatepicker : boolean = true;
  showTimepicker : boolean  = false;

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.showContainer = false;
    }
  }


  getHeaderLabel(){
    if(this.showDatepicker == true){
      return this.selectedDate+" "+this.getMonthName(this.selectedMonth,3)+" "+this.selectedYear; 
    }else if(this.showTimepicker == true){
      return "12:00 AM"; 
    }else{
      return this.selectedDate+" "+this.getMonthName(this.selectedMonth,3)+" "+this.selectedYear;
    }
  }

  getMonthNames(letters:number){
    return this.monthNames.map(function(month:string){
      return month.substr(0,letters);
    });
  }

  getMonthName(monthNumber:number,letters : number){
    return this.monthNames[monthNumber].substr(0,letters);
  }

  getWeekNames(letters:number){
    return this.weekNames.map(function(week:string){
      return week.substr(0,letters);
    });
  }

  getWeekName(weekNumber : number,letters:number){
    return this.weekNames[weekNumber].substr(0,letters);
  }

  getEndingDateOfMonth(year:number,month:number){
    return new Date(year,month+1,0,0,0,0 ).getDate();
  }

  getSelectedMonthDays(){
    var days = [];
    for(var i = 1;i<=this.getEndingDateOfMonth(this.selectedYear,this.selectedMonth);i++){
      days.push(i);
    }
    return days;
  }

  nextMonth(){
    if(this.selectedMonth >= 11){
      this.selectedMonth = 0;
      this.selectedYear++;
    }else{
      this.selectedMonth++;
    }
  }

  prevMonth(){
    if(this.selectedMonth <= 0){
      this.selectedMonth = 11;
      this.selectedYear--;
    }else{
      this.selectedMonth--;
    }
  }

  ngOnInit(): void {
  }

}
