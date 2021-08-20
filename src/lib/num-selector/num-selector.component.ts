import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hl-num-selector',
  templateUrl: './num-selector.component.html',
  styleUrls: ['../hl-common.css','./num-selector.component.css']
})
export class NumSelectorComponent implements OnInit {

  constructor() { }


  @Input("min") min : number = 0;
  @Input("max") max : number = 100;
  @Input("value") value : number = 0;


  @Output("change") change  = new EventEmitter<number>();

  valuePlus(){
    this.value++;
    if(this.value > this.max){
      this.value = this.min;
    }

    this.change.emit(this.value);
  }


  valueMinus(){
    this.value--;
    if(this.value < this.min){
      this.value = this.max;
    }
    this.change.emit(this.value);
  }

  ngOnInit(): void {
  }

}
