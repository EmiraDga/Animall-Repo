import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals!: Animal[];

  constructor(private animalService: AnimalService, private router: Router ) { }

  ngOnInit(): void {
    this.GetAnimals();
  }

  public GetAnimals(){
    this.animalService.getAll().subscribe(data => {
    this.animals = data;
    });
  }


}
