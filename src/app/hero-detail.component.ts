/**
 * Created by admin on 27.03.17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service';
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';

@Component ({
    selector: 'hero-detail',
    templateUrl : './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
    hero : Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    // @Input() hero : Hero;


    goBack() : void {
        this.location.back();
    }

    constructor(
        private heroService: HeroService,
        private location : Location,
        private route : ActivatedRoute
    ) {
    }
}