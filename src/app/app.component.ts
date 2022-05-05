import { Component, OnInit  } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private itemService: ItemService){

  }

  ngOnInit() {
    this.itemService.setInputItemList();
    this.itemService.setTargetItemLists();
  }

}
