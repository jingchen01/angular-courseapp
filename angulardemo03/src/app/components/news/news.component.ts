import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title: string;
  content: string;
  username: string;
  user01: User = new User();
  htmlContent: string;


  constructor() { 
    this.title = 'This is a news component.';
    this.content = 'This is the news content.';
    this.username = 'Smith';

    this.user01.name = 'Andy';

    this.htmlContent = '<h3>This is an inner html.</h3>'
  }

  ngOnInit(): void {
  }

}
