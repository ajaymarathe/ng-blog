import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'base-nav',
  templateUrl: './base-nav.component.html',
  styleUrls: ['./base-nav.component.scss']
})
export class BaseNavComponent implements OnInit {

  constructor(private router: Router, private _location: Location) { }

  CurrentRoute = this.router.url;

  ngOnInit() {
    console.log(this.router.url);
  }

  backClicked() {
    this._location.back();
  }

}
