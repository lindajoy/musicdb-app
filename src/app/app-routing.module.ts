import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArtistsComponent } from './components/detail-artists/detail-artists.component';
import { ArtistsHomePageComponent } from './components/musicHome/artists.home.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsHomePageComponent
  },
  {
    path: 'artist-details',
    component:  DetailArtistsComponent 
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
