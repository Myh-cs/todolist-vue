<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="list-container"></div>
    <TodoList
      :dataSource="sortTodoList"
      :toDetails="toDetails"
      :toAddTodo="toAddTodo"
      :changeFinished="changeFinished"
      :deleteClick="deleteClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Component from 'vue-class-component';
import TodoList from '@/components/TodoList.vue'; // @ is an alias to /src

export default Vue.extend({
  components: {
    TodoList,
  },
  computed: {
    todolist(): Array<{ finished: boolean }> {
      return this.$store.state.todolist;
    },
    sortTodoList(): object[] {
      const finishedList = this.todolist.filter((v) => v.finished);
      const notFinishedList = this.todolist.filter((v) => !v.finished);
      return notFinishedList.concat(finishedList);
    },
  },
  methods: {
    toDetails(id: number) {
      this.$router.push(`/details/${id}`);
    },
    toAddTodo() {
      this.$router.push('/create');
    },
    deleteClick(id: number) {
      this.$store.commit('deleteTodoItem', { id });
    },
    changeFinished({ id, finished }: { id: number; finished: boolean }) {
      this.$store.commit('editTodoItem', { id, finished });
    },
  },
});
</script>
