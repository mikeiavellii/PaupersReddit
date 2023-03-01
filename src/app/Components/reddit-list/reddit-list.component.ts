import { Component } from '@angular/core';
import { RedditModel } from 'src/app/Models/reddit-model';
import { RedditService } from 'src/app/Services/reddit.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent {


  constructor(private redditService:RedditService){}//we now have access to get the info from the reddit api
  //next take data and save in vairable
  result:RedditModel = {} as RedditModel;
  search:string = "aww";
  status:string = ""; //if subreddit not there display this

  //removed for extended
  // ngOnInit(){//getReddit makes an observable response's name is response
  //   this.redditService.getReddit(this.search).subscribe((response:RedditModel) =>{
  //     this.result = response;
  //     console.log(response);
  //   });
  // }
  ngOnInit(){
    this.searchSubreddit();
  }


  searchSubreddit(){
    this.redditService.getReddit(this.search).subscribe((response:RedditModel) =>{
      this.result = response;
      this.result.data.children.splice(10);//splice off results to only include 10 posts remove if not using
      this.status = "";
    },
    (error) => {
      console.log(error)
      this.status = `${this.search} is not a subrredit`;
    }
    
    );
  
  }
}
