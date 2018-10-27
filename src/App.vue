<template>
  <div id="app">
    <TodoList :items="items"></TodoList>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters('todoItem', {
      // map `this.items` with `this.$store.state.getter.itemList`
      items: 'itemList'
    })
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
