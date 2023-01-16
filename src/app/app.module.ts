import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { RepositoriesComponent } from './user/repositories/repositories.component';
import { RepoTitleComponent } from './user/repositories/repo-title/repo-title.component';
import { RepoDescriptionComponent } from './user/repositories/repo-description/repo-description.component';
import { RepoTagsComponent } from './user/repositories/repo-tags/repo-tags.component';
import { UserNameComponent } from './user/user-detail/user-name/user-name.component';
import { UserAvatarComponent } from './user/user-detail/user-avatar/user-avatar.component';
import { UserBioComponent } from './user/user-detail/user-bio/user-bio.component';
import { UserSocialMediaHandlesComponent } from './user/user-detail/user-social-media-handles/user-social-media-handles.component';
import { UserLocationComponent } from './user/user-detail/user-location/user-location.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    RepositoriesComponent,
    RepoTitleComponent,
    RepoDescriptionComponent,
    RepoTagsComponent,
    UserNameComponent,
    UserAvatarComponent,
    UserBioComponent,
    UserSocialMediaHandlesComponent,
    UserLocationComponent,
    NotfoundComponent,
    IndexPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    NgHttpLoaderModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
