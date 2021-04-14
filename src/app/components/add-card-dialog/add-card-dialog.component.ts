import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-card-dialog',
  templateUrl: './add-card-dialog.component.html',
  styleUrls: ['./add-card-dialog.component.scss']
})
export class AddCardDialogComponent implements OnInit {
  public cardTitle: string;
  @Output() sendTitle: EventEmitter<string>;

  constructor() {
    this.cardTitle = '';
    this.sendTitle = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  public saveTitle(): void {
    this.sendTitle.emit(this.cardTitle);
  }
}
