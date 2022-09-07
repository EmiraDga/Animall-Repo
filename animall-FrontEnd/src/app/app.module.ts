import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalListBackComponent } from './animal-list-back/animal-list-back.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FullComponent } from './full/full.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AnimalCreateComponent } from './animal-create/animal-create.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component'; 
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    AnimalListComponent,
    AnimalListBackComponent,
    AnnouncementComponent,
    HeaderComponent,
    FooterComponent,
    FullComponent,
    HomeComponent,
    CategoryComponent,
    AddAnnouncementComponent,
    AnimalCreateComponent,
    AnnouncementDetailComponent,
    UpdateAnimalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
