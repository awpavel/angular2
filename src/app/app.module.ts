import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import {RouterModule} from '@angular/router';


import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";



@NgModule({
    imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path : 'heroes',
            component : HeroesComponent
        },
        {
            path : 'dashboard',
            component: DashboardComponent
        },
        {
            path : 'detail/:id',
            component: HeroDetailComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
    ])
    ],
    declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent ],
    bootstrap:    [ AppComponent ],
    providers: [HeroService]
})
export class AppModule { }
