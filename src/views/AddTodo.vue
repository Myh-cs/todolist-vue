<template>
  <div class="about">
    <h1>This is add todo</h1>
    <label for>标题:</label>
    <input type="text" v-model="formItem.title">
    <label for>详情</label>
    <textarea name id cols="30" rows="10" v-model="formItem.details"/>
    <button @click="addTodo">保存</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";

@Component
export default class AddTodo extends Vue {
  private formItem = {
    weight: 0,
    title: "",
    details: "",
    finished: false,
    create_time: "",
    end_time: ""
  };
  private async addTodo() {
    await this.$store.commit("addTodoItem", {
      ...this.formItem,
      create_time: moment().format("YYYY-MM-DD HH:mm:ss"),
      end_time: ""
    });
    this.$router.push({name:'TodoList'});
  }
}
</script>
