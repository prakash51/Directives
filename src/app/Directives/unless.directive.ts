import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  show:boolean
  @Input()  set appUnless (condition:boolean)
  {
    this.show=!condition;
    if(this.show)
    {
      this.viewContainer.createEmbeddedView(this.tempRef);
    }
    else
    {
      this.viewContainer.clear();
    }
  }
  constructor(private viewContainer:ViewContainerRef,private tempRef:TemplateRef<any>) { 
    
    }

}
