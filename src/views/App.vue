<template lang="html">
  <v-app dark>
    <!-- Just disable it for now -->
    <v-navigation-drawer
      v-if="false"
      app
      v-model="drawer"
      :mini-variant="mini"
    >
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon v-if="false" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title :title="homeLink.title">
        <router-link to="/">
          <a><small><code>{{homeLink.text}}</code></small></a>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm6>
            <v-card light>
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
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import _ from 'lodash';
import appInfo from '../js/app-info';

export default {
  name: 'App',
  data: () => {
    return {
      homeLink: _.sample([
        { text: '127.0.0.1', title: 'I tried to come up with an IPv4 joke, but the good ones were all already exhausted.' },
        { text: '::1', title: "The problem with IPv6 jokes is they're long, obscure and no one gets them without translation." }
      ]),
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
