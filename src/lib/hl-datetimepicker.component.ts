import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { HlDatetimepickerService } from './hl-datetimepicker.service';
@Component({
  selector: 'hl-datetimepicker',
  templateUrl:"./hl-datetimepicker.component.html",
  styleUrls:["./hl-datetimepicker.component.css","./hl-common.css"] 
})
export class HlDatetimepickerComponent implements OnInit {

  constructor(
    private eRef : ElementRef,
    private HlDateTimepickerService : HlDatetimepickerService
    ) { }

    @Input("format") format : string = "YYYY-MM-DD";
    @Input("ngModel") ngModel : any = moment().format(this.format);
    @Input("label") label : string = "Select a date";
    @Input("yearsFrom") yearsFrom : number = new Date().getFullYear() - 11;
    @Input("yearsTo") yearsTo : number = new Date().getFullYear() + 12;
    @Input("yearPaginationRange") yearPaginationRange : number = 6;

    @Input("theme") containerType : string = "absolute";

    @Output("ngModelChange") ngModelChange  = new EventEmitter<string>();


  weekNames : any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames : any = moment.months();
  
  selectedMonth : number = new Date().getMonth();
  selectedDate : number = new Date().getDate();
  selectedYear : number = new Date().getFullYear();
  selectedHours : number = this.HlDateTimepickerService.getDateFormated(new Date()).hours;;
  selectedMinutes : number = new Date().getMinutes();
  selectedSeconds : number = new Date().getSeconds();
  selectedDay : string  = this.HlDateTimepickerService.getDateFormated(new Date()).ampm;

  showContainer : boolean = false;
 
  @Input("enableDatepicker")  enableDatepicker : boolean = true;
  @Input("enableTimepicker")  enableTimepicker : boolean = false;


  showDatepicker : boolean = true;
  showTimepicker : boolean  = false;
  showDatePickerMonths : boolean = false;
  showDatePickerYears : boolean = false;
  showDatePickerDays : boolean = true;


  @HostListener('document:click', ['$event']) clickout(event:any) {
    if(this.eRef.nativeElement.contains(event.target)) {
      
    } else {
      this.showContainer = false;
    }
  }


  openDatepicker(){
    this.showContainer = true;
    this.showDatepicker  = true;
    this.showTimepicker = false;
    this.showDays();
  }

  showMonths(){
    this.hideEverything();
    this.showDatePickerMonths = true;
  }

  showYears(){
    this.hideEverything();
    this.showDatePickerYears = true;
  }

  showDays(){
    this.hideEverything();
    this.showDatePickerDays = true;
  }

  paginateYearsRangeNext(){
    this.yearsFrom = this.yearsFrom  + this.yearPaginationRange;
    this.yearsTo = this.yearsTo + this.yearPaginationRange;
  }

  paginateYearsRangePrev(){
    this.yearsFrom = this.yearsFrom  - this.yearPaginationRange;
    this.yearsTo = this.yearsTo - this.yearPaginationRange;
  }

  hideEverything(){
    this.showTimepicker = false;
    this.showDatePickerDays = false;
    this.showDatePickerYears = false;
    this.showDatePickerMonths = false;
  }

  getYearsRange(){
    var years = [];
    for(var y = this.yearsFrom;y<= this.yearsTo;y++){
      years.push(y);
    }
    return years;
  }


  finalSelect(){
    this.ngModelChange.emit(moment(new Date(this.selectedYear,this.selectedMonth,this.selectedDate,this.selectedHours,this.selectedMinutes,this.selectedSeconds,0)).format(this.format));
    this.showContainer = false;
  }

  getCurrentSelectedDate(){
    return new Date(this.selectedYear,this.selectedMonth,this.selectedDate,this.selectedHours,this.selectedMinutes,this.selectedSeconds,0);
  }

  selectDate(day:number){
    if(this.enableTimepicker == true){
      this.showDatepicker=false;
      this.showTimepicker=true;
    }
    this.selectedDate = day;
  }

  selectMonth(m:number){
    this.selectedMonth = m;
    this.showYears();
  }


  selectYear(y:number){
    this.selectedYear = y;
    this.showDays();
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
