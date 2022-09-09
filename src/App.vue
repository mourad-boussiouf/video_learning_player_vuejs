<template>
<Home></Home>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home,
  },
  data: () => ({
    videoURL:
      "https://ia800200.us.archive.org/0/items/Mario1_507/Mario1_507_HQ_512kb.mp4",
  }),
  methods: {
    changeVideoPlaying(url) {
      this.videoURL = url;
    },
      testLog() {
console.log('lol');
    }
  },
};
</script>
<style>
body {
  font-family: Roboto;
}
</style>