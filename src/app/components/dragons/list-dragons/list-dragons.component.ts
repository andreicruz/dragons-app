import { Component, OnInit } from '@angular/core';
import { faDragon, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/models/dragon';

@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.sass']
})
export class ListDragonsComponent implements OnInit {
  faDragon = faDragon;
  faPen = faPen;
  faTrash = faTrash;
  dragons: Dragon[];

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragons();
  }

  getDragons() {
    this.dragonService.getDragons().subscribe(data => {
      this.dragons = data.sort((a, b) => a.name.localeCompare(b.name))
      this.dragons.forEach(dragon => {
        dragon.color = this.generateColor();
      })
    })
  }

  generateColor(): string{
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
