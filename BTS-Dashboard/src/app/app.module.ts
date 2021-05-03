import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { TwitterCardComponent } from './twitter-card/twitter-card.component';
import { YoutubeCarouselComponent } from './youtube-carousel/youtube-carousel.component';
import { UserComponent } from './user/user.component';
import { DashComponent } from './dash/dash.component';
import { SettingsComponent } from './settings/settings.component';
import { SpotifyCardComponent } from './spotify-card/spotify-card.component';
import { TrendingTweetsComponent } from './user-components/trending-tweets/trending-tweets.component';
import { RegionalTweetsComponent } from './user-components/regional-tweets/regional-tweets.component';
import { TimeTweetsComponent } from './user-components/time-tweets/time-tweets.component';
import { RegionalSpotifyComponent } from './user-components/regional-spotify/regional-spotify.component';
import { TwitterLikesComponent } from './user-components/twitter-likes/twitter-likes.component';
import { TwitterRetweetsComponent } from './user-components/twitter-retweets/twitter-retweets.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutSectionComponent,
    NavBarComponent,
    SiteFooterComponent,
    TwitterCardComponent,
    YoutubeCarouselComponent,
    UserComponent,
    DashComponent,
    SettingsComponent,
    SpotifyCardComponent,
    TrendingTweetsComponent,
    RegionalTweetsComponent,
    TimeTweetsComponent,
    RegionalSpotifyComponent,
    TwitterLikesComponent,
    TwitterRetweetsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    
  ],
  providers: [SettingsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
