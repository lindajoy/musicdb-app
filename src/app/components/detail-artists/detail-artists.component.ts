import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


import { MusicService } from 'src/app/services/deezer.service';

@Component({
  selector: 'app-detail-artists',
  templateUrl: './detail-artists.component.html',
  styleUrls: ['./detail-artists.component.scss']
})
export class DetailArtistsComponent implements OnInit {

  artist: any;
  tracks!: any[]

  constructor(private _activatedRoute: ActivatedRoute,
              private  _musicService: MusicService,
              private httpClient: HttpClient) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
       this._musicService.getArtistById(params['id']).subscribe((artist) => {
        this.artist = artist;
        console.log(params['id'])
        this.getTrackList(params['id'])});
      });
  }

  getTrackList(trackList: string)
  {
    this._musicService.getAristsTopTracks(trackList).subscribe((tracks:any) => {
      console.log(tracks.data);
      debugger
    this.tracks =(tracks.data);
   });
  }


}
