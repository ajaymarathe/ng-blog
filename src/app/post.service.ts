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
}
