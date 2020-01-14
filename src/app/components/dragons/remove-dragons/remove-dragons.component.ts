import { Component, OnInit, Inject, EventEmitter} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-remove-dragons',
  templateUrl: './remove-dragons.component.html',
  styleUrls: ['./remove-dragons.component.sass']
})
export class RemoveDragonsComponent implements OnInit {
  removeDragonEvent = new EventEmitter();

  constructor(private dragonService: DragonService,
              @Inject(MAT_DIALOG_DATA) public matDialogData: Dragon,
              public dialog: MatDialogRef<Dragon>,
              public matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  removeDragon(){
    this.dragonService.removeDragon(this.matDialogData).subscribe(() => {
      this.removeDragonEvent.emit();
      this.snackOpen('Dragon deleted!', 'Close', 'success-snackbar');
    },
    (err: HttpErrorResponse) => {
      this.snackOpen('There was an error during deleting the dragon.', 'Close', 'alert-snackbar');
    });
    this.closeModal();
  }

  closeModal(){
    this.dialog.close();
  }

  snackOpen(message: string, action: string, nameClass: string){
    this.matSnackBar.open(message, action, {
      duration: 2000,
      panelClass: nameClass
    });
  }

}
