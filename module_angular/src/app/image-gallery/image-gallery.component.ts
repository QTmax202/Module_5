import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from "./token";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  listImage = [
    'https://i.pinimg.com/564x/ee/df/d6/eedfd6ed146fa63d8d5c398f98947974.jpg',
    'https://i.pinimg.com/236x/21/4d/6c/214d6ce2ff6e3d45b8e0a67e73c29de3.jpg',
    'https://i.pinimg.com/236x/19/7b/ea/197beaca0c40da61d166e79d8a9a0539.jpg',
    'https://i.pinimg.com/236x/a5/01/3e/a5013edaadefe5a41cc7d180d6f53576.jpg'
  ];

  itemWidth?: number;
  config = 4;

  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config?: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

}
