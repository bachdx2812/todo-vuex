<template>
  <div>
    <ul>
      <item v-for="item in items" :item="item" :key="item.id"></item>
    </ul>
    <input v-model="newItem"/>
    <button @click="addTask(newItem)">Add Task</button>
  </div>
</template>

<script>
import Item from './Item';
import { mapActions } from 'vuex';
import * as types from '../store/mutation-types';

export default {
  data: function(){
    return {
      newItem: ''
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    }
  },
  components: {
    Item
  },
  methods: {
    ...mapActions([
      types.ADD_TASK
    ]),
    addTask: function(){
      this.ADD_TASK(this.newItem);
      this.newItem = '';
    }
  }
}
</script>

<style scoped>
</style>
