<template>
    <div class="modal-backdrop">
      <div class="modal-main-container">
        <div class="top-control-bar">
          <button class="close-button" @click="closeModal()">X</button>
        </div>
        <h1>
          {{currentPokemon.name.charAt(0).toUpperCase()
          + currentPokemon.name.slice(1)}}
        </h1>
        <img :src="currentPokemon.image" class="modal-pokemon-image"/>
      </div>
    </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { ref } from '@vue/runtime-core';
import { defineComponent } from '@vue/composition-api';
import { Pokemon } from '../interfaces/Pokemons';

export default defineComponent({
  name: 'Home',
  props: {
    pokemon: Pokemon,
  },
  setup(props, { emit }) {
    const currentPokemon = ref(props.pokemon);
    const closeModal = () => {
      emit('close');
    };
    return {
      currentPokemon,
      closeModal,
    };
  },
});
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-main-container{
    background: #FFFFFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 38rem;
    border-radius: 5px;
  }
  .close-button{
    float: right;
    margin-right: 2%;
    margin-top: 1rem;
    border-radius: 50%;
    background: transparent;
    color: red;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
  }
  .close-button:focus{
    border-color: red;
    color: red;
    outline: none;
  }
  .modal-pokemon-image{
    width: 32%;
    margin-left: 34%;
  }
</style>
