<template>
  <v-container>
  <div class="home">
    <div class="feature-card">
        <img src="https://image.posterlounge.fr/img/products/610000/609410/609410_poster_l.jpg" alt ="KillBill movie poster">
          <h3>LOLILOL</h3>
      <v-btn
        elevation="2"
        large
      >CHAPITRE 1</v-btn>
      <v-btn
        elevation="2"
        large
      >CHAPITRE 2</v-btn>
        </div>
    </div>
      <v-row justify="center">
        <button @click="testLog">CONSOLELOG</button>
        <v-col md="6">
          <video-player :videoURL="videoURL"/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

export default {
  name: "Home",
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
    testLog() {
      console.log('lol');
    }
  },
};
</script>
