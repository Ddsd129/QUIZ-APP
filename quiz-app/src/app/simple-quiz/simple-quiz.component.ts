import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,  } from '@angular/router';


@Component({
  selector: 'app-simple-quiz',
  imports: [ RouterModule, CommonModule],
  templateUrl: './simple-quiz.component.html',
  styleUrl: './simple-quiz.component.css'
})
export class SimpleQuizComponent {

}
