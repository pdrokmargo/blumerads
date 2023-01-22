import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-featured',
  templateUrl: './category-featured.component.html',
  styleUrls: ['./category-featured.component.scss']
})
export class CategoryFeaturedComponent implements OnInit {
  @Input() picture: string = "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960";
  @Input() height: string = '50px';
  @Input() width: string = '50px';
  @Input() title: string = 'NFTs';
  @Input() label: string = 'Interés destacado';
  @Input() labelProgress: string = 'Alcance del';
  @Input() valueProgress: string = '65%'
  constructor() { }

  ngOnInit(): void {
  }

}
