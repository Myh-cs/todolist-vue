<template>
  <div class="todolist">
    <TodoItem
      v-for="(item) in dataSource"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :details="item.details"
      :time="item.create_time"
      :finished="item.finished"
      @click="toDetails(item.id)"
      @change="changeFinished"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";

@Component({
  components: { TodoItem },
  props: {
    dataSource: Array,
    toDetails: Function,
    changeFinished: Function
  }
})
export default class TodoList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
