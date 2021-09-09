import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    
    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "Vladimir Levitskiy",
    title: "Hi all, I'm Vladimir",
    subTitle: "Seeking a trainee/junior front-end developer position with the company where my education, qualifications and acquired skills will be utilized to their best to improve the company’s overall performance.",
    resumeLink: "https://docs.google.com/document/d/1NoY9J_gQDR99QvmIipucNLHV4Vvweouo/edit?usp=sharing&ouid=110420136980838416546&rtpof=true&sd=true"
  }

  ngOnInit(): void {
  }

}
