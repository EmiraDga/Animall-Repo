import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: UserDto[];

  constructor(private UserService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.GetUsers();

  }

  private GetUsers(){
    this.UserService.getAll().subscribe(data => {
    this.users = data;
    });
  }

  updateUser(id : number) : void{
this.router.navigate(["update-user" , id])

  }

  deleteUser(id : number){
this.UserService.deleteUser(id).subscribe(data => {
  console.log(data);
  this.GetUsers();
})
  }

}
