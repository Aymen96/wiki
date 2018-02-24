import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-component-atoms-logo',
  templateUrl: './logo.html',
  styleUrls: ['./logo.scss']
})

export class LogoComponent {
  @Input()
    logoSource = '';
  @Input()
    logoAlt = '';
  @Input()
    logoSize = '';
}
