import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
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
export class AppComponent  {
    title = 'Tour of Heroes';
    selectedHero : Hero;


    heroes = HEROES;

    onSelected(hero : Hero) {
        this.selectedHero = hero;
    }

}
