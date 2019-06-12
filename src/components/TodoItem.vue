<template>
  <div class="item" :title="details">
    <div class="content" @click="onClick">
      <div class="title">{{title}}</div>
      <div class="time">创建时间: {{time}}</div>
    </div>
    <div class="radio-container">
      <label class="cursor-pointer" for="finished">{{finishedLabel}}</label>
      <input
        class="cursor-pointer"
        type="checkbox"
        name="finished"
        id="finished"
        :checked="finished"
        @change.stop="onChange"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    id: Number,
    title: String,
    details: String,
    time: String,
    finished: Boolean
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
    onChange(event) {
      const finished = event.target.checked;
      this.$emit("change", { id: this.id - 0, finished });
    }
  },
  computed: {
    finishedLabel() {
      return this.finished ? "完成" : "未完成";
    }
  }
})
export default class TodoItem extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  display: flex;
  width: 20rem;
  height: 4rem;
  margin: 8px auto;
  border-radius: 0.3rem;
  border: 1px solid #333;
  box-shadow: 0 0 0.3rem #333;
  font-size: 1.5rem;
  &:hover {
    box-shadow: 0 0 0.5rem #333;
  }
  .content {
    display: flex;
    flex: 1 1;
    flex-flow: column;
    cursor: pointer;
    .title {
      width: 12rem;
      padding: 0 1rem;
      flex: 1 1;
      font-size: 1.2rem;
      height: 2.4rem;
      line-height: 2.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      width: 12rem;
      padding: 0 1rem;
      flex: 1 1;
      font-size: 0.8rem;
      height: 1.6rem;
      line-height: 1.6rem;
    }
  }
  .radio-container {
    flex: 0 0 5rem;
    line-height: 4rem;
    font-size: 1rem;
    padding: 0 1rem;
    .cursor-pointer {
      cursor: pointer;
    }
  }
}
</style>
