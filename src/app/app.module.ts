import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import {
  MatButtonModule,
  MatCardModule,
  // MatGridListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ChipsInputComponent } from './shared/chips-input/chips-input.component';
import { TagService } from './services/tag.service';
import { PostService } from './services/post.service';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { CommentComponent } from './shared/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ChipsInputComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    PostCardComponent,
    CommentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [UserService, TagService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
