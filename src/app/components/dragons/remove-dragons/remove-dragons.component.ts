import { Component, OnInit, Inject, EventEmitter} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-remove-dragons',
  templateUrl: './remove-dragons.component.html',
  styleUrls: ['./remove-dragons.component.sass']
})
export class RemoveDragonsComponent implements OnInit {
  removeDragonEvent = new EventEmitter();

  constructor(private dragonService: DragonService, 
             @Inject(MAT_DIALOG_DATA) public matDialogData: Dragon,
             public dialog: MatDialogRef<Dragon>) { }

  ngOnInit() {
  }

  removeDragon(){
    this.dragonService.removeDragon(this.matDialogData).subscribe(() => {
      this.removeDragonEvent.emit();
    },
    (err: HttpErrorResponse) => {
      alert('There was an error deleting the dragon.');
    });
    this.closeModal();
  }

  closeModal(){
    this.dialog.close();
  }
}
