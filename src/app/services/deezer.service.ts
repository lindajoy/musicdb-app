import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class MusicService {

    searchUrl: string = "search?q=";
    
    constructor(private httpClient: HttpClient) { }

    SearchArtistByName(artistName: string)
    {
     return this.httpClient.get(this.searchUrl + artistName);
    }
}