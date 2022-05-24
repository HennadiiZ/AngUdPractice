import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  password: string = "";

  onButtonClick(){ // event binding
    console.log(123)
    this.password = "123"  // property binding
  }

  getPassword(){ // event binding
   
    return this.password + "another way prop binding" ; // another way of property binding
  }

  getName(){
    return  "Hennadii"; // interpolation
  }
}
