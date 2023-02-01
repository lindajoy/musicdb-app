import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'musicApp'
  header!: string


  constructor(private router: Router,
              private _activatedRoute: ActivatedRoute){}

  ngOnInit()
  {
    this.setPageHeader();
  }

  setPageHeader()
  {
    const path = this.router.url.split('/')[1];
    this.header= decodeURIComponent(path);

    // Convert to shortHand Function
    if (this.header === '' || 'home')
    {
      return 'Artist Search Application';
    }
    else 
    {
      return 'Artist Detail Page';
    }
  }
}
