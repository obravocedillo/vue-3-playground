import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Home from '../../views/Home';

const store = createStore({
  getters: {
    POKEMONS: () => [
      {
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
    ],
  },
});

describe('Home view tests', () => {
  test('Testing home title is rendering', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find('[data-testid="home-title"]').exists()).toBe(true);
  });

  test('Testing home pokemon images are rendering according to store', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.findAll('[data-testid="single-pokemon"]').length).toBe(1);
  });
});
