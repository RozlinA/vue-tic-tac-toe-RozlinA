<script setup lang="ts">
import PlayerComp from './PlayerComp.vue'
import { Player } from '../models/Player';
import { ref } from 'vue'
import { GameState } from '../models/GameState';
import showGame from './showGame.vue';

const state = ref<GameState>({
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
  <PlayerComp :players="state.players" v-if="state.players.length < 2" @add-player="handleAddPlayer"></PlayerComp>
  <showGame v-if="state.players.length == 2" :players="state.players"></showGame>
</template>

<style scoped>

</style>
