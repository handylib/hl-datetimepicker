import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'ngx-moment';
import { HlDatetimepickerComponent } from './hl-datetimepicker.component';
import { NumSelectorComponent } from './num-selector/num-selector.component';



@NgModule({
  declarations: [
    HlDatetimepickerComponent,
    NumSelectorComponent
  ],
  imports: [
    MomentModule,
    CommonModule
  ],
  exports: [
    MomentModule,
    HlDatetimepickerComponent
  ]
})
export class HlDatetimepickerModule { }
