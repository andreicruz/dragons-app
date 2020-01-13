import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-dragons',
  templateUrl: './create-dragons.component.html',
  styleUrls: ['./create-dragons.component.sass']
})
export class CreateDragonsComponent implements OnInit {
  dragon: Dragon;
  dragonHistories: any[] = [];
  createForm: FormGroup;
  minLength = 2;
  maxLength = 20;

  constructor(private dragonService: DragonService, 
              private formBuilder: FormBuilder,
              private location: Location,
              public matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.validateForm();
  }

  validateForm(){
    this.createForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
      type: this.formBuilder.control('', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
      histories: []
    });
  }


  newHistory(){
    this.dragonHistories.push(this.createForm.controls.histories.value);
    this.createForm.controls.histories.setValue('');
  }

  createDragon() {
    const creationDragonrDate = new Date().toISOString();
    const dragon = {
      id: '',
      createdAt: creationDragonrDate.toString(),
      name: this.createForm.get('name').value,
      type: this.createForm.get('type').value,
      histories: this.dragonHistories
    };

    this.dragonService.createDragon(dragon).subscribe(
      res => {
        this.snackOpen('A new Dragon was created.', 'Close', 'success-snackbar');
        this.previousPage();
      },
      error => {
        this.snackOpen('An errror occurred during creating a dragon.', 'Close', 'alert-snackbar');
      }
    );
  }

  previousPage() {
    this.location.back();
  }

  snackOpen(message: string, action: string, nameClass: string){
    this.matSnackBar.open(message, action, {
      duration: 2000,
      panelClass: nameClass
    });
  }
}
