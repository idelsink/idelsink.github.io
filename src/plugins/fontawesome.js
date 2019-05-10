import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faKeybase } from '@fortawesome/free-brands-svg-icons/faKeybase';
import { faLastfm } from '@fortawesome/free-brands-svg-icons/faLastfm';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faEnvelope,
  faLinkedin,
  faGithub,
  faKeybase,
  faLastfm,
  faTwitter,
  faInstagram,
  faSteam
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
