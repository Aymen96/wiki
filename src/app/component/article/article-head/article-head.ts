import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-head',
  templateUrl: './article-head.html',
  styleUrls: ['./article-head.scss']
})
export class ArticleHeadComponent {
    @Input()
      public publisher = 'Anonym';
    @Input()
      public publishDate = '23.02.2018';
    @Input()
      public isVisibleToAll = true;
}
