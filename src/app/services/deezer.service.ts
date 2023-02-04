import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class MusicService {

    searchUrl: string = "search?q=";
    artistDetailsUrl: string = "artist/";
    trailingUlr: string = "/top?limit=10";

    constructor(private httpClient: HttpClient) { }

    searchArtistByName(artistName: string)
    {
     return this.httpClient.get(this.searchUrl + artistName);
    }

    getArtistById(artistId: number)
    {
      return this.httpClient.get(this.artistDetailsUrl + artistId);
    }

    getAristsTopTracks(artistId: string)
    {
     return this.httpClient.get(this.artistDetailsUrl + artistId+ this.trailingUlr );
    }
}