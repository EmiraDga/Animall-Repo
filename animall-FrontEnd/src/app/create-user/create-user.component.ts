import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { UserDto } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: UserDto = new UserDto();
  constructor(private userService: UserService, private router: Router
  ) { }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(this.user);
      this.goToUserList();
    },
      error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }



}
