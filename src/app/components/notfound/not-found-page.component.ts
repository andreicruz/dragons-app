import { Component, OnInit } from '@angular/core';
import { faHome, faList, faDragon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.sass']
})
export class NotFoundPageComponent implements OnInit {
  faHome = faHome;
  faList = faList;
  faDragon = faDragon;
  
  constructor() { }

  ngOnInit() {
  }

}
