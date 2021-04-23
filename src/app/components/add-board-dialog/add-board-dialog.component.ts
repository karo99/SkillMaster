import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.scss']
})
export class AddBoardDialogComponent implements OnInit {
  @Output() sendTitle: EventEmitter<string>;
  public boardForm: FormGroup;

  constructor() {
    this.sendTitle = new EventEmitter<string>();
    this.boardForm = new FormGroup({
      boardTitle: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  saveTitle(): void {
    if (this.boardForm.valid) {
      this.sendTitle.emit(this.boardForm.get('boardTitle').value);
    }
  }
}
