import Vue from 'vue';
import Component from 'vue-class-component';
import template from './poke-home.html';
import PokeTeam from '../PokeTeam/poke-team';
import style from './poke-home.scss';

@Component({
    name: 'poke-home',
    template: template,
    style: style,
    components: {
        "poke-team": PokeTeam
    }
})
export default class PokeHome extends Vue {
    public created(): void {
    }
}
