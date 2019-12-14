import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

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
  constructor(private PostService: PostService, private http: HttpClient) { }
  responseData;
  posts;

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
          this.posts = Object.keys(this.responseData.data).map((keys) => this.responseData.data[keys]);
          console.log(response);
        },
        (error) => console.log(error)
      );
  }

}
