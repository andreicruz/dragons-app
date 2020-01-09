import { Component, OnInit } from '@angular/core';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/models/dragon';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.sass']
})
export class ListDragonsComponent implements OnInit {
  faDragon = faDragon;
  dragons: Dragon[];

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragons();
  }

  getDragons() {
    this.dragonService.getDragons().subscribe(data => {
      this.dragons = data;
      console.log(this.dragons)
    })
  }

}
