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
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Home',
  components: {
  },
  setup(){
    let store = useStore()
    const pokemons = computed(():Pokemon[] => store.getters.POKEMONS);
    return {
      pokemons
    };  
  } 
});
</script>
