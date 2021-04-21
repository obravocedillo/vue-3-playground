<template>
  <div class="home-main-container">
    <h1>Lista de todos los pokemons</h1>
    <div v-for="singlePokemon of pokemons" v-bind:key="singlePokemon.url">
      {{singlePokemon.name}}
    </div>
  </div>
</template>

<script lang="ts">
import { Pokemon } from '../interfaces/Pokemons'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {
  },
  mounted(){
  }, 
  computed: {
    pokemons(): Pokemon[] {
      return this.$store.state.pokemons
    }
  }
});
</script>
