import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){ }

  @HostListener("click") onClicks(){
    this.textDeco("underline red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

   private textDeco(action:string){
     this.elem.nativeElement.style.textDecoration=action;

   }

}
