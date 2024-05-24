<script setup lang="ts">
  import { ref } from 'vue';
  import { Player } from '../models/Player';

  interface PlayerProps {
    players: Player[];
  }

  const props = defineProps<PlayerProps>();

  const boardGame = ref(["", "", "", "", "", "", "", "", ""]);

  const currentPlayer = ref(Math.floor(Math.random()*2));
  console.log(currentPlayer); 

  const showScore = ref(false);

  const handleGameMoves = (i:number) => {
    if (boardGame.value[i] === ""){
      if (currentPlayer.value === 0) {
        boardGame.value[i] = "X";
        currentPlayer.value = 1;
      }
      else {
        boardGame.value[i] = "O";
        currentPlayer.value = 0;
      }
      const winner = checkWinner();
      handleWinner(winner);
    }
  };

  // const handleWinner = () => {
  //   const winner = checkWinner();
  //   if (winner === true){
  //     console.log ("Hurraaa")
  //   }
  //   return winner;
  // };

  const handleWinner = (winner:boolean) => {
    if (winner === true){
      console.log ("Hurraaa");
      if(currentPlayer.value === 0){
        props.players[1].score++;
      }
      else{
        props.players[0].score++;
      }
      console.log(props.players[0], props.players[1])
    }
    return winner;
  };

  const checkWinner = () => {
    if(boardGame.value[0] === "X" || boardGame.value[0] === "O") {
      if(boardGame.value[0] === boardGame.value[1] && boardGame.value[0] === boardGame.value[2]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    if(boardGame.value[3] === "X" || boardGame.value[3] === "O") {
      if(boardGame.value[3] === boardGame.value[4] && boardGame.value[3] === boardGame.value[5]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    if(boardGame.value[6] === "X" || boardGame.value[6] === "O") {
      if(boardGame.value[6] === boardGame.value[7] && boardGame.value[6] === boardGame.value[8]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    if(boardGame.value[0] === "X" || boardGame.value[0] === "O") {
      if(boardGame.value[0] === boardGame.value[3] && boardGame.value[0] === boardGame.value[6]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    if(boardGame.value[1] === "X" || boardGame.value[1] === "O") {
      if(boardGame.value[1] === boardGame.value[4] && boardGame.value[1] === boardGame.value[7]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    if(boardGame.value[2] === "X" || boardGame.value[2] === "O") {
      if(boardGame.value[2] === boardGame.value[5] && boardGame.value[2] === boardGame.value[8]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    if(boardGame.value[0] === "X" || boardGame.value[0] === "O") {
      if(boardGame.value[0] === boardGame.value[4] && boardGame.value[0] === boardGame.value[8]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    if(boardGame.value[2] === "X" || boardGame.value[2] === "O") {
      if(boardGame.value[2] === boardGame.value[4] && boardGame.value[2] === boardGame.value[6]){
        console.log ("vi har en vinnare!")
        return true;
      }
    };
    return false;
  }

  const checkTie = () => {
    let tie = true;
    for (let i = 0; i < boardGame.value.length; i++){
      if (boardGame.value[i] === ""){
        tie = false;
      }
   };
    return tie;
  };

  const handleResetPlayers = () => {
    props.players.splice(0, 2);
  };

  const handleNewGame = () => {
    for (let i = 0; i < boardGame.value.length; i++){
      boardGame.value[i] = "";
    }
  };

  const toggleShowScore = () => {
    showScore.value = !showScore.value;
  };
</script>

<template>
  <h3 class="winner" v-if="checkWinner() && currentPlayer % 2 === 0"> {{ players[1].playerName + " is the winner!" }} </h3>
  <h3 class="winner" v-else-if="checkWinner() && currentPlayer % 2 === 1"> {{ players[0].playerName + " is the winner!" }} </h3>
  <h3 v-if="checkTie() && !checkWinner()">It's a tie!</h3>

  <section v-if="!checkTie()">
  <section v-if="!checkWinner()">
    <h3 class="playerTurn" v-if="currentPlayer % 2 === 0"> {{ players[0].playerName + "'s turn (X)" }}</h3>
    <h3 class="playerTurn" v-else> {{ players[1].playerName + "'s turn (O)" }}</h3>

    <div class="board">
      <div class="square" v-for="(square, i) in boardGame" :key="i" @click="handleGameMoves(i)">
      {{ square }}
      </div>
    </div>
  </section>
  </section>

  <section v-if="showScore">
    <h3>Score History</h3>
    <p>{{ props.players[0].playerName + ": " + props.players[0].score}}</p>
    <p>{{ props.players[1].playerName + ": " + props.players[1].score}}</p>
  </section>

  <section>
    <button @click="toggleShowScore">Score</button>
    <button @click="handleNewGame">Play again</button>
    <button @click="handleResetPlayers">Reset players</button>
  </section>

 
   
</template>

<style scoped>
 .board {
  width: 500px;
	height: 500px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid #2c3e50;	
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

.square {
  border: 2px solid #2c3e50;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin: 15px;
}

.winner {
  font-size: 64px;
}

.playerTurn {
  font-size: 32px;
}
</style>
