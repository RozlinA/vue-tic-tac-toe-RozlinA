<script setup lang="ts">
import { Player } from '../models/Player';
import { ref } from 'vue'

interface PlayerProps {
  players: Player[]
}

defineProps<PlayerProps>();

const userInput = ref("");

defineEmits<{
  (e: "addPlayer", userInput:string):void
}>();


</script>

<template>
  <section>
    <h3 v-if="players.length==0">Lägg till spelare X</h3>
    <h3 v-else-if="players.length < 2 && players.length > 0">Lägg till spelare O</h3>
    <label for="player">Namn:</label>
    <input type="text" v-model="userInput">
    <button @click="$emit('addPlayer', userInput)">Spara</button>
  </section>

</template>

<style scoped>

</style>
