import { ChangeDetectorRef, Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-previe-ad-box',
  templateUrl: './preview-ad-box.component.html',
  styleUrls: ['./preview-ad-box.component.scss']
})
export class PrevieAdBoxComponent implements OnInit, OnChanges {

  motrarHeader = false;
  textBoton = '';
  flat: boolean = true;
  img = false;
  body = false;
  @Input() dataAnuncio:any;
  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.motrarHeader = true;
      this.textBoton = 'Mas info';
      this.img = true;
      this.body = true;
      console.log(this.motrarHeader);
      this.flat=false;
      this.cdRef.detectChanges();
    }, 3000);
  }

}
