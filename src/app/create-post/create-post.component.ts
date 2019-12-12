import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service.js';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor(private Post_Service: PostService, private router: Router) { }

  title;
  PostData = 'Start writing here...';

  ngOnInit() {
  }

  PublishPost() {
    const post = [this.title, this.PostData];
    console.log(post);

    this.Post_Service.CreatePost(post)
      .subscribe(
        (response: Response) => {
          console.log(response);
          this.router.navigate(['']);
        },
        (error) => console.log(error)
      );
  }

}