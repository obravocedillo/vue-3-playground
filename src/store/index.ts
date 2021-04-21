import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import { Pokemon } from '../interfaces/Pokemons' 
import { State } from '../interfaces/State'
import axios from 'axios';

export const key: InjectionKey<Store<State>> = Symbol()

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
    POKEMONS: (state):Pokemon[] => {
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
      context.commit("SET_POKEMONS",getPokemons.data.results as Pokemon[])
      console.log(context.getters.POKEMONS)
    }
  },

})