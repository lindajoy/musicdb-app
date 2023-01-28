import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsHomePageComponent } from './components/musicHome/artists.home.component';
import {  ArtistDetailsComponent } from './components/artistDetails/artist.detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsHomePageComponent
  },
  {
    path: 'hello',
    component: ArtistDetailsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
