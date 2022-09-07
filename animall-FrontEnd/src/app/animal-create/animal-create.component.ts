import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {
  animal: Animal = new Animal();

  constructor(private animalService: AnimalService , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.animal);
    this.saveAnimal();
  }

  saveAnimal() {
    this.animalService.createAnimal(this.animal).subscribe(data => {
      console.log(this.animal);
      this.goToAnimalList();
    },
      error => console.log(error));
  }

  goToAnimalList() {
    this.router.navigate(['/animals']);
  }


}
