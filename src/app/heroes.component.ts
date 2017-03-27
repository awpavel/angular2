import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
    <h1>{{title}}</h1>
    <p>Heroes:</p>
    <ul>
        <li [class.selected]="hero === selectedHero" *ngFor="let hero of heroes" (click)="onSelected(hero)"  class="items">
            {{ hero.name }}
        </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    styles: [`
        .items:hover {
            text-decoration: underline;
            cursor: pointer;
        }
        .items {
            text-decoration: none;
        }
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }        
    `]
})
export class HeroesComponent  implements OnInit{
    title = 'Tour of Heroes';
    selectedHero : Hero;
    heroes : Hero[];

    constructor(private heroService : HeroService) {

    }


    getHeroes() : void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }


    onSelected(hero : Hero) : void {
        this.selectedHero = hero;
    }

    ngOnInit(): void {
        this.getHeroes();
    }

}
