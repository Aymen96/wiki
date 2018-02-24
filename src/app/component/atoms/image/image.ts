import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-component-atoms-image',
  templateUrl: './image.html',
  styleUrls: ['./image.scss']
})

export class ImageComponent {
    @Input()
      imgSource = '';
    @Input()
      imgAlt = '';
}
