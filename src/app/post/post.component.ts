import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service.js';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private Post_Service: PostService, private route: ActivatedRoute, private location: Location) { }
  post;

  ngOnInit() {
    this.GetOnePost();
  }

  GetOnePost() {
    const slug = this.route.snapshot.params.id;
    this.Post_Service.OnePost(slug)
      .subscribe(
        (response: Response) => {
          this.post = response;
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  // delete post
  DeletePost(slug) {
    console.log(slug);
    this.Post_Service.DeleteShot(slug)
      .subscribe(
        (response: Response) =>{
          this.post = response;
          console.log(response);
        },
        (error) => {
          console.log(error);
          this.location.back();
        }
      );
  }

}
