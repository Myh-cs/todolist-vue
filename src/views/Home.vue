<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoItem/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue'; // @ is an alias to /src

@Component({
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {}
</script>
