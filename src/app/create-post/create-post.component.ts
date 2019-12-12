import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service.js';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private Post_Service: PostService) { }

  title;
  PostData;

  ngOnInit() {
  }

  PublishPost() {
    const post = [this.title, this.PostData];
    console.log(post);

    this.Post_Service.CreatePost(post)
      .subscribe(
        (response: Response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

}
