<template lang="html">
  <VApp>
    <VAppBar
      app
    >
      <VAppBarNavIcon @click.stop="drawer = !drawer" />
      <VToolbarTitle :title="toolbar.title">
        <RouterLink to="/">
          <a><small><code>{{ toolbar.text }}</code></small></a>
        </RouterLink>
      </VToolbarTitle>
    </VAppBar>

    <VNavigationDrawer
      v-model="drawer"
      app
      temporary
    >
      <VList>
        <VListItem
          exact
          :to="{name: 'Home'}"
        >
          <VListItemAction>
            <VIcon>fas fa-home</VIcon>
          </VListItemAction>
          <VListItemContent>
            <VListItemTitle>Home</VListItemTitle>
          </VListItemContent>
        </VListItem>
        <VListItem :to="{name: 'About'}">
          <VListItemAction>
            <VIcon>fas fa-info-circle</VIcon>
          </VListItemAction>
          <VListItemContent>
            <VListItemTitle>About</VListItemTitle>
          </VListItemContent>
        </VListItem>
        <VListGroup
          prepend-icon="fas fa-code"
          value="true"
        >
          <template #activator>
            <VListItemTitle>Projects</VListItemTitle>
          </template>

          <VListItem
            href="./spotify-track-preview"
            target="_blank"
          >
            <VListItemAction>
              <img
                width="24"
                height="24"
                :aspect-ratio="1"
                src="https://ingmar.dels.ink/spotify-track-preview/favicon.png"
              >
            </VListItemAction>
            <VListItemContent>
              <VListItemTitle>Spotify track preview</VListItemTitle>
            </VListItemContent>
          </VListItem>
        </VListGroup>
      </VList>
    </VNavigationDrawer>
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
