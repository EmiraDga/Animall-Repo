import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { Announcement } from '../announcement';
import { AnnouncementServiceService } from '../announcement-service.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {
  announcement: Announcement = new Announcement();
  animal: Animal = new Animal();

  constructor(private announcementService: AnnouncementServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.announcement);
    this.SaveAnnouncement();
  }

  SaveAnnouncement() {
    this.announcementService.createAnnouncement(this.announcement).subscribe(data => {
      console.log(this.announcement);
      this.goToUserList();
    },
      error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }


}
