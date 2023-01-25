import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'deezer-home-component',
    templateUrl: 'artists.home.component.html',
    styleUrls: ['artists.home.component.scss']
})

export class ArtistsHomePageComponent implements OnInit {

    searchForm!: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() 
    { 
        this.searchForm = this._fb.group({
            artistName: ["", {nonNullable: true}]
        })

        console.log('😁', this.searchForm);
    }
}