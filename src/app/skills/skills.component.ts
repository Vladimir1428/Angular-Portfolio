import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "Front-end developer who wants to explore every tech stack",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
      "⚡ Progressive Web Applications SPA Stacks",
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
