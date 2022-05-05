import { Injectable } from "@angular/core";
import * as uuid from 'uuid';

@Injectable({
    providedIn: 'root',
})
export class ItemService{

    colors = ['#4287f5','#f54242','#63f542','#f5ec42','#9342f5','#f542c5'];
    inputItemList:Array<any> = []
    targetItemLists:Array<any> = [];

    constructor(){

    }

    getActiveColors(){
        return this.colors;
    }

    generateId(){
        return uuid.v4();
    }

    getRandomColor(){
        return this.colors[Math.floor(Math.random()*6)];
    }


    setInputItemList(){
        for(let i=0; i< 4; i++){
            this.inputItemList.push({id:this.generateId(), baseColor:this.getRandomColor()});
        }
    }

    getInputItemList(){
        return this.inputItemList;
    }

    setTargetItemLists(){
        this.colors.forEach((element, index) => {
            this.targetItemLists.push({baseColor: element, listId: 'cdk-drop-list-'+index, items:[]});    
        });
        
    }

    getTargetListIds(){
        return this.targetItemLists.map(element => {
            return element.listId;
        })
    }

    getTargetItemLists(){
        return this.targetItemLists;
    }
}