<script setup lang="ts">
  import { Player } from '../models/Player';
  import { ref } from 'vue'

  const playerInput = ref("");

  interface PlayerProps{
    players: Player[]
  }

  defineProps<PlayerProps>();

  const emit = defineEmits<{
    (e: "addPlayer", playerInput:string):void;
  }>();

  const handleClick = () => {
    if (playerInput.value !== ""){
      emit ("addPlayer", playerInput.value);
      playerInput.value = "";
    }
  };

</script>

<template>
<section>
  <h3>Start a new game</h3>
  <label for="player">{{ players.length == 0 ? "Add player 'X':" : "Add player 'O':" }}</label>
  <input type="text" placeholder="player name" v-model="playerInput">
  <button @click="handleClick">Save</button>
</section>
</template>

<style scoped>
  h3 {
    padding-bottom: 15px;
    font-weight: bold;
  }

  input {
    margin-left: 10px;
    margin-right: 10px;
    padding: 4px;
  }
</style>
