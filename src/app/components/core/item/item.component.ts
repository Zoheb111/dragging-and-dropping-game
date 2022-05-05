import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() id: string = '';
  @Input() baseColor: string = '#000000';

  constructor() { 
  }



  ngOnInit(): void {
  }

}
