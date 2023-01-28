import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime,  Subscription } from 'rxjs';
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
    artist:any;
    
    constructor(private _formBuilder: FormBuilder,
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
      return this._musicService.SearchArtistByName(artist)
                 .subscribe(artists => {console.log('😁',artists)});
    }



}        