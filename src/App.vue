<script setup>
    import { ref } from "vue";

    const popUpOpen = ref(false);
    let audio = new Audio('/the_coconut_song.mp3');

    const togglePopUp = ()=> {
      popUpOpen.value = false;
      audio.play();
    }

    const startMusic = ()=> {
      audio.play();
    }

    setTimeout(() => {
      popUpOpen.value = true;
    }, 2000);

</script>

<template> 
  <div @mousemove="startMusic()">
    <dialog v-show="popUpOpen" class="dialog" :open="popUpOpen"> 
      <h1>THANK YOU FOR YOUR DATA </h1>
      <p>
Your data will now be uploaded to the Russian dark web and sold to the highest bidder in cococoins. If not, you must fill the fridge in the creative department with 4 boxes of Underberg. This applies to all your data – including your search history. “Happy slapping Nr. Aaby” – really, Richard?       </p>
      <button @click="togglePopUp">OK</button>
    </dialog>
    <img src="./assets/www.png" alt="www" width="400" />
    <h1>COUNTDOWN TO THE NEXT WINTER STORM – IF THERE’S NOT CLEANED UP BEFORE</h1>
    <vue3-flip-countdown
      mainColor="#93dbf4"
      mainFlipBackgroundColor="#1f2f37"
      secondFlipBackgroundColor="#24343f"
      countdownSize="10rem"
      deadlineISO="2022-01-20T08:00:00.000Z"
    />
    <audio ref="musicPlayer" autoplay loop >
      <source src="./assets/the_coconut_song.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

body {
  background-color: #e1f5fc;
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

.dialog{
  width: 60%;
  background-color: white;
  border-radius: 2rem;
  position: absolute;
  top:16rem;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  padding: 5rem;
  z-index: 999;
} 
p {
    font-size: 18px;
}
</style>
