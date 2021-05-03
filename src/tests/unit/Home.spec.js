import { mount } from '@vue/test-utils'
import Home from '../../views/Home'
import { createStore } from 'vuex'

const store = createStore({
    getters:{
        POKEMONS: () => { return [] },
    }
})

describe('Home view tests', () => {
    test('Testing home title is rendering', () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [store]
            }
        });
        expect(wrapper.find('[data-testid="home-title"]').exists()).toBe(true);
    });
    
    test('Testing home pokemon images are rendering according to store', () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [store]
            }
        });
        expect(wrapper.findAll('[data-testid="single-pokemon"]').length).toBe(0);
    });
})

