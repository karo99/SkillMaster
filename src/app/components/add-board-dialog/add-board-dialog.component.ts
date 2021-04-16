import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.scss']
})
export class AddBoardDialogComponent implements OnInit {
  boardTitle: string;
  @Output() sendTitle: EventEmitter<string>;

  constructor() {
    this.boardTitle = '';
    this.sendTitle = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  saveTitle(): void {
    this.sendTitle.emit(this.boardTitle);
  }
}
