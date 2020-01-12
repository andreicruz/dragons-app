import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';
import { Location } from '@angular/common';

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
              private location: Location) { }

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
        alert('Dragon added')
        this.returnToDragonList();
      },
      error => {
        alert('Error')
      }
    );
  }

  returnToDragonList() {
    this.location.back();
  }
}
