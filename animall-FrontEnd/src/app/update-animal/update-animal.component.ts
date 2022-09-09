import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {
  
  id!: number;
  animal: Animal = new Animal();
  constructor(private animalService: AnimalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
    this.animalService.getAnimalById(this.id).subscribe(data => {
      this.animal = data;
    },error => console.log(error) );
  }

  onSubmit(){
    this.animalService.updateAnimal(this.id,this.animal).subscribe(data => {console.log(data);
    this.animal = new Animal();
    this.goToAnimalList();
    },error => console.log(error));
  }

  goToAnimalList() {
    this.router.navigate(['/animals']);
  }



}
