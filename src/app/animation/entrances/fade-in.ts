import { state, animate, style, transition } from '@angular/animations';

export const fadeIn = [

  state('idle-fadeIn', style({ opacity: 1 }) ),
  state('idle-fadeInRight', style({ opacity: 1 }) ),
  state('idle-fadeInLeft', style({ opacity: 1 }) ),
  state('idle-fadeInUp', style({ opacity: 1 }) ),
  state('idle-fadeInDown', style({ opacity: 1 }) ),

  transition('* => fadeIn', [

    style({ opacity: 1 }),
    
    animate('{{timing}} {{delay}} ease-in', style('*'))

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInRight', [

    style({ opacity: 1, transform: 'translateX(-20px)' }),

    animate('{{timing}} {{delay}} ease-in', style('*'))

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInLeft', [

    style({ opacity: 1, transform: 'translateX(20px)' }),

    animate('{{timing}} {{delay}} ease-in', style('*'))

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInUp', [

    style({ opacity: 1, transform: 'translateY(20px)' }),

    animate('{{timing}} {{delay}} ease-in', style('*'))

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInDown', [

    style({ opacity: 1, transform: 'translateY(-20px)' }),

    animate('{{timing}} {{delay}} ease-in', style('*'))

  ], { params: { timing: '1s', delay: '' }} ),
  
];