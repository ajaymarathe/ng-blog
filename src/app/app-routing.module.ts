import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './auth/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
