import { Component, Output, EventEmitter } from '@angular/core';
import { FeelingsData } from 'src/app/types/Feelings';
import { SelectedFeelingDirective } from './selected-feeling.directive';

@Component({
  selector: 'app-feeling-emojis',
  templateUrl: './feeling-emojis.component.html',
  styleUrls: ['./feeling-emojis.component.css']
})
export class FeelingEmojisComponent {
 @Output() closeTab : EventEmitter<boolean> = new EventEmitter()
 constructor(private selectedFeeling: SelectedFeelingDirective){

 }

 onSelectFeeling(event: HTMLElement){
    this.selectedFeeling.feelingSet = event.cloneNode(true)
 }

 onCloseTab(){
  this.closeTab.emit(true)
 }
}
