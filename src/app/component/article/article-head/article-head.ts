import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article-head',
  templateUrl: './article-head.html',
  styleUrls: ['./article-head.scss']
})
export class ArticleHeadComponent {
    @Input()
      public publisher = '';
    @Input()
      public publishDate = '';
    @Input()
      public isVisibleToAll = true;
    @Input()
      public publisherImg = '';
}
