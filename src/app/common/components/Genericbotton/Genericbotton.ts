import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-buttondinamic',
  templateUrl: './buttondinamic.component.html',
  styleUrls: ['./buttondinamic.component.scss']
})
export class ButtondinamicComponent  {

  public textDinamig: string  | undefined = 'Boton dinamico' ; 
  public color: any;
  @Input() type: string;
  @Output() ClickDinamicbutton = new EventEmitter();
  Onclick(){
    this.ClickDinamicbutton.emit();
  }

  
}
