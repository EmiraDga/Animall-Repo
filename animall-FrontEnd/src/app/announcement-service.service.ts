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

  createAnnouncement(announcement: Announcement): Observable<Announcement> {
    console.log("announcement in service", announcement)
    return this.httpClient.post<Announcement>(`${this.baseURL}` + '/add', announcement)
      ;
  }

  updateAnnouncement(id: number, announcement: Announcement): Observable<Announcement> {
    return this.httpClient.put<Announcement>(`${this.baseURL}/update/${id}`, announcement)
  }
 
  getAnnouncementById(id: number): Observable<Announcement> {
    return this.httpClient.get<Announcement>(`${this.baseURL}/${id}`);
  }

  deleteAnnouncement(id : number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);

  }
}
