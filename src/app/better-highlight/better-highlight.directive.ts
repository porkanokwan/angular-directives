import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // ทำงานตั้งแต่เริ่มต้น
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  // ทำงานเมื่อเกิด event โดยมี @HostListener คอยดัก event อยู่ และกำหนดการ bind property โดย HostBinding
  @HostListener('mouseenter') mousehover(eventData: Event) {
    console.log(this.backgroundColor); // transparent
    this.backgroundColor = this.highlightColor;
    console.log(this.backgroundColor); // blue
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

  // ทำงานเมื่อเกิด event โดยมี @HostListener คอยดัก event อยู่ และใช้ renderer ในการกำหนด property
  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     'background-color',
  //     'blue'
  //   );
  // }

  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     'background-color',
  //     'transparent'
  //   );
  // }
}
