<script setup>
    import { ref } from "vue";

    const popUpOpen = ref(false);

    setTimeout(() => {
      popUpOpen.value = true;
    }, 5000);

</script>

<template> 
  <div>
    <dialog v-show="popUpOpen" class="dialog" :open="popUpOpen"> 
      <h1>Tak for dine data.</h1>
      <p>
        De vil nu blive uploadet hvis du ikke fylder 4 kasser Underberg i de kreatives køleskab.
        Dine data indeholder, billeder mails og andet nasty fra din computer, samt seneste søgehistorik. bla. happyslapping
      </p>
      <button @click="popUpOpen = false">OK</button>
    </dialog>
    <img src="./assets/www.png" alt="www" width="400" />
    <h1>Nedtælling til næste snestorm - hvis ikke der er ryddet op inden</h1>
    <vue3-flip-countdown
      mainColor="#93dbf4"
      mainFlipBackgroundColor="#1f2f37"
      secondFlipBackgroundColor="#24343f"
      countdownSize="10rem"
      deadlineISO="2022-01-20T08:00:00.000Z"
    />
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
  width: 600px;
  background-color: white;
  border-radius: 2rem;
  position: absolute;
  top:22rem;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  padding: 2rem;
  z-index: 999;
}
</style>
