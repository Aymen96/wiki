import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-foot',
  templateUrl: './article-foot.html',
  styleUrls: ['./article-foot.scss']
})
export class ArticleFootComponent {

  public liked = false;
  public commented = false;
  public starred = false;

}
