/**
 * Created by admin on 27.03.17.
 */
import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {
    getHeroes() : Hero[] {
        return HEROES;
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 0);
        });
    }

    getHero(id: number) : Promise<Hero>{
        return this.getHeroesSlowly().then(heroes => heroes.find(hero => hero.id === id));
    }
}