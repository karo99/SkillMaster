import { Component, OnInit } from '@angular/core';
import {SkillCardModel} from '../../shared/models/skill-card.model';
import {MatDialog} from '@angular/material/dialog';
import {AddCardDialogComponent} from '../add-card-dialog/add-card-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cardArray: SkillCardModel[];

  constructor(private dialog: MatDialog) {
    this.cardArray = [
      new SkillCardModel('first'),
      new SkillCardModel('second'),
      new SkillCardModel('third'), new SkillCardModel('first'),
      new SkillCardModel('second'),
      new SkillCardModel('third'), new SkillCardModel('first'),
      new SkillCardModel('second'),
      new SkillCardModel('third'), new SkillCardModel('first'),
      new SkillCardModel('second'),
      new SkillCardModel('third'),
    ];
  }

  ngOnInit(): void {
  }

  public addCard(): void {
    // this.cardArray.push(new SkillCardModel('next'));
    const compRef = this.dialog.open(AddCardDialogComponent);
    compRef.componentInstance.sendTitle.subscribe(res => {
      compRef.close();
      this.cardArray.push(new SkillCardModel(res));
    });
  }
}
