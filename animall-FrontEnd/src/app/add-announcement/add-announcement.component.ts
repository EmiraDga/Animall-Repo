import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { Announcement } from '../announcement';
import { AnnouncementServiceService } from '../announcement-service.service';
import { UserDto } from '../user';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AnimalService } from '../animal.service';
import { data } from 'autoprefixer';
import { Category } from '../category';
import { CategoryServiceService } from '../category-service.service';
@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {
  announcement: Announcement = new Announcement();
  anim: Animal = new Animal();
  animal!: Animal[];
  categories!: Category[];


user: UserDto=new UserDto();
  constructor(private announcementService: AnnouncementServiceService, private router: Router, public animalService : AnimalService, public categoryService :CategoryServiceService) { }

  ngOnInit(): void {
this.GetCategories();
  }

  onSubmit() {
    console.log(this.announcement);
    this.SaveAnnouncement();
  }

  SaveAnnouncement() {
    this.announcementService.createAnimalAnnouncement(this.announcement).subscribe(data => {
      console.log(this.announcement);
      this.goToAnnouncementList();
    },
      error => console.log(error));
  }

  public GetCategories(){
    this.categoryService.getAll().subscribe(data => {
    this.categories = data;
    });
  }


  goToAnnouncementList() {
    this.router.navigate(['/announcement']);

  }


}
