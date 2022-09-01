import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[custButton]'
})
export class CustButtonDirective {
  @Input() set color(col:string)
  {
    this.eleRef.nativeElement.style.background=col;
    this.eleRef.nativeElement.style.borderColor=col;
  }
  constructor(private eleRef:ElementRef) { 
    this.eleRef.nativeElement.style.padding="10px";
    this.eleRef.nativeElement.style.borderRadius="5px";
    this.eleRef.nativeElement.style.boxShadow="0px 3px 1px -2px grey";
    this.eleRef.nativeElement.style.cursor="pointer";
    this.eleRef.nativeElement.style.fontWeight="600";
  }

}
