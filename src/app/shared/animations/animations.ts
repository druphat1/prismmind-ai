import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp',[
    transition(':enter',[
        style({opacity:0,transform:'translateY(30px)'}),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)',style({opacity:1,transform: 'translateY(0)'}))
    ])
]);
 export const fadeIn = trigger('fadeIn',[
    transition(':enter',[
       style({opacity:0}),
       animate('0.5s ease-out',style({opacity:1}))
    ])
 ]);

 export const scaleIn = trigger('scaleIn',[
    transition('.enter',[
        style({opacity:0}),
        animate ('0.5s cubic-bezier(0.4, 0, 0.2, 1)',style({opacity:1,transform :('scale(1)')}))
    ])
 ]);

 export const slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
 ]);

 export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(30px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const staggerFadeIn = trigger('staggerFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', [
        animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const cardReveal = trigger('cardReveal', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px) scale(0.95)' }),
    animate('0.7s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
  ])
]);


