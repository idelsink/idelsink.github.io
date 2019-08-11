<template lang="html">
  <LayoutCenteredCard>
    <VImg
      :src="require('../assets/tux-the-traveler.jpg')"
      height="200px"
    >
      <VLayout
        column
        fill-height
      >
        <VSubheader :title="tuxCaption.title">
          <code>{{ tuxCaption.text }}</code>
        </VSubheader>
        <VSpacer />
        <VCardTitle
          primary-title
          class="white--text"
        >
          <div class="card-title">
            <span class="display-1 author-name">
              <b>Ingmar Delsink</b>
            </span>
            <span
              title="Bachelor of Science"
              class="subheading"
            >
              <em>BSc</em>
            </span>
            <br>
            <span
              title=""
              class="subheading"
            ><em>Embedded Systems Engineer</em></span>
          </div>
        </VCardTitle>
      </VLayout>
    </VImg>
    <div>
      <VSubheader light>
        About me
      </VSubheader>
      <div class="ml-3 mr-3">
        <p>
          I'm an Embedded Systems Engineer living in The Netherlands.
          In my daily life I try to convince the computer to do what I tell it to do.
        </p>
      </div>
    </div>
    <VList
      light
      two-line
    >
      <VDivider light />
      <template v-for="(item, index) in listItems">
        <VSubheader
          v-if="item.header"
          :key="index+'header'"
          light
        >
          {{ item.header }}
        </VSubheader>

        <VListItem
          :key="index+'tile'"
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <VListItemAvatar>
            <VIcon
              :color="item.icon && item.icon.color"
              :large="(item.icon && item.icon.large) || false"
            >
              {{ item.icon && item.icon.name }}
            </VIcon>
          </VListItemAvatar>

          <VListItemContent>
            <!-- eslint-disable vue/no-v-html -->
            <VListItemTitle
              v-if="item.titleHtml"
              v-html="item.titleHtml"
            />
            <VListItemTitle v-else>
              {{ item.title }}
            </VListItemTitle>
            <VListItemSubtitle
              v-if="item.subTitleHtml"
              v-html="item.subTitleHtml"
            >
              {{ item.subTitleHtml }}
            </VListItemSubtitle>
            <!-- eslint-enable vue/no-v-html -->
            <VListItemSubtitle v-else>
              {{ item.subTitle }}
            </VListItemSubtitle>
          </VListItemContent>
        </VListItem>

        <VDivider
          v-if="item.divider"
          :key="index+'div'"
          light
          :inset="item.divider.inset"
        />
      </template>
    </VList>
  </LayoutCenteredCard>
</template>

<script>
import _ from 'lodash';
import LayoutCenteredCard from '../components/CenteredCard';
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
        { icon: { name: 'fas fa-envelope', large: true }, divider: false, header: 'Contact info', title: 'ingmar@dels.ink', subTitle: 'Send me a message!', iconAction: 'message', href: 'mailto:ingmar@dels.ink?subject=Well%20hi%20there&body=Greetings%20Ingmar%2c%20I%27m%20here%3b%20from%20the%20future%21%0a%0a%0a' },
        { icon: { name: 'fab fa-linkedin', large: true, color: '#0077b5' }, header: '', title: 'LinkedIn', subTitle: 'linkedin.com/in/idelsink', iconAction: '', href: 'https://linkedin.com/in/idelsink/', target: '_blank' },
        // Section name ideas; Community / Social / Professional / Social media / Social outlets / Platforms / Public profiles
        { icon: { name: 'fab fa-github', large: true, color: '#1b1817' }, divider: false, header: 'Other platforms', title: 'Github', subTitle: 'My public projects', iconAction: '', href: 'https://github.com/idelsink', target: '_blank' },
        { icon: { name: 'fab fa-keybase', large: true }, divider: { inset: false }, title: 'Keybase', subTitleHtml: '64-bit: <code>6BFF 495F 6EF4 6E6E</code>', href: 'https://keybase.io/binbash', target: '_blank' },
        { icon: { name: 'fab fa-lastfm', large: true, color: '#b91015' }, header: '', title: 'LastFM', subTitle: 'Listen all the music!', iconAction: '', href: 'https://last.fm/user/MrCrazyID', target: '_blank' },
        { icon: { name: 'fab fa-twitter', large: true, color: '#00aced' }, header: '', title: 'Twitter', subTitle: 'twitter.com/idelsink', iconAction: '', href: 'https://twitter.com/idelsink', target: '_blank' },
        { icon: { name: 'fab fa-instagram', large: true, color: 'black' }, title: 'Instagram', subTitle: 'instagram.com/idelsink', iconAction: '', href: 'https://www.instagram.com/idelsink', target: '_blank' },
        { icon: { name: 'fab fa-steam', large: true, color: 'black' }, header: '', title: 'Steam', subTitle: '', iconAction: '', href: 'https://steamcommunity.com/id/MrCrazyID/', target: '_blank' }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.card-title {
  text-shadow:2px 2px 10px black;
}
.author-name {
  margin-right: .4ch;
}
</style>
