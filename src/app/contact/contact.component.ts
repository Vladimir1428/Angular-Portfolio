import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    number: "+380636182567",
    email_address: "vova123555@gmail.com"
  };
  constructor() { }
  
  ngOnInit(): void {
  }
}
