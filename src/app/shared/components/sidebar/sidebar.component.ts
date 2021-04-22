import {Component, OnInit} from '@angular/core';
import {SkillBoardModel} from '../../models/skill-board.model';
import {MatDialog} from '@angular/material/dialog';
import {AddCardDialogComponent} from '../../../components/add-card-dialog/add-card-dialog.component';
import {AddBoardDialogComponent} from '../../../components/add-board-dialog/add-board-dialog.component';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public boardArray: SkillBoardModel[];
  public activeBoard: SkillBoardModel;

  constructor(private dialog: MatDialog,
              private boardService: BoardService) {
    this.boardArray = this.boardService.getBoardArray();

  }

  ngOnInit(): void {
    this.boardService.getCurrentBoard().subscribe(res => {
      this.activeBoard = res;
    });
  }

  public addBoard(): void {
    const compRef = this.dialog.open(AddBoardDialogComponent);
    compRef.componentInstance.sendTitle.subscribe(res => {
      compRef.close();
      this.boardArray.push(new SkillBoardModel(res));
    });
  }

  public chooseBoard(chosenBoard: SkillBoardModel): void {
    this.boardService.setCurrentBoard(chosenBoard);
  }
}
