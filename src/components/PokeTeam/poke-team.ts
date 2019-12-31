import Vue from 'vue';
import Component from 'vue-class-component';
import template from './poke-team.html';
import style from './poke-team.scss';
import { Pokemon } from '@/core/models/pokemon';

import axios from 'axios';

@Component({
    name: 'poke-team',
    template: template,
    style: style
})
export default class PokeTeam extends Vue {
    private _pkNums: Array<number>;
    private _pkApiUrl = "https://pokeapi.co/api/v2/";
    public team: Array<Pokemon>;
    public isLoading: boolean;
    public isHidden: boolean;

    public data(): any {
        return {
            team: new Array<Pokemon>(),
            isLoading: false,
            isHidden: false
        };
    }

    public created() {
        this._pkNums = new Array<number>();
        this.getPokeTeamNumbers();
    }

    public refreshTeam() {
        this._pkNums = [];
        this.team = [];
        this.getPokeTeamNumbers();
    }

    public showHideTeam() {
        this.isHidden = !this.isHidden;
    }

    public getTeamPokemon() {
        this.isLoading = true;
        let promises = new Array<Promise<any>>();
        this._pkNums.forEach((id) => {
            promises.push(axios.get("https://pokeapi.co/api/v2/" + `pokemon/${id}/`));
        });
        Promise.all(promises).then(pokeTeam => {
            pokeTeam.forEach(pokemon => {
                pokemon.data.types = pokemon.data.types.reverse();
                this.team.push(pokemon.data);
                this.isLoading = false;
            })
        })
    }

    public getPokeTeamNumbers() {
        for (var i = 0; i < 6; i++) {
            var newNum = this.getRandomNumber(1, 150);
            if (this._pkNums.indexOf(newNum) < 0) {
                this._pkNums.push(newNum);
            } else {
                i--;
            }
        }
        this.getTeamPokemon();
    }

    public getRandomNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
