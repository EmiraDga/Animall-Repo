import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import{CreateUserComponent} from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AnimalCreateComponent } from './animal-create/animal-create.component'
import { AnimalListBackComponent } from './animal-list-back/animal-list-back.component';
import { FullComponent } from './full/full.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';

const routes: Routes = [
  {path: '' , component:FullComponent},
  {path: 'animals' , component:AnimalListBackComponent },
   {path: 'users' , component:UserListComponent },
   {path: 'create-user' , component:CreateUserComponent },
   {path: 'update-user/:id' , component:UpdateUserComponent },
   {path: 'update-animal/:id' , component:UpdateAnimalComponent },
   {path: 'delete-user/:id' , component:UpdateUserComponent },
   {path: 'create-animal' , component:AnimalCreateComponent},
   {path: '', redirectTo:'users' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
