import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';


@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss']
})
export class InputListComponent implements OnInit {


  itemList:Array<any> = [];
  targetListIds:Array<string> = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemList = this.itemService.getInputItemList();
    this.targetListIds = this.itemService.getTargetListIds();
    
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  

}
