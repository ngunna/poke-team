<template>
  <div id="app">
    <poke-home/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PokeHome from './components/PokeHome/poke-home';
  import PokeTeam from './components/PokeTeam/poke-team';

  @Component({
  components: {
  PokeHome, PokeTeam
  },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @font-face {
  font-family: pkFont;
  src: url('./assets/Pokemon Solid.ttf');
  }
  #app {
  font-family: pkFont;
  color: #2c3e50;
  user-select: none;
  }

  html {
  background-image: url('./assets/stadium.jpg');
  background-position: center;
  background-position-y:0;
  background-size: cover;
  }
</style>
