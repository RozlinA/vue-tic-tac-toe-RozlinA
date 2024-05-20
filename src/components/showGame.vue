<script setup lang="ts">
  import { Player } from '../models/Player';

  interface PlayerProps {
  players: Player[]
}

const props = defineProps<PlayerProps>();

const gameField = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const handleSquareClick = () => {
  if (props.players[0].id == 0){
    return "x";
  } 
}

let randomNumber = Math.floor(Math.random()*2)
console.log(randomNumber % 2)
</script>

<template>
  <p v-if="randomNumber % 2 === 0"> {{ players[0].playerName + "'s turn" }}</p>
  <p v-else> {{ players[1].playerName + "'s turn" }}</p>

  <div class="squares" v-for="n in gameField" @click="handleSquareClick">
  {{ n }}
  </div>
</template>

<style scoped>
 div {
  display: flex;
  
  border: 1px solid purple;
 }
</style>
