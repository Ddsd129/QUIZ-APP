import { NgModule } from '@angular/core';

import{ CommonModule } from '@angular/common';  // Importer CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Pour les formulaires
import { HttpClientModule } from '@angular/common/http';  // Pour les requêtes HTTP

import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SimpleQuizComponent } from './simple-quiz/simple-quiz.component';
import { MediumQuizComponent } from './medium-quiz/medium-quiz.component';
import { HardQuizComponent } from './hard-quiz/hard-quiz.component';
import { ForgetComponent } from './forget/forget.component';
import { RouterModule } from '@angular/router';





@NgModule({
    declarations: [
    
        
        ],
    imports: [
        CommonModule,
        ConnexionComponent,
        RegisterComponent,
        HomeComponent,
        SimpleQuizComponent,
        MediumQuizComponent,
        HardQuizComponent,
        ForgetComponent,
        FormsModule,
        HttpClientModule,




        
        BrowserModule,
        RouterModule.forRoot([
            { path: 'connexion', component: ConnexionComponent },
            { path: 'register', component: RegisterComponent },
            {path: 'forget', component: ForgetComponent},
            {path: 'home', component: HomeComponent},
            { path: 'simplequiz', component: SimpleQuizComponent },
            { path: 'mediumquiz', component: MediumQuizComponent },
            {path: 'hardquiz', component: HardQuizComponent},
        ])
    
    
    ],
    providers: [AppComponent],
    bootstrap: []
    })
    export class AppModule { }
    