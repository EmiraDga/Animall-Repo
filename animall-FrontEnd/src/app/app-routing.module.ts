import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import{CreateUserComponent} from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AnimalCreateComponent } from './animal-create/animal-create.component'
import { AnimalListBackComponent } from './animal-list-back/animal-list-back.component';
import { FullComponent } from './full/full.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import{AnnouncementComponent} from './announcement/announcement.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { DonationComponent } from './donation/donation.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path: '' , component:FullComponent},
  {path: 'animals' , component:AnimalListBackComponent },
  {path: 'announcement' , component:AnnouncementComponent },
  {path: 'announcement-detail' , component:AnnouncementDetailComponent},
   {path: 'users' , component:UserListComponent },
   {path: 'create-user' , component:CreateUserComponent },
   {path: 'update-user/:id' , component:UpdateUserComponent },
   {path: 'update-animal/:id' , component:UpdateAnimalComponent },
   {path: 'delete-user/:id' , component:UpdateUserComponent },
   {path: 'add-announcement' , component:AddAnnouncementComponent },
   {path: 'create-animal' , component:AnimalCreateComponent},
   {path: 'donation' , component: DonationComponent},
   {path: 'about' , component: AboutComponent},
   {path: '', redirectTo:'users' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
