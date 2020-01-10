import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/models/dragon';

@Component({
  selector: 'app-about-dragon',
  templateUrl: './about-dragon.component.html',
  styleUrls: ['./about-dragon.component.sass']
})
export class AboutDragonComponent implements OnInit {
  dragon: Dragon;

  constructor(private dragonService: DragonService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getDragon(this.route.snapshot.paramMap.get('id'));
  }

  getDragon(id) {
    this.dragonService.getDragon(id).subscribe(data => this.dragon = data)
  }

}
