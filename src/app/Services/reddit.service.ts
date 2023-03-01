import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditModel } from '../Models/reddit-model';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  //aww/.json take out for extended
  url:string = "https://www.reddit.com/r";
  constructor(private http:HttpClient) { }
  getReddit(subreddit:string):Observable<RedditModel>{//data type contains no value until it recognizes change.
    //I am nothing until a model is passed to me once heard, 
    return this.http.get<RedditModel>(`${this.url}/${subreddit}/.json`); //this http calls the client to go to this url and get the json data
  }
  
}
