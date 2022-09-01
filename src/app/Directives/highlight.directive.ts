import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 @Input('appHighlight') set appHighlight(color:string)
{
  this.elementRef.nativeElement.style.background=color;
}
 @Input() set textColor(color:string){
  this.elementRef.nativeElement.style.color=color;
 }
  constructor(private elementRef:ElementRef) { 
  }

}
