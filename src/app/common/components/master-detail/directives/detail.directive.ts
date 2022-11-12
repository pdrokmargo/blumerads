import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[detailHost]'
})
export class DetailDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
