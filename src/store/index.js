import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const contexts = require.context('./modules', true);
const modules = {};
contexts.keys().forEach((key) => {
  const name = contexts(key).moduleName;
  const module = contexts(key).default;
  name && (modules[name] = module);
});
const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
});
export default store;
