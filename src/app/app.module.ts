import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BoardComponent } from './components/board/board.component';
import { SkillCardComponent } from './shared/components/skill-card/skill-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddCardDialogComponent } from './components/add-card-dialog/add-card-dialog.component';
import {FormsModule} from '@angular/forms';
import { AddBoardDialogComponent } from './components/add-board-dialog/add-board-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BoardComponent,
    SkillCardComponent,
    AddCardDialogComponent,
    AddBoardDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
