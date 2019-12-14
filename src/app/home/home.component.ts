import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private PostService: PostService) { }

  responseData;
  paginate;
  posts;

  ngOnInit() {
    this.GetPost();
  }

  GetPost() {
    this.PostService.GetAllPost()
      .subscribe(
        (response: Response) =>{
          this.responseData = response;
          this.paginate = response;
          this.posts = Object.keys(this.responseData.data).map((keys) => this.responseData.data[keys]);
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  // Next page
  NextPage() {
    const nextPage = this.paginate.links.next;
    this.PostService.GetNextPage(nextPage)
      .subscribe(
        (response: Response) => {
          this.paginate = response;
          this.posts = Object.keys(this.paginate.data).map((keys) => this.paginate.data[keys]);
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

  // previous page
  PreviousPage() {
    const prevPage = this.paginate.links.prev;
    console.log(prevPage);
    this.PostService.PrevPost(prevPage)
      .subscribe(
        (response: Response) => {
          this.paginate = response;
          this.posts = Object.keys(this.paginate.data).map((keys) => this.paginate.data[keys]);
          console.log(response);
        },
        (error) => console.log(error)
      );
  }



}
