import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ArticleComponent} from './component/article/article';
import {ArticleBodyComponent} from './component/article/article-body/article-body';
import {ArticleFootComponent} from './component/article/article-foot/article-foot';
import {ArticleHeadComponent} from './component/article/article-head/article-head';
import {LogoComponent} from './component/atoms/logo/logo';
import {ImageComponent} from './component/atoms/image/image';
import {HeaderComponent} from './component/header/header';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleBodyComponent,
    ArticleFootComponent,
    ArticleHeadComponent,
    LogoComponent,
    ImageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
