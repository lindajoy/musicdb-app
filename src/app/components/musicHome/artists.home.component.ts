import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { catchError, debounceTime,  of,  Subscription } from 'rxjs';

import { Artist } from 'src/app/interfaces/artist.interface';
import { MusicService } from 'src/app/services/deezer.service';

@Component({
    selector: 'deezer-home-component',
    templateUrl: 'artists.home.component.html',
    styleUrls: ['artists.home.component.scss']
})

export class ArtistsHomePageComponent implements OnInit {
    
    searchControl!: FormControl;
    searchTextformCtrlSub!: Subscription;
    artist!:Artist;
    
    constructor(private _formBuilder: FormBuilder,
                private _router$$: Router,
                private _musicService: MusicService) { }

    ngOnInit() 
    {  
      // Intializes the search Form control.
      // Non-Nullable ensures that we are not dealing with a null value.
      this.searchControl = this._formBuilder.control("", { nonNullable: true });

      // DebounceTime => Avoids multiple calls to the API.
      this.searchControl.valueChanges.pipe(debounceTime(1000))
                         .subscribe(newValue => { 
                            this.searchArtist(newValue)
                          });
    }

    // This function will search for the artist and display the artist on screen.
    searchArtist(artist: string)
    {
      return this._musicService
                  .SearchArtistByName(artist)
                  .pipe(
                    // catchError operator takes as input an Observable that might error out.
                    catchError(err => of([])))
                 .subscribe((artist) => {
                   this.createArtistObject(artist);
                 });
    }


    createArtistObject(artist: any)
    {
      this.artist = {
            name: artist?.data[0]?.artist?.name,
            picture: artist?.data[0]?.artist?.picture_medium,
            fans: artist?.total
      } as Artist

      return this.artist;
    }

    goToDetail()
    {
     
    }
}        