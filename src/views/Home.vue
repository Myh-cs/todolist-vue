<template>
  <div class="home">
    <div class="todolist">
      <TodoItem
        v-for="(item) in sortTodoList"
        :key="item.id+item.title+item.create_time"
        :id="item.id"
        :title="item.title"
        :details="item.details"
        :time="item.create_time"
        :finished="item.finished"
        @click="toDetails(item.id)"
        @change="changeFinished"
        @deleteClick="deleteClick(item.id)"
      />
      <TodoItem empty @emptyClick="toAddTodo()"/>
      <span>{{aData}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from '@/components/TodoItem.vue'; // @ is an alias to /src
import axios from 'axios';

export default Vue.extend({
  components: {
    TodoItem,
  },
  data() {
    return {
      aData: '',
      aData1: '',
      aData2: '',
    };
  },
  mounted() {
    axios.get('/api/test').then((res) => { this.aData = res.data; }).catch(() => {
      this.aData = 'error catch';
    });
    axios.get('/api/test2').then((res) => { this.aData1 = res.data; }).catch(() => {
      this.aData1 = 'error catch';
    });
    axios.get('/api/test3').then((res) => { this.aData2 = res.data; }).catch(() => {
      this.aData2 = 'error catch';
    });
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
