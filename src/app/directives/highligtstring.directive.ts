import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighligtstring]'
})
export class HighligtstringDirective implements OnInit {

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor="orange"
  }


}
