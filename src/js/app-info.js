import {gitInfo} from './git-info';

const appInfo = {
  name: '',
  author: 'Ingmar Delsink',
  gitInfo: gitInfo
};

export default {
  ...appInfo
};
