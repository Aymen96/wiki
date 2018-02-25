import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.html',
  styleUrls: ['./article-body.scss']
})
export class ArticleBodyComponent {
    @Input()
      pubImg = '';
}
