import {Component} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {filter} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkillMaster';
  sidenavOpened: boolean;
  courses: any[];

  constructor(public mediaObserver: MediaObserver, private db: AngularFireDatabase) {
    this.sidenavOpened = true;

    this.mediaObserver.asObservable().pipe(
      filter((changes: MediaChange[]) => changes.length > 0)
    ).subscribe(res => {
      console.log(res[0].mqAlias);
      if (res[0].mqAlias === 'xs') {
        this.sidenavOpened = false;
      } else {
        this.sidenavOpened = true;
      }
    });

    db.list('/courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });
  }
}
