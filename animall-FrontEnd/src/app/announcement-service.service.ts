import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from './announcement';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementServiceService {
  private baseURL = "http://localhost:8080/api/v1/Announcement"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Announcement[]>{
    return this.httpClient.get<Announcement[]>(`${this.baseURL}`);

  }
}
