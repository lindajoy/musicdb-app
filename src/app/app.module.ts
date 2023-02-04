import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';


import { ArtistsHomePageComponent } from './components/musicHome/artists.home.component';
import { MusicService } from './services/deezer.service';
import { DetailArtistsComponent } from './components/detail-artists/detail-artists.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistsHomePageComponent,
    DetailArtistsComponent
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
    MatCardModule,
    MatGridListModule,
    MatListModule,
    RouterModule
  ],
  providers: [ MusicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
