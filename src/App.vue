<script setup>
let audio = new Audio("/the_coconut_song.mp3");

const startMusic = () => {
  audio.play();
};
</script>

<template>
  <div @click="startMusic()">
    <router-view></router-view>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

.flip-clock {
  z-index: 99;
}

h1 {
  color: #1f2f37;
  font-size: 30px;
  padding: 0 30px;
  text-transform: uppercase;
}

p {
  font-size: 18px;
}
</style>
