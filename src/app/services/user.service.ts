import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  //Recupera todos los usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/users`);
  }

  //Recupera todos los posts de un usuario
  getPosts(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/user/${id}/posts`);
  }

  //Recupera los posts datos de un solo usuario
  getDataUser(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/users/${id}`);
  }
}
