import { Component } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-open-close-toggle',
  templateUrl: 'open-close.component.4.html',
  styleUrls: ['open-close.component.css'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        height: '240px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '0',
        opacity: 0.8,
        // backgroundColor: 'blue'
      })),
      state('chang', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'yellow',
        marginTop: '150px'
      })),
      state('duan', style({
        opacity:'0'
      })),
      state('duan03', style({
        opacity:'0.3'
      })),
      state('duan1', style({
        opacity:'1'
      })),
      transition('* => *', [
        animate('0.3s')
      ] ),
    ]),
  ],
})
export class OpenCloseChildComponent {
  isDisabled = false;
  isOpen = false;
  duangduang = {};
  heightNumber =  200;
  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.duangduang = {value: 'duan'}
    setTimeout(() => {
      this.duangduang = {value: 'duan03'}
      // this.opacity03()
      // setTimeout(() => {
      //   this.duangduang = {value: 'duan1'}
      // }, 200);
    },300)
  }
}
