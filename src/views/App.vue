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
