import { Component, OnInit } from '@angular/core';
import { UserDto } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router'
import { data } from 'autoprefixer';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  id!: number;
  user: UserDto = new UserDto();

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //get id from a particular route
    this.id=this.route.snapshot.params['id'];
    
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    },error => console.log(error) );
  }
  

  onSubmit(){
    this.userService.updateUser(this.id,this.user).subscribe(data => {console.log(data);
    this.user = new UserDto();
    this.goToUserList();
    },error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }



}
