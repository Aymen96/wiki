import {Component, Input} from '@angular/core';
import {falseIfMissing} from 'protractor/built/util';

@Component({
  selector: 'app-component-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})

export class HeaderComponent {
    public showDropDownContent = false;

}
