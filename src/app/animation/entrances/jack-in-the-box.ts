import { state, animate, style, transition, keyframes } from '@angular/animations';

export const jackInTheBox = [

  state('idle-jackInTheBox', style({ opacity: 1 }) ),
  
  transition('* => jackInTheBox', [
    
    style('*'),
    
    animate('{{timing}} {{delay}} ease-in',

      keyframes([
        style({ 
          transform: 'scale(0.1) rotate(30deg)',
          transformOrigin: 'center bottom', 
        
          offset: 0 
        }),
        style({ 
          transform: 'rotate(-10deg)', 
        
          offset: 0.5 
        }),
        style({ transform: 'rotate(3deg)', offset: 0.7 }),
        style({ transform: 'scale(1)', opacity: 1, offset: 1 })
      ])

    )], { params: { timing: '1s', delay: '' }}
  )
];