import { Component, OnInit } from '@angular/core';
import { faDragon, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/models/dragon';
import { MatDialog } from '@angular/material/dialog';
import { EditDragonsComponent } from 'src/app/components/dragons/edit-dragons/edit-dragons.component';
import { RemoveDragonsComponent } from 'src/app/components/dragons/remove-dragons/remove-dragons.component';

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

  constructor(private dragonService: DragonService, public dialog: MatDialog) { }

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

  openEditModal(dragon) {
    const dialogRef = this.dialog.open(EditDragonsComponent, {
      width: '500px',
      height: '300px',
      data: {
        id: dragon.id,
        createdAt: dragon.createdAt,
        name: dragon.name,
        type: dragon.type,
        histories: dragon.histories
      }
    });

    dialogRef.componentInstance.editDragonEvent.subscribe(() => {
      this.getDragons();
    })
  }

  openDeleteModal(dragon){
    const dialogRef = this.dialog.open(RemoveDragonsComponent, {
      width: '220px',
      height: '150px',
      data: {
        id: dragon.id,
        createdAt: dragon.createdAt,
        name: dragon.name,
        type: dragon.type,
        histories: dragon.histories
      }
    });

    dialogRef.componentInstance.removeDragonEvent.subscribe(() => {
      this.getDragons();
    })
  }
}
