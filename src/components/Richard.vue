<script setup>
import { ref } from "vue";

const popUpOpen = ref(false);

const togglePopUp = () => {
  popUpOpen.value = false;
};

setTimeout(() => {
  popUpOpen.value = true;
}, 2000);
</script>

<template>
  <div class="theme-richard">
    <dialog v-show="popUpOpen" class="dialog" :open="popUpOpen">
      <h1>THANK YOU FOR YOUR DATA</h1>
      <p>
        Your data will now be uploaded to the Russian dark web and sold to the highest
        bidder in cococoins. If not, you must fill the fridge in the creative department
        with 4 boxes of Underberg. This applies to all your data – including your search
        history. “Happy slapping Nr. Aaby” – really, Richard?
      </p>
      <button @click="togglePopUp">OK</button>
    </dialog>
    <img src="../assets/www.png" alt="www" width="400" />
    <h1>COUNTDOWN TO THE NEXT WINTER STORM – IF THERE’S NOT CLEANED UP BEFORE</h1>
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
.theme-richard {
  padding: 3rem;
  background-color: #e1f5fc;
}
</style>
