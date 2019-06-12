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

@Component({
  components: {
    TodoList,
  },
  computed: {
    ...mapState(['todolist']),
    sortTodoList() {
      const finishedList = this.todolist.filter((v) => v.finished);
      const notFinishedList = this.todolist.filter((v) => !v.finished);
      return notFinishedList.concat(finishedList);
    },
  },
  methods: {
    toDetails(id) {
      this.$router.push(`/details/${id}`);
    },
    toAddTodo(id) {
      this.$router.push('/create');
    },
    deleteClick(id) {
      this.$store.commit('deleteTodoItem', { id });
    },
    changeFinished({ id, finished }) {
      this.$store.commit('editTodoItem', { id, finished });
    },
  },
})
export default class Home extends Vue {}
</script>
