import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Location} from '@angular/common';

declare var $;

class Person {
  id: number;
  title: string;
  description: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[];

  // private PostService: PostService,
  constructor(private PostService: PostService, private http: HttpClient, private location: Location) { }
  responseData;
  posts;
  paginate;

  ngOnInit(): void {
    this.AllData();
    this.EnableSidebar();
  }

  EnableSidebar(){
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
  }

  AllData() {
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

  // delete post
  DeletePost(slug) {
    console.log(slug);
    this.PostService.DeleteShot(slug)
      .subscribe(
        (response: Response) =>{
          console.log(response);
        },
        (error) => {
          console.log(error);
          this.AllData();
        }
      );
  }

}
