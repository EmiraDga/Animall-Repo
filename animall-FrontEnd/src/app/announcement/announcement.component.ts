import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { Announcement } from '../announcement';
import { AnnouncementServiceService } from '../announcement-service.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
announcement!: Announcement[];
animal!: Animal[];

  constructor(private announcementService: AnnouncementServiceService, private router: Router ) { }

  ngOnInit(): void {
    this.GetAnnouncement();

  }


  private GetAnnouncement(){
    this.announcementService.getAll().subscribe(data => {
    this.announcement = data;
    });
  }
}
