import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    //  เข้าถึงและเรียกใช้ได้ที่นี่
  }

  ngOnInit(): void {
    //  เข้าถึงและเรียกใช้ได้ที่นี่ (ดีกว่า constructure)
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
