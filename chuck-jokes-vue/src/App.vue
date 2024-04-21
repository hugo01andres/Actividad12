<template>
  <div id="app">
    <h1>Chuck Norris Jokes</h1>
    <ul>
      <li v-for="(joke, index) in chuckJokes" :key="index">{{ joke.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chuckJokes: [
        { value: "Chuck Norris can skydive into outer space." },
        { value: "The chief export of Chuck Norris is pain." },
        { value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
        { value: "Time waits for no man. Unless that man is Chuck Norris." },
        { value: "If you spell Chuck Norris in Scrabble, you win. Forever." },
      ]
    };
  }
};
</script>

<style>
/* Agrega estilos según tu preferencia */
</style>
clear
