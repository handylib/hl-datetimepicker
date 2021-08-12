import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HlDatetimepickerComponent } from './hl-datetimepicker.component';



@NgModule({
  declarations: [
    HlDatetimepickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    HlDatetimepickerComponent
  ]
})
export class HlDatetimepickerModule { }
