import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseURL = "http://localhost:8080/api/v1/animals"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.baseURL}`);
  }

  createAnimal(animal: Animal): Observable<Animal> {
    console.log("animal in service", animal)
    return this.httpClient.post<Animal>(`${this.baseURL}` + '/add', animal)
      ;
  }


  updateAnimal(id: number, animal: Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(`${this.baseURL}/update/${id}`, animal)
  }
 
  getAnimalById(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${this.baseURL}/${id}`);
  }

}
