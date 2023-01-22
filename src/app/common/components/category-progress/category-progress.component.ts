import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-progress',
  templateUrl: './category-progress.component.html',
  styleUrls: ['./category-progress.component.scss']
})
export class CategoryProgressComponent implements OnInit {
  @Input() picture: string = "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960";
  @Input() height: string = '40px';
  @Input() width: string = '40px';
  @Input() title: string = 'Deportes';
  @Input() label: string = 'Interés destacado';
  @Input() labelProgress: string = 'Alcance del';
  @Input() valueProgress: string = '65%'
  constructor() { }

  ngOnInit(): void {
  }

}
