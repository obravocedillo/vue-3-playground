<template>
  <div class="home-main-container">
    <Modal v-if="modalOpened" :pokemon="pokemonSelected" @close="closeModal()"></Modal>
    <h1 data-testid="home-title">Lista de todos los pokemons</h1>
    <div class="home-all-pokemons-container">
      <div
        v-for="singlePokemon of pokemons"
        :key="singlePokemon.url"
        class="home-single-pokemon"
        data-testid="single-pokemon"
        @click="selectPokemon(singlePokemon)"
      >
        <img :src="singlePokemon.image" :alt="`${singlePokemon.name} image`" />
        <p>{{ singlePokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref, computed, defineComponent, Ref,
} from 'vue';
import { useStore } from 'vuex';
import Modal from '../components/Modal.vue';
import { Pokemon } from '../interfaces/Pokemons';

export default defineComponent({
  name: 'Home',
  components: {
    Modal,
  },
  setup() {
    const store = useStore();
    const pokemons = computed((): Pokemon[] => store.getters.POKEMONS);
    const modalOpened:Ref<boolean> = ref(false);
    const pokemonSelected:Ref<Pokemon> = ref({ name: 'test', url: '' });
    const selectPokemon = (pokemon:Pokemon):void => {
      pokemonSelected.value = pokemon;
      modalOpened.value = true;
    };
    const closeModal = () => {
      modalOpened.value = false;
    };
    return {
      pokemons,
      modalOpened,
      pokemonSelected,
      selectPokemon,
      closeModal,
    };
  },
});
</script>

<style scoped>
.home-all-pokemons-container {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.home-single-pokemon {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 23%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 5px;
}
</style>
