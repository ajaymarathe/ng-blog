import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

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

  selectedFile: File;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log('image',this.selectedFile);
  }

  PublishPost() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    uploadData.append('title', this.title);
    uploadData.append('description', this.PostData);

    // const post = [this.title, this.PostData];
    console.log(uploadData);

    this.Post_Service.CreatePost(uploadData)
      .subscribe(
        (response: Response) => {
          console.log(response);
          this.router.navigate(['']);
        },
        (error) => console.log(error)
      );
  }

}
