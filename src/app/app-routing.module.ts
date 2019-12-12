import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {CreatePostComponent} from './create-post/create-post.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'create', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
