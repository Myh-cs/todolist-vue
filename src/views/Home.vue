<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList :dataSource="[...todolist]"/>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Vue from "vue";
import Component from "vue-class-component";
import TodoList from "@/components/TodoList.vue"; // @ is an alias to /src

@Component({
  components: {
    TodoList
  },
  computed: {
    ...mapState(["todolist"])
  }
})
export default class Home extends Vue {}
</script>
