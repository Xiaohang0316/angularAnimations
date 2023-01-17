import {
  Component,
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  group,
  query,
  animateChild,
  keyframes,
  stagger
} from '@angular/animations';

import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-querying',
  templateUrl: 'querying.component.html',
  styleUrls: ['./querying.component.css'],
  animations: [
    trigger('query', [
      transition('* => *', [
        style({ width: 0 }),
        group([
          animate(500, style({ width: '*' })),
          query('.qwe', [
            // style({ opacity: 0, transform: 'scale(0)'}),
            // animate('4s 3s ease-in-out' , style({ opacity: 1, transform: 'scale(1)', backgroundColor: "blue" }))
            style({ opacity: 0}),
            animate('4s 3s ease-in-out' , style({ opacity: 1, backgroundColor: "blue",  }))
          ]),
          query('.hero', [
            style({ transform: 'translateX(-100%)'}),
            animate('.7s 500ms ease-in', style({ transform: 'scale(1)' }))
          ]),
        ]),
        query('@animateMe', animateChild()),
      ]),
      // transition(':leave', [
      //   style({ height: '*' }),
      //   query('@animateMe', animateChild()),
      //   group([
      //     animate('500ms 500ms', style({ height: '0', padding: '0' })),
      //     query(':leave', [
      //       style({ opacity: 1, transform: 'scale(1)'}),
      //       animate('1s', style({ opacity: 0, transform: 'scale(0)' }))
      //     ]),
      //     query('.hero', [
      //       style({ transform: 'translateX(0)'}),
      //       animate('.7s ease-out', style({ transform: 'translateX(-100%)' }))
      //     ]),
      //   ]),
      // ]),
    ]),
    trigger('animateMe', [
      transition('* <=> *', animate('500ms cubic-bezier(.68,-0.73,.26,1.65)', keyframes([
        style({ backgroundColor: "transparent", color: '*', offset: 0 }),
        style({ backgroundColor: "blue", color: 'white', offset: 0.2 }),
        style({ backgroundColor: "transparent", color: '*', offset: 0.5 })
      ])))
    ]),
  ]
})
export class QueryingComponent {
  toggleDisabled = false;
  show = true;
  hero = HEROES[0];
}
