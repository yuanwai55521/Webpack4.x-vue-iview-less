import _ from 'lodash';
const urls = [
  { name: 'Vue-Router' },
  { name: 'axios' }
];

export default {
  get() {
    return Promise.resolve({ success: true, data: _.clone(urls) });
  }
};
