import * as types from '../mutation-types.js';

const state = {
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
}

const getters = {
  itemList: state => {
    return state.items;
  }
}

const actions = {
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
}

const mutations = {
  [types.ADD_TASK]: function (state, payload) {
    state.items.push(payload.data);
  },
  [types.DONE_TASK]: function (state, payload) {
    let index = state.items.indexOf(payload.data);
    state.items[index].completed = true;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
