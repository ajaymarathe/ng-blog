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
}
