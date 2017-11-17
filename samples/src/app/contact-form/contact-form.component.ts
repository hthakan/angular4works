import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }

  ];

  log(x) { console.log(x); }

  submit(f) {
    // f.valid

    // f.value json object persistent

    console.log(f);
  }

}
