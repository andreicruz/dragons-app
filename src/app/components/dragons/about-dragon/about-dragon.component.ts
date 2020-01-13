import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/models/dragon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-dragon',
  templateUrl: './about-dragon.component.html',
  styleUrls: ['./about-dragon.component.sass']
})
export class AboutDragonComponent implements OnInit {
  dragon: Dragon;
  panelOpenState = false;
  showSpinner = false;

  constructor(private dragonService: DragonService, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getDragon(this.route.snapshot.paramMap.get('id'));
  }

  getDragon(id) {
    this.showSpinner = true;
    this.dragonService.getDragon(id).subscribe(data => {
      this.dragon = data
      this.showSpinner = false;
    })
  }

  previousPage() {
    this.location.back();
  }

}
