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

  dinamidColor(){
    if(this.type){
      switch (this.type) {
        case "purpule":
          this.color = "purpule";
          break;
        case "auxiliar":
          this.color = "purpule";
        break;

        case "confirmation":
          this.color = "purpule";
          break;

          case "cancel":
          this.color = "purpule";
          break;

          case "Alternative":
          this.color = "purpule";
          break;

      
        default:
          this.color = "white";
          break;
      }
    }else{
      console.log("Error no se tiene el tipo")
    }
  }

}
