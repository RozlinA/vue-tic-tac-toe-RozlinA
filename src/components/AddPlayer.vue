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
  <!-- <h3>Start a new game</h3> -->
  <div class="inputContainer">
    <label for="player">{{ players.length == 0 ? "Add player X:" : "Add player O:" }}</label>
    <div>
      <input type="text" placeholder="player name" v-model="playerInput">
      <button @click="handleClick">Save</button>
    </div>
   
  </div>
</section>
</template>

<style scoped>
  h3 {
    padding-bottom: 15px;
    font-size: 25px;
    font-weight: bold;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  input {
    /* margin-left: 10px;
    margin-right: 10px; */
    /* margin: 15px; */
    padding: 8px;
    border-radius: 4px;
  }

  button {
    margin-left: 10px;
  }

  @media only screen and (min-width: 600px) {
    h3 {
      padding-bottom: 15px;
      font-size: 40px;
      font-weight: bold;
    }

    .inputContainer {
      align-items: center;
    }

    input {
      width: 300px;
    }
  }
</style>
