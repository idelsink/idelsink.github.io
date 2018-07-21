<template lang="html">
  <LayoutCenteredCard>
    <v-card-media
      src="static/images/tux-the-traveler.jpg"
      height="200px"
    >
      <v-subheader :title="tuxCaption.title"><code>{{tuxCaption.text}}</code></v-subheader>
    </v-card-media>
    <v-card-title primary-title>
      <div class="headline">{{author}}</div>
    </v-card-title>
    <v-card-title>
      <div>
        <h3>Information to put here?</h3>
        <ul>
          <li>Email</li>
          <li>Github</li>
          <li>Keybase/GPG public key</li>
          <li>LinkedIN</li>
          <li>Twitter?</li>
          <li>Steam?</li>
          <li>LastFM?</li>
        </ul>
      </div>
    </v-card-title>
  </LayoutCenteredCard>
</template>

<script>
import _ from 'lodash';
import appInfo from '../js/app-info';
import LayoutCenteredCard from '../components/layout/centered-card';

export default {
  name: 'Home',
  components: {
    LayoutCenteredCard
  },
  data: () => {
    return {
      tuxCaption: _.sample([
        { text: 'A wild Tux appears!', title: "I'm sorry, I could not found a GNU." },
        { text: 'Tux In The Wild', title: "I don't think plush tux-es contain much protein; I think I stick with worms and snakes in the wild." }
      ])
    };
  },
  computed: {
    author: () => _.get(appInfo, 'author', '')
  }
};
</script>

<style lang="css" scoped>
</style>
