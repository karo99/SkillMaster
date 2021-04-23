import {Component, OnInit} from '@angular/core';
import {SkillCardModel} from '../../shared/models/skill-card.model';
import {MatDialog} from '@angular/material/dialog';
import {AddCardDialogComponent} from '../add-card-dialog/add-card-dialog.component';
import {BoardService} from '../../shared/services/board.service';
import {ColorLevelsModel} from '../../shared/models/color-levels.model';
import {EditCardDialogComponent} from '../edit-card-dialog/edit-card-dialog.component';
import {SkillBoardModel} from '../../shared/models/skill-board.model';
import {InfoDialogComponent} from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public cardArray: SkillCardModel[];
  public board: SkillBoardModel;
  public editMode: boolean;

  constructor(private dialog: MatDialog,
              private boardService: BoardService) {
    this.cardArray = [];
    this.editMode = false;
  }

  ngOnInit(): void {
    this.boardService.getCurrentBoard().subscribe(res => {
      this.cardArray = res.cardArray;
      this.board = res;
    });
  }

  public addCard(): void {
    const dialogRef = this.dialog.open(AddCardDialogComponent);
    dialogRef.componentInstance.sendTitle.subscribe(res => {
      dialogRef.close();
      this.cardArray.push(new SkillCardModel(res));
    });
  }

  public checkColor(level: number): string {
    const palette = new ColorLevelsModel();
    return palette.colorArray[level];
  }

  public incrementLevel(card: SkillCardModel): void {
    if (!this.editMode) {
      card.colorLevel++;
    } else {
      const dialogRef = this.dialog.open(EditCardDialogComponent, {
        data: card.label
      });
      dialogRef.componentInstance.sendTitle.subscribe(res => {
        dialogRef.close();
        card.label = res;
        // this.cardArray.push(new SkillCardModel(res));
      });
    }
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

   public openInfoDialog(): void {
    const dialogRef = this.dialog.open(InfoDialogComponent);
  }
}
