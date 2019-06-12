<template>
  <div class="todolist">
    <TodoItem
      v-for="(item, index) in dataSource"
      :key="index"
      :title="item.title"
      :details="item.details"
      :time="item.create_time"
      :finished="item.finished"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";

@Component({
  components: { TodoItem },
  props: {
    dataSource: Array
  }
})
export default class TodoList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
