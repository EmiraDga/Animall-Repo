import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-list-back',
  templateUrl: './animal-list-back.component.html',
  styleUrls: ['./animal-list-back.component.css']
})
export class AnimalListBackComponent implements OnInit {
  animal!: Animal[];

  constructor(private animalService: AnimalService, private router: Router ) { }

  ngOnInit(): void {
    this.GetAnimals();
  }


  private GetAnimals(){
    this.animalService.getAll().subscribe(data => {
    this.animal = data;
    });
  }

  updateAnimal(id : number) : void{
    this.router.navigate(["update-animal" , id])
    
      }

      deleteAimal(id : number){
        this.animalService.deleteAnimal(id).subscribe(data => {
          console.log(data);
          this.GetAnimals();
        })
          }
    

}
