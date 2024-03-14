import { Component } from '@angular/core';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.css']
})
export class ProfilersComponent {
  user = {
    email: '',
    name: '',
    bio: '',
    active: false
  };
  submittedData: any = null; 

  constructor() { }

  onSubmit(): void {
    this.submittedData = { ...this.user };
    this.resetForm();
  }

  resetForm(): void {
    this.user = {
      email: '',
      name: '',
      bio: '',
      active: false
    };
  }
}
