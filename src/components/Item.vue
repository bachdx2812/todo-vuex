<template>
  <li @click="DONE_TASK(item)">{{ item.title }} - {{ item.completed }}</li>
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '../store/mutation-types';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions([
      types.DONE_TASK
    ])
  }
}
</script>

<style scoped>
</style>
