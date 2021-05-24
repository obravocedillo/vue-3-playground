import { createStore, Store } from 'vuex';
import axios from 'axios';
import { Pokemon } from '../interfaces/Pokemons';
import { State } from '../interfaces/State';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

const store = createStore<State>({
  state: {
    pokemons: [],
  },
  getters: {
    POKEMONS: (state: State):Pokemon[] => state.pokemons,
  },
  mutations: {
    SET_POKEMONS: (state, payload):void => {
      state.pokemons = payload;
    },
  },
  actions: {
    GETPOKEMONS: async (context) => {
      const getPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon');
      getPokemons.data.results.map((singlePokemon: Pokemon, index: number) => {
        const currentPokemon = singlePokemon;
        currentPokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index
          + 1}.png`;
        return currentPokemon;
      });
      context.commit('SET_POKEMONS', getPokemons.data.results as Pokemon[]);
    },
  },
});

export default store;
