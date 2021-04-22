import {Injectable} from '@angular/core';
import {SkillBoardModel} from '../models/skill-board.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boardArray: SkillBoardModel[];
  private currentBoard: BehaviorSubject<SkillBoardModel>;

  constructor() {
    this.boardArray = [
      new SkillBoardModel('Your first board'),
      new SkillBoardModel('Your second board')
    ];
    this.currentBoard = new BehaviorSubject<SkillBoardModel>(this.boardArray[0]);
  }

  public getBoardArray(): SkillBoardModel[] {
    return this.boardArray;
  }

  public getCurrentBoard(): Observable<SkillBoardModel> {
    return this.currentBoard.asObservable();
  }

  public setCurrentBoard(board: SkillBoardModel): void {
    this.currentBoard.next(board);
  }
}
