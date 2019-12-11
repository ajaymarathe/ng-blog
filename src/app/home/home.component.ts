import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service.js';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private PostService: PostService) { }

  responseData;
  posts;

  ngOnInit() {
    this.GetPost();
  }

  GetPost() {
    this.PostService.GetAllPost()
      .subscribe(
        (response: Response) =>{
          this.responseData = response;
          this.posts = Object.keys(this.responseData.data).map((keys) => this.responseData.data[keys]);
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

}
