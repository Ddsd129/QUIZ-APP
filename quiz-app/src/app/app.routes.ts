import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SimpleQuizComponent } from './simple-quiz/simple-quiz.component';
import { MediumQuizComponent } from './medium-quiz/medium-quiz.component';
import { HardQuizComponent } from './hard-quiz/hard-quiz.component';
import { ForgetComponent } from './forget/forget.component';

export const routes: Routes = [
    { path: '', redirectTo: 'connexion', pathMatch: 'full' },

    {path:'connexion', component:ConnexionComponent},
    {path:'register', component:RegisterComponent},
    {path:'forget', component:ForgetComponent},
    {path:'home', component:HomeComponent},
    {path:'simplequiz', component:SimpleQuizComponent},
    {path:'mediumquiz', component:MediumQuizComponent },
    {path:'hardquiz', component: HardQuizComponent}
];
