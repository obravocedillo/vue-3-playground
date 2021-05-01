import { createStore, Store } from 'vuex'
import { Pokemon } from '../interfaces/Pokemons' 
import { State } from '../interfaces/State'
import axios from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export const store = createStore<State>({
  state: { 
    pokemons: []
  },
  getters: {
    POKEMONS: (state:State):Pokemon[] => {
      return state.pokemons
    }
  },
  mutations: {
    SET_POKEMONS: (state,payload) => {
      state.pokemons = payload;
    }
  },
  actions: {
    GETPOKEMONS: async(context,payload)=>{
      let getPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon')
      getPokemons.data.results.map((singlePokemon:Pokemon, index:number) => {
        singlePokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
      })
      context.commit("SET_POKEMONS",getPokemons.data.results as Pokemon[])
    }
  },

})