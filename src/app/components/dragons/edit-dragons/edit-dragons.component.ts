import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-dragons',
  templateUrl: './edit-dragons.component.html',
  styleUrls: ['./edit-dragons.component.sass']
})
export class EditDragonsComponent implements OnInit {
  onEditDragon = new EventEmitter();
  dragon: Dragon;
  dragonHistories: any[];
  editForm: FormGroup;
  minLength = 2;
  maxLength = 20;

  constructor(private dragonService: DragonService, 
              @Inject(MAT_DIALOG_DATA) public dialogData: Dragon,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getDragon();
    this.validateForm();
  }

  validateForm(){
    this.editForm = this.formBuilder.group({
      name: this.formBuilder.control(this.dialogData.name,
        [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
      type: this.formBuilder.control(this.dialogData.type,
        [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
      histories: [this.dialogData.histories]
    });
  }

  getDragon(){
    this.dragonService.getDragon(this.dialogData.id).subscribe(data => {
      this.dragon = data;
      this.dragonHistories = data.histories;
    })
  }

}
