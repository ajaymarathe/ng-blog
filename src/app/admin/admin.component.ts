import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Location} from '@angular/common';

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
    // const that = this;

    // this.dtOptions = {
    //   // pagingType: 'full_numbers',
    //   // pageLength: 20,
    //   // serverSide: true,
    //   // processing: true,
    //   ajax: (dataTablesParameters: any, callback) => {
    //     that.http
    //       .get<DataTablesResponse>(
    //         'http://localhost:8000/api/posts/',
    //         dataTablesParameters, {}
    //       ).subscribe(resp => {
    //       that.persons = resp.data;
    //
    //       callback({
    //         recordsTotal: resp.meta.total,
    //         recordsFiltered: resp.meta.total,
    //         data: []
    //       });
    //     });
    //   },
    //   columns: [{ data: 'id' }, { data: 'title' }, { data: 'description' }]
    // };
    this.AllData();
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
