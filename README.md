
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.


This Library is best used with bootstrap 5 floating form control. its datepicker themed for bootstrap floating control. 

Import the HlDatetimepickerModule into your app module or whatever lazy loading module you want to 


For Example -> app.module.ts

```javascript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HlDatetimepickerModule } from 'hl-datetimepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HlDatetimepickerModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


Once you import the module you can use it something like below 

```html 
 <hl-datetimepicker [label]="'Select a date and time'" [(ngModel)]="selectedDate"></hl-datetimepicker>
```


selectedDate is a variabile in your component.ts file which will hold the value 