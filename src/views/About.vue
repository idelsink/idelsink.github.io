<template lang="html">
  <LayoutCenteredCard>
    <div>
      <div class="ml-3 mr-3">
        <h1>About this website</h1>
        <p>
          <pre>Site version: <code>{{ appVersion }}</code></pre>
        </p>
      </div>
    </div>
  </LayoutCenteredCard>
</template>

<script>
import _ from 'lodash';
import LayoutCenteredCard from '../components/CenteredCard';

export default {
  name: 'About',
  components: {
    LayoutCenteredCard
  },
  data: function () {
    return {
      gitInfo: GIT_DESCRIBE
    };
  },
  computed: {
    appVersion: function () {
      return _.get(this.gitInfo, 'tag');
    }
  }
};
</script>
