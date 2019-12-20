import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private _location: Location) { }

  CurrentRoute = this.router.url;

  ngOnInit() {
    console.log(this.router.url);
  }

  backClicked() {
    this._location.back();
  }
}
