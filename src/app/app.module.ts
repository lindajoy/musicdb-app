import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { ArtistsHomePageComponent } from './components/musicHome/artists.home.component';
import { MusicService } from './services/deezer.service';
import { ArtistDetailsComponent } from './components/artistDetails/artist.detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsHomePageComponent
  },
  {
    path: '/hello',
    component: ArtistDetailsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ArtistsHomePageComponent,
    ArtistDetailsComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [ MusicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
