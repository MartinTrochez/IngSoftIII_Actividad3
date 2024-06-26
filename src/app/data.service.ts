import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  filterPost(filterText: string): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?q=${filterText}`);
  }

  createPost(postData: { title: string; body: string; userId: number }): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }

  updatePost(id: number, postData: { title: string; body: string; userId: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, postData);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
