import { animate, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [
  state('void', style({opacity: 0})),
  transition(':enter, :leave', [
    style({opacity: 0}),
    animate(1000, style({opacity: 1}))
  ]),
]);

export let slideRight = trigger('slideLeftRight', [
  transition(':enter', [
    style({transform: 'translateX(-100px)'}),
    animate('1.5s ease-out', style({transform: 'translateY(0px)'}))
  ]),
]);
