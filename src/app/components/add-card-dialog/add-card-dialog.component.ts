import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-card-dialog',
  templateUrl: './add-card-dialog.component.html',
  styleUrls: ['./add-card-dialog.component.scss']
})
export class AddCardDialogComponent implements OnInit {
  @Output() sendTitle: EventEmitter<string>;
  public cardForm: FormGroup;

  constructor() {
    this.sendTitle = new EventEmitter<string>();
    this.cardForm = new FormGroup({
      cardTitle: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public saveTitle(): void {
    if (this.cardForm.valid) {
      this.sendTitle.emit(this.cardForm.get('cardTitle').value);
    }
  }
}
