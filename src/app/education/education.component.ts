import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "Student of the Faculty of Physics",
      duration: "2020",
      subtitle: "KNU University, Kiev",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      duration: "2024",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
