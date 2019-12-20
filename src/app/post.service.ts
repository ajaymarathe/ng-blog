import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // url = 'http://blogapp.bootcatch.com/api/posts';
  url = 'http://localhost:8000/api/posts';

  constructor(private http: HttpClient) { }

  GetAllPost() {
    return this.http.get(this.url);
  }

  OnePost(slug) {
    return this.http.get(this.url +'/' + slug);
  }


  CreatePost(post) {
    // return this.http.post(this.url, {
    //   title: post[0],
    //   slug: post[0],
    //   description: post[1],
    // });
    return this.http.post(this.url, post);
  }

  UpdatePost(updateData){
    return this.http.patch(this.url +'/' + updateData[2],{
      title: updateData[0],
      slug: updateData[0],
      description: updateData[1],
    });
  }

  // delete post
  DeleteShot(slug) {
    return this.http.delete(this.url +'/' + slug);
  }

  // pagination
  // Get next page
  GetNextPage(nextPage) {
    return this.http.get(nextPage);
  }

  PrevPost(prevPage){
    return this.http.get(prevPage);
  }
}

