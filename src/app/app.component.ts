import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text!: string;
  translateText!: string;
  @ViewChild('input') input!: ElementRef

  constructor(
     private translateService: TranslateService
  ){}

  onInput(event: any){
    this.text = event.target.value
  }

  submit(){
    this.translateService.translate(this.text)
    .subscribe((result: any)=>{ 
       this.translateText = result;
    });

    console.log(this.text);
    this.input.nativeElement.value = ""
    console.log("this is input value" , this.input.nativeElement.value);
  }
}
