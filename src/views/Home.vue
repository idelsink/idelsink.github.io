<template lang="html">
  <LayoutCenteredCard>
    <v-card-media
      src="static/images/tux-the-traveler.jpg"
      height="200px"
    >
      <v-layout column fill-height>
        <v-subheader :title="tuxCaption.title"><code>{{tuxCaption.text}}</code></v-subheader>
        <v-spacer></v-spacer>
        <v-card-title primary-title class="white--text">
          <div class="cardTitle">
            <span class="display-1"><b>{{author}}</b></span> <span title="Bachelor of Science" class="subheading"><em>BSc</em></span><br/>
            <span title="" class="subheading"><em>Embedded Systems Engineer</em></span>
          </div>
        </v-card-title>
      </v-layout>
    </v-card-media>
    <div>
      <v-subheader light>About me</v-subheader>
      <div class="ml-3 mr-3">
        <p>
          I'm an Embedded Systems Engineer living in The Netherlands.
          In my daily life I try to convince the computer to do what I tell it to do.
        </p>
      </div>
    </div>
    <v-list light two-line>
      <v-divider light></v-divider>
      <template v-for="item in listItems">
        <v-subheader v-if="item.header" light>{{item.header}}</v-subheader>

        <v-list-tile :to="item.to" :href="item.href" :target="item.target">
          <v-list-tile-action>
            <v-icon v-if="item.icon" :color="iconColor">{{item.icon}}</v-icon>
            <font-awesome-icon
              v-else-if="item.FAIcon"
              v-bind:color="item.FAIcon.color"
              v-bind:class="item.FAIcon.class || (item.FAIcon.color ? '' : (iconColor + '--text'))"
              :scale="item.FAIcon.scale"
              :name="item.FAIcon.name">
            </font-awesome-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-if="item.titleHtml" v-html="item.titleHtml">{{item.title}}</v-list-tile-title>
            <v-list-tile-title v-else>{{item.title}}</v-list-tile-title>
            <v-list-tile-sub-title v-if="item.subTitleHtml" v-html="item.subTitleHtml">{{item.subTitleHtml}}</v-list-tile-sub-title>
            <v-list-tile-sub-title v-else>{{item.subTitle}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider v-if="item.divider" light v-bind:inset="item.divider.inset"></v-divider>
      </template>
    </v-list>
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
      iconColor: 'indigo',
      tuxCaption: _.sample([
        { text: 'A wild Tux appears!', title: "I'm sorry, I could not found a GNU." },
        { text: 'Tux In The Wild', title: "I don't think plush tux-es contain much protein; I think I stick with worms and snakes in the wild." }
      ]),
      listItems: [
        // Section name ideas; Contact info / Social Media / Professional (look/perspective?) / Public profile
        { FAIcon: {name: 'regular/envelope', scale: 1.5}, divider: false, header: 'Contact info', title: 'ingmar@dels.ink', subTitle: 'Send me a message!', iconAction: 'message', href: 'mailto:ingmar@dels.ink?subject=Well%20hi%20there&body=Greetings%20Ingmar%2c%20I%27m%20here%3b%20from%20the%20future%21%0a%0a%0a' },
        { FAIcon: {name: 'brands/linkedin', scale: 1.5, color: '#0077b5'}, header: '', title: 'LinkedIn', subTitle: 'linkedin.com/in/idelsink', iconAction: '', href: 'https://linkedin.com/in/idelsink/', target: '_blank' },
        // Section name ideas; Community / Social / Professional / Social media / Social outlets / Platforms / Public profiles
        { FAIcon: {name: 'brands/github', scale: 1.5, color: '#1b1817'}, divider: false, header: 'Other platforms', title: 'Github', subTitle: 'My public projects', iconAction: '', href: 'https://github.com/idelsink', target: '_blank' },
        { FAIcon: {name: 'brands/keybase', scale: 1.5}, divider: { inset: false }, title: 'Keybase', subTitleHtml: '64-bit: <code>6BFF 495F 6EF4 6E6E</code>', href: 'https://keybase.io/binbash', target: '_blank' },
        { FAIcon: {name: 'brands/lastfm', scale: 1.5, color: '#b91015'}, header: '', title: 'LastFM', subTitle: 'Listen all the music!', iconAction: '', href: 'https://last.fm/user/MrCrazyID', target: '_blank' },
        { FAIcon: {name: 'brands/twitter', scale: 1.5, color: '#00aced'}, header: '', title: 'Twitter', subTitle: 'twitter.com/idelsink', iconAction: '', href: 'https://twitter.com/idelsink', target: '_blank' },
        { FAIcon: {name: 'brands/instagram', scale: 1.5, color: 'black'}, title: 'Instagram', subTitle: 'instagram.com/idelsink', iconAction: '', href: 'https://www.instagram.com/idelsink', target: '_blank' },
        { FAIcon: {name: 'brands/steam', scale: 1.5, color: 'black'}, header: '', title: 'Steam', subTitle: '', iconAction: '', href: 'https://steamcommunity.com/id/MrCrazyID/', target: '_blank' }

      ]
    };
  },
  computed: {
    author: () => _.get(appInfo, 'author', '')
  }
};
</script>

<style lang="css" scoped>
.cardTitle {
  text-shadow:2px 2px 10px black;
}
</style>
