<template lang="html">
  <v-app dark>
    <!-- Just disable it for now -->
    <v-navigation-drawer
      app
      temporary
      clipped
      v-model="drawer"
      :mini-variant="mini"
    >
    <v-list>
      <v-list-tile :to="{name: 'Home'}">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'About'}">
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-group
        prepend-icon="code"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile href="./spotify-track-preview" target="_blank">
          <v-list-tile-action>
            <v-list-tile-avatar size="24">
              <img src="https://ingmar.dels.ink/spotify-track-preview/static/images/favicon.png">
            </v-list-tile-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Spotify track preview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title :title="toolbar.title">
        <router-link to="/">
          <a><small><code>{{toolbar.text}}</code></small></a>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'App',
  data: () => {
    return {
      drawer: false,
      mini: false,
      homeLink: _.sample([
        { text: '127.0.0.1', title: 'I tried to come up with an IPv4 joke, but the good ones were all already exhausted.' },
        { text: '::1', title: "The problem with IPv6 jokes is they're long, obscure and no one gets them without translation." }
      ])
    };
  },
  computed: {
    toolbar: function () {
      switch (_.get(this, '$route.name')) {
        case 'Home':
          return this.homeLink;
        default:
          return { text: _.get(this, '$route.name'), title: _.get(this, '$route.name') };
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>
