import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMaterialIconModule } from 'ng-material-icon';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DataTablesModule } from 'angular-datatables';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { BaseNavComponent } from './base-nav/base-nav.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import { LimitToPipe } from './limit-to.pipe';

export function getHighlightLanguages() {
  return {
    javascript: () => import('highlight.js/lib/languages/javascript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    BaseNavComponent,
    CreatePostComponent,
    EditPostComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    LimitToPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMaterialIconModule,
    DataTablesModule,
    CKEditorModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
