import {
  animate,
  animateChild,
  AnimationTriggerMetadata,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const rSelectAnimations: {
  readonly transformPanelWrap: AnimationTriggerMetadata;
  readonly transformPanel: AnimationTriggerMetadata;
} = {
  transformPanelWrap: trigger('transformPanelWrap', [
      transition('* => void', query('@transformPanel', [animateChild()],
          {optional: true}))
  ]),

  transformPanel: trigger('transformPanel', [
    state('void', style({
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
      minWidth: '100%',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      opacity: 0
    })),
    state('showing', style({
      opacity: 1,
      minWidth: 'calc(100% + 32px)', // 32px = 2 * 16px padding
      transform: 'scaleY(1)'
    })),
    transition('void => *', animate('150ms')),
    transition('* => void', animate('150ms'))
  ])
};
