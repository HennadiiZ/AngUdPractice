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
  length = 0;
 
  // onInput(value: any){
  //   const parsedValue = parseInt(value.data);

  //   if(!isNaN(parsedValue)){
  //        this.length = parsedValue;
  //   }
  //   console.log(this.length);
  // }

onInput(value: any): void {
    // const parsedValue = parseInt(value);
    const parsedValue = parseInt(value.value);
    
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
    console.log("users data", this.length);
    console.log(value.value);
}

  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){ 
    console.log(this.includeLetters)
    console.log(this.includeNumbers)
    console.log(this.includeSymbols)
    this.password = "123"  
  }

}
