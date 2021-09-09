import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {
    github: "https://github.com/Vladimir1428",
    gmail: "vova123555@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
