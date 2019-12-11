import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Power2, Power3, TweenMax, CSSPlugin } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('box', { static: false }) box: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.do();
  }

  do() {
    TweenMax.to(this.box.nativeElement, 3, {
      css: {
        delay: 1,
        opacity: 0.7,
        height: '100px',
        backgroundColor: 'white',
        ease: Power3.easeInOut
      }
    });
  }

}
