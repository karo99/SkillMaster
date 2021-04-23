import {SkillCardModel} from './skill-card.model';

export class SkillBoardModel {
  cardArray: SkillCardModel[];
  label: string;

  constructor(label: string) {
    this.label = label;
    this.cardArray = [
      new SkillCardModel('first')
    ];
  }
}
