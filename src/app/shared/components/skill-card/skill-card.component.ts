import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  @Input() editMode: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
