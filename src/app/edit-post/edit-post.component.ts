import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {ActivatedRoute} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(
              private Post_Service: PostService,
              private route: ActivatedRoute,
              private location: Location
  ) { }
  post;

  ngOnInit() {
    this.GetOnePost();
  }

  GetOnePost() {
    const slug = this.route.snapshot.params.id;
    this.Post_Service.OnePost(slug)
      .subscribe(
        (response: Response) =>{
          this.post = response;
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  EditPost() {
    const UpdateData = [this.post.title, this.post.description, this.route.snapshot.params.id];
    // console.log(UpdateData);
    this.Post_Service.UpdatePost(UpdateData)
      .subscribe(
        (response: Response) => {
          console.log('this is res', response);
        },
        (error) => {
          console.log(error);
          // this.location.back();
          window.history.go(-2);
        }
      );
  }

}
