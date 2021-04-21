import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { TwitterCardComponent } from './twitter-card/twitter-card.component';
import { YoutubeCarouselComponent } from './youtube-carousel/youtube-carousel.component';
import { UserComponent } from './user/user.component';
import { DashComponent } from './dash/dash.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutSectionComponent,
    NavBarComponent,
    NewsCardComponent,
    SiteFooterComponent,
    TwitterCardComponent,
    YoutubeCarouselComponent,
    UserComponent,
    DashComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
