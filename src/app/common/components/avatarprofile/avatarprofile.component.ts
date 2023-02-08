import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-avatarprofile',
  templateUrl: './avatarprofile.component.html',
  styleUrls: ['./avatarprofile.component.scss']
})
export class AvatarprofileComponent implements OnInit {

  @Input() name: String = 'Carolina Fernández' ;
  @Input() id: number | string = "ID:15241dafasa-asffds-sdfasfsdf";

  constructor() { }

  ngOnInit(): void {
  }

}
