import Vue from 'vue';
import Vuex from 'vuex';
import todoItem from './modules/todoItem.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoItem
  }
})
