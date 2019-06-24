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
      aData: ''
    }
  },
  mounted(){
    axios.get('/api/test').then((res)=>{console.log(res);this.aData=res.data})
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
