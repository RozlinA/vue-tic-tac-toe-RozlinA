<script setup lang="ts">
import { ref } from 'vue'
import { IGameState } from '../models/IGameState';
import { Player } from '../models/Player';
import Board from './Board.vue';
import AddPlayer from './AddPlayer.vue'

const state = ref<IGameState>({
    players: [],
    showResults: false
  });

let currentId = 0;

const handleAddPlayer = (playerInput: string) => {
  if (playerInput.trim().length > 0){
    let player = new Player (playerInput, currentId);
    state.value.players.push(player);
    console.log(player);
    currentId++;
  }
}

</script>

<template>
  <h1 v-if="state.players.length < 2">Tic Tac Toe</h1>
  <AddPlayer v-if="state.players.length < 2" :players="state.players" @add-player="handleAddPlayer"></AddPlayer>
  <Board v-if="state.players.length === 2" :players="state.players"></Board>
</template>

<style scoped>

</style>
