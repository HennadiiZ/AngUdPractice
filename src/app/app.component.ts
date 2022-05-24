import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  password: string = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  @ViewChild('input') input!: ElementRef;

  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){ // event binding
    console.log(this.includeLetters)
    console.log(this.includeNumbers)
    console.log(this.includeSymbols)
    console.log( "entered value:" , this.input.nativeElement.value)
    this.password = "123"  // property binding
  }

}
