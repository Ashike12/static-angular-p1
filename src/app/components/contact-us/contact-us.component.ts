import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  formsData = {
    Name: '',
    Email: ''
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
