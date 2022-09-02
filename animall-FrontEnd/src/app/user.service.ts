import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/api/v1/users"

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<UserDto[]> {
    return this.httpClient.get<UserDto[]>(`${this.baseURL}`);
  }

  createUser(user: UserDto): Observable<UserDto> {
    console.log("user in service", user)
    return this.httpClient.post<UserDto>(`${this.baseURL}` + '/add', user)
      ;
  }

  updateUser(id: number, user: UserDto): Observable<UserDto> {
    return this.httpClient.put<UserDto>(`${this.baseURL}/update/${id}`, user)
  }
 
  getUserById(id: number): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${this.baseURL}/${id}`);
  }

  deleteUser(id : number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);

  }

}
