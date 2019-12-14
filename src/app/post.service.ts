import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  GetAllPost() {
    return this.http.get('http://localhost:8000/api/posts/');
  }

  OnePost(slug) {
    return this.http.get('http://localhost:8000/api/posts/' + slug);
  }


  CreatePost(post) {
    return this.http.post('http://localhost:8000/api/posts/', {
      title: post[0],
      slug: post[0],
      description: post[1],
    });
  }

  UpdatePost(updateData){
    return this.http.patch('http://localhost:8000/api/posts/' + updateData[2],{
      title: updateData[0],
      slug: updateData[0],
      description: updateData[1],
    });
  }

  // delete post
  DeleteShot(slug) {
    return this.http.delete('http://localhost:8000/api/posts/' + slug);
  }


  // pagination
  // Get next page
  GetNextPage() {
    return this.http.get('http://localhost:8000/api/posts?page=2');
  }

  PrevPost(){
    return this.http.get('http://localhost:8000/api/posts?page=1');
  }
}

