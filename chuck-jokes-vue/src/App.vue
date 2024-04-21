<template>
  <div id="app" class="container">
    <div class="row">
      <chuck-card v-for="(joke, index) in chuckJokes" :key="index" :icon-url="joke.icon_url" :value="joke.value"></chuck-card>
    </div>
  </div>
</template>

<script>
import ChuckCard from './components/ChuckCard.vue';

export default {
  components: {
    ChuckCard
  },
  data() {
    return {
      chuckJokes: [
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "Chuck Norris can skydive into outer space." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "The chief export of Chuck Norris is pain." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "Time waits for no man. Unless that man is Chuck Norris." },
        { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png", value: "If you spell Chuck Norris in Scrabble, you win. Forever." }
      ]
    };
  }
};
</script>

<style>
</style>
