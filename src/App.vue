<template lang="html">
  <VApp dark>
    <VNavigationDrawer
      v-model="drawer"
      app
      temporary
      clipped
      :mini-variant="mini"
    >
      <VList>
        <VListTile exact :to="{name: 'Home'}">
          <VListTileAction>
            <VIcon>home</VIcon>
          </VListTileAction>
          <VListTileContent>
            <VListTileTitle>Home</VListTileTitle>
          </VListTileContent>
        </VListTile>
        <VListTile :to="{name: 'About'}">
          <VListTileAction>
            <VIcon>info</VIcon>
          </VListTileAction>
          <VListTileContent>
            <VListTileTitle>About</VListTileTitle>
          </VListTileContent>
        </VListTile>
        <VListGroup
          prepend-icon="code"
          value="true"
        >
          <VListTile slot="activator">
            <VListTileContent>
              <VListTileTitle>Projects</VListTileTitle>
            </VListTileContent>
          </VListTile>

          <VListTile
            href="./spotify-track-preview"
            target="_blank"
          >
            <VListTileAction>
              <VListTileAvatar size="24">
                <img src="https://ingmar.dels.ink/spotify-track-preview/static/images/favicon.png">
              </VListTileAvatar>
            </VListTileAction>
            <VListTileContent>
              <VListTileTitle>Spotify track preview</VListTileTitle>
            </VListTileContent>
          </VListTile>
        </VListGroup>
      </VList>
    </VNavigationDrawer>
    <VToolbar
      app
      fixed
      clipped-left
    >
      <VToolbarSideIcon @click.stop="drawer = !drawer" />
      <VToolbarTitle :title="toolbar.title">
        <RouterLink to="/">
          <a><small><code>{{ toolbar.text }}</code></small></a>
        </RouterLink>
      </VToolbarTitle>
    </VToolbar>
    <RouterView />
  </VApp>
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
          const name = _.upperFirst(_.startCase(_.get(this, '$route.name')).toLowerCase());
          return { text: name, title: name };
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>
