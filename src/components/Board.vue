<script setup lang="ts">
  import { Player } from '../models/Player';

  interface PlayerProps {
  players: Player[]
}

const props = defineProps<PlayerProps>();

const gameField = ["", "", "", "", "", "", "", "", ""];

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

  <div class="gameBoard">
    <div class="square" v-for="n in gameField" @click="handleSquareClick">
    {{ n }}
    </div>
  </div>
 
</template>

<style scoped>
 .gameBoard {
  
	width: 600px;
	height: 600px;
  border: 3px solid #2c3e50;	
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
 }

 .square {
  border: 3px solid #2c3e50;
  /* border-radius: 2px;
  font-family: Helvetica; */
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
 }
</style>
