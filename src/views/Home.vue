<template>
  <div class="home-main-container">
    <h1>Lista de todos los pokemons</h1>
    <div class="home-all-pokemons-container">
      <div v-for="singlePokemon of pokemons" :key="singlePokemon.url" class="home-single-pokemon">
        <img :src="singlePokemon.image" :alt="`${singlePokemon.name} image`">
        <p>{{singlePokemon.name}}</p>
      </div>
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

<style scoped>
  .home-all-pokemons-container{
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  .home-single-pokemon{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 23%;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 2rem;
  }
  
</style>>