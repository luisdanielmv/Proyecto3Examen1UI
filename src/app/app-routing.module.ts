import { OwnedPostsComponent } from './owned-posts/owned-posts.component';
import { PreferredPostsComponent } from './preferred-posts/preferred-posts.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'createPost',
    component: CreatePostComponent
  },
  {
    path: 'liked',
    component: LikedPostsComponent
  },
  {
    path: 'preferred',
    component: PreferredPostsComponent
  },
  {
    path: 'owned',
    component: OwnedPostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
