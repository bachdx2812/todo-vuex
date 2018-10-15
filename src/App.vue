<template>
  <div id="app">
    <TodoList :items="items"></TodoList>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList
  },
  data: function() {
    return {
    }
  },
  computed: {
    ...mapState(['items'])
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
