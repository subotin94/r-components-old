import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const R_EXPANSION_PANEL_ANIMATIONS = [
  trigger('expand', [
    state('expanded', style({
      visibility: 'visible',
      overflow: 'hidden'
    })),
    state('collapsed', style({
      height: '0',
      overflow: 'hidden',
      visibility: 'hidden',
      padding: '0 20px'
    })),
    transition('expanded => collapsed', [
      animate('0.15s ease-in')
    ]),
    transition('collapsed => expanded', [
      animate('0.15s ease-out')
    ])
  ])
];
