import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: 'Vuex ToDo App make',
        completed: false,
        editing: false
      },
      {
        id: 2,
        title: 'Dota player',
        completed: false,
        editing: false
      }
    ]
  },
  actions: {
    [types.ADD_TASK]: function({ commit }, title) {
      let newItem = {
        title: title,
        completed: false
      };
      commit(types.ADD_TASK, {
        data: newItem
      })
    },
    [types.DONE_TASK]: function({ commit }, item) {
      commit(types.DONE_TASK, {
        data: item
      })
    }
  },
  mutations: {
    [types.ADD_TASK]: function (state, payload) {
      state.items.push(payload.data);
    },
    [types.DONE_TASK]: function (state, payload) {
      let index = state.items.indexOf(payload.data);
      state.items[index].completed = true;
    }
  }
})
