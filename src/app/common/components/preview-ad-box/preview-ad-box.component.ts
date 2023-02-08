import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previe-ad-box',
  templateUrl: './preview-ad-box.component.html',
  styleUrls: ['./preview-ad-box.component.scss']
})
export class PrevieAdBoxComponent implements OnInit {

  motrarHeader = false;
  textBoton = '';
  flat: boolean = true;
  img = false;
  body = false;
  @Input() title: String="";
  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

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
