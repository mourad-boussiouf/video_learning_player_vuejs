<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6">
        <video-player :videoURL="videoURL" />
      </v-col>
    </v-row>
  </v-container>
</template>

<Home></Home>

<script>

import VideoPlayer from "./components/VideoPlayer";


export default {
  name: "App",
  components: {
    VideoPlayer,
  },
  data: () => ({
    videoURL:
      "https://ia800200.us.archive.org/0/items/Mario1_507/Mario1_507_HQ_512kb.mp4",
  }),
  methods: {
    changeVideoPlaying(url) {
      this.videoURL = url;
    },
  },
};


</script>

<style>
body {
  font-family: Roboto;
}
</style>
