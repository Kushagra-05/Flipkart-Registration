import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-details',
  templateUrl: './intro-details.component.html',
  styleUrls: ['./intro-details.component.css']
})
export class IntroDetailsComponent {  
  Name!: string;
  email!: string;
  password!: string;

  constructor() { }

  submitForm() {
    // Perform any additional validation or data processing here
    console.log('Form submitted!');
    console.log('Name:', this.Name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    const formData = {
      Name: this.Name,
      email: this.email,
      password: this.password
    };


  }
}
