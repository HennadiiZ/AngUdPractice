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
  warning: string = "";
 
onInput(value: any): void {
    const parsedValue = parseInt(value.value);
    
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
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
    this.warning = "";
    const letters = "abcdefghklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%&?";

    let validCharacters = "";

    this.includeLetters && (validCharacters += letters)
    this.includeNumbers && (validCharacters += numbers)
    this.includeSymbols && (validCharacters += symbols)

    let generatedPassword = "";
      for(let i = 0; i < this.length; i++){
          const index = Math.floor(Math.random() * validCharacters.length);
          generatedPassword += validCharacters[index];
      }
    this.password = generatedPassword;
  }
}
