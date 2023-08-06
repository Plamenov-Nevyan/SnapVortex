import { Directive, ElementRef} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appSelectedFeeling]'
})
export class SelectedFeelingDirective {

   feeling: ElementRef = {} as ElementRef
   feelingSubject = new BehaviorSubject(this.feeling)
  constructor() { }

  get feelingGet(){
    return this.feeling
  }

  set feelingSet(element: Node){
    this.feeling.nativeElement = element
    this.feelingSubject.next(this.feeling)
  }
}
