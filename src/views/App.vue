<template lang="html">
  <v-app dark>
    <v-navigation-drawer
      app
      fixed
      v-model="drawer"
    >
    <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="./static/images/profile/profile.svg" >
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{author}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="subheading">
          <code>127.0.0.1</code> of
        </span>
        <span class="title">{{author}}</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
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
      drawer: undefined
    };
  },
  computed: {
    author: () => _.get(appInfo, 'author', ''),
    year: () => {return (new Date()).getFullYear()}
  }
}
</script>

<style lang="css" scoped>
</style>
