import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private baseURL = "http://localhost:8080/api/v1/category"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`);

  }
}
