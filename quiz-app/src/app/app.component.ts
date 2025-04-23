import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
})
export class AppComponent {
  title = 'quiz-app';
}
