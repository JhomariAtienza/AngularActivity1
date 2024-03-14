import { Component } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent {
  constructor() {}

  saveUserDetails(): void {
    console.log('User details saved.');
  }

  cancel(): void {
  }
}
