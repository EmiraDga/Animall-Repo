import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';
import { Announcement } from '../announcement';
import { AnnouncementServiceService } from '../announcement-service.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals!: Animal[];
  announcement!: Announcement[];
  announcementOb : Announcement = new Announcement();

  constructor(private animalService: AnimalService, private router: Router,private announcementService: AnnouncementServiceService , annoucementclass : Announcement ) { }

  ngOnInit(): void {
    this.GetAnimals();
   this.GetAnnouncement();
  }

  public GetAnimals(){
    this.animalService.getAll().subscribe(data => {
    this.animals = data;
    });
  }

  private GetAnnouncement(){
    this.announcementService.getAll().subscribe(data => {
    this.announcement = data;
    });
  }




}
