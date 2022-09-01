import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {
  @Input() set textColor(color:string){
    this.elementRef.nativeElement.style.color=color;
   }
  constructor(private elementRef:ElementRef) {
   }
 
}
