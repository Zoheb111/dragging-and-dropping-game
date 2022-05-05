import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';

import {DragDropModule } from '@angular/cdk/drag-drop';
import { PickupAreaComponent } from './components/areas/pickup-area/pickup-area.component';
import { DropAreaComponent } from './components/areas/drop-area/drop-area.component';
import { ScoreAreaComponent } from './components/areas/score-area/score-area.component';
import { InputListComponent } from './components/core/input-list/input-list.component';
import { ItemComponent } from './components/core/item/item.component';
import { ItemService } from './services/item.service';
import { TargetListComponent } from './components/core/target-list/target-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PickupAreaComponent,
    DropAreaComponent,
    ScoreAreaComponent,
    ItemComponent,
    InputListComponent,
    TargetListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    MatGridListModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
