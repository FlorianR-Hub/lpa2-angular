import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsEntry } from '../news-entry';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  @Input() news: NewsEntry;
  
  constructor() { }
  

  ngOnInit() {
  }

}
