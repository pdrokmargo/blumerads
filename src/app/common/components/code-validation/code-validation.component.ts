import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.scss']
})
export class CodeValidationComponent implements OnInit {
  @ViewChild('code1') code1!: ElementRef;
  @ViewChild('code2') code2!: ElementRef;
  @ViewChild('code3') code3!: ElementRef;
  @ViewChild('code4') code4!: ElementRef;
  @ViewChild('code5') code5!: ElementRef;
  @ViewChild('code6') code6!: ElementRef;

  
  @Output() callBackCodeValidation = new EventEmitter<CodeValidationI>();
  @Output() callBackResendCode = new EventEmitter<boolean>();

  code: string;

  constructor() { }

  ngOnInit(): void {
  }

  nextField(event: any, pos: number): void {
    event.preventDefault();
    switch (pos) {
      case 1:
        if (event.key !== 'Backspace') return this.code2.nativeElement.focus();
        break;
      case 2:
        if (event.key !== 'Backspace') return this.code3.nativeElement.focus();
        this.code1.nativeElement.value = '';
        this.code1.nativeElement.focus();
        break;
      case 3:
        if (event.key !== 'Backspace') return this.code4.nativeElement.focus();
        this.code2.nativeElement.value = '';
        this.code2.nativeElement.focus();
        break;
      case 4:
        if (event.key !== 'Backspace') return this.code5.nativeElement.focus();
        this.code3.nativeElement.value = '';
        this.code3.nativeElement.focus();
        break;
      case 5:
        if (event.key !== 'Backspace') return this.code6.nativeElement.focus();
        this.code4.nativeElement.value = '';
        this.code4.nativeElement.focus();
        break;
      case 6:
        if (event.key !== 'Backspace') {
          this.code = this.code1.nativeElement.value + this.code2.nativeElement.value + this.code3.nativeElement.value + this.code4.nativeElement.value + this.code5.nativeElement.value + this.code6.nativeElement.value;
          console.log(this.code);
          this.callBackCodeValidation.emit({
            code: this.code
          });
          return
        }
        this.code5.nativeElement.value = '';
        this.code5.nativeElement.focus();
        break;
      default:
        break;
    }
  }

  resendCode():void{
    this.callBackResendCode.emit(true)
  }



}

interface CodeValidationI {
  code: string;
}