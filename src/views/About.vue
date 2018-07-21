<template lang="html">
  <LayoutCenteredCard>
    <h1>About this website</h1>
    <pre>Site version: <code>{{appVersion}}</code></pre>
  </LayoutCenteredCard>
</template>

<script>
import _ from 'lodash';
import appInfo from '../js/app-info';
import LayoutCenteredCard from '../components/layout/centered-card.vue';

export default {
  name: 'About',
  components: {
    LayoutCenteredCard
  },
  data: function () {
    return {
      appInfo
    };
  },
  computed: {
    appVersion: function () {
      return _.get(this.appInfo, 'gitInfo.tag');
    }
  }
};
</script>

<style lang="css">
</style>
