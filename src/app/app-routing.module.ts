import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArtistsComponent } from './components/detail-artists/detail-artists.component';
import { ArtistsHomePageComponent } from './components/musicHome/artists.home.component';


// Added dynamic page titles as per this article: 
// Ref: https://dev.to/brandontroberts/setting-page-titles-natively-with-the-angular-router-393j#:~:text=First%2C%20you%20would%20use%20the,the%20title%20for%20the%20page.&text=Next%2C%20you%20would%20add%20code,to%20set%20the%20page%20title.

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: ArtistsHomePageComponent,
    title: "Deezer Home Page"
  },

  {
    path: 'artist-details/:id',
    component:  DetailArtistsComponent,
    title: 'Artist Details Page'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
