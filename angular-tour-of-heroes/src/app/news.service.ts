import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsEntry } from './news-entry';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewsService {

  private hackernewsUrl = 'https://hacker-news.firebaseio.com/v0/';
  
  constructor(private http: HttpClient) { };
  
  posts: NewsEntry[] = [];

  load():void {
    const top = this.http.get<number[]>(this.hackernewsUrl+ 'topstories.json');
       
    top.subscribe(ids => {
      ids.splice(0,10).forEach(id=> {
        const story = this.http.get<NewsEntry>(this.hackernewsUrl + 'item/' + id + '.json');
        story.subscribe(entry => {
          this.posts.push(entry);
        });
      });
    });
  }
  
}
