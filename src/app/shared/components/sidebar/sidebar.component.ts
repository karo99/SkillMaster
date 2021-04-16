import { Component, OnInit } from '@angular/core';
import {SkillBoardModel} from '../../models/skill-board.model';
import {MatDialog} from '@angular/material/dialog';
import {AddCardDialogComponent} from '../../../components/add-card-dialog/add-card-dialog.component';
import {AddBoardDialogComponent} from '../../../components/add-board-dialog/add-board-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public boardArray: SkillBoardModel[];
  public activeBoard: SkillBoardModel;

  constructor(private dialog: MatDialog) {
    this.boardArray = [
      new SkillBoardModel('Your first board')
    ];
    this.activeBoard = this.boardArray[0];
  }

  ngOnInit(): void {
  }

  public addBoard(): void {
    const compRef = this.dialog.open(AddBoardDialogComponent);
    compRef.componentInstance.sendTitle.subscribe(res => {
      compRef.close();
      this.boardArray.push(new SkillBoardModel(res));
    });
  }

  public chooseBoard(chosenBoard: SkillBoardModel): void {
    this.activeBoard = chosenBoard;
  }
}
