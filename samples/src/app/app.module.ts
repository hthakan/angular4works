import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    PostsComponent,
    NotFoundComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: 'followers/:username', component: GithubProfileComponent },
      // { path: 'followers/:id', component: GithubProfileComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },     
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],

  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
