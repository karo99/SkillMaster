import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-card-dialog',
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.scss']
})
export class EditCardDialogComponent implements OnInit {

  @Output() sendTitle: EventEmitter<string>;
  public cardForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.sendTitle = new EventEmitter<string>();
    this.cardForm = new FormGroup({
      cardTitle: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.cardForm.get('cardTitle').setValue(this.data);
  }

  public saveTitle(): void {
    if (this.cardForm.valid) {
      this.sendTitle.emit(this.cardForm.get('cardTitle').value);
    }
  }

}
