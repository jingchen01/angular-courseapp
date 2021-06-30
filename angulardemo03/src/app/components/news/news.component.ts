import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title: string;
  content: string;
  user: string;

  constructor() { 
    this.title = 'This is a news component.';
    this.content = 'This is the news content.';
    this.user = 'Smith';
  }

  ngOnInit(): void {
  }

}
