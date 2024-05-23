<script setup lang="ts">
import { ref } from 'vue'
import { IGameState } from '../models/IGameState';
import { Player } from '../models/Player';
import Board from './Board.vue';
import AddPlayer from './AddPlayer.vue'

const state = ref<IGameState>({
  players: []
});

let currentId = 0;

const handleAddPlayer = (userInput: string) => {
  if (userInput.trim().length > 0) {
    let player = new Player (userInput, currentId);
    state.value.players.push(player);
    console.log(player)
    currentId++;
  }
}

</script>

<template>
  <AddPlayer :players="state.players" v-if="state.players.length < 2" @add-player="handleAddPlayer"></AddPlayer>
  <Board v-if="state.players.length == 2" :players="state.players"></Board>
</template>

<style scoped>

</style>
