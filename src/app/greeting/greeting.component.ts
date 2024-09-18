import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Vladimir Levitskiy",
    title: "Hi all, I'm Vladimir",
    subTitle: "Seeking a junior front-end Angular developer position with the company where my education, qualifications and acquired skills will be utilized to their best to improve the company’s overall performance.",
    resumeLink: "https://docs.google.com/document/d/1NoY9J_gQDR99QvmIipucNLHV4Vvweouo/edit?usp=sharing&ouid=110420136980838416546&rtpof=true&sd=true"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
