<template>
  <div class="item" :title="details" @click="emptyClick">
    <div v-if="!empty" class="action-container">
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
    <div v-if="!empty" class="content" @click="onClick">
      <div class="title">{{title}}</div>
      <div class="time">创建时间: {{time}}</div>
    </div>
    <div v-if="!empty" class="close-container">
      <button v-if="!empty" class="close" @click="deleteClick">×</button>
    </div>
    <div v-else class="empty">+</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default Vue.extend({
  props: {
    id: Number,
    title: String,
    details: String,
    time: String,
    finished: Boolean,
    empty: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
    emptyClick() {
      if (this.empty) {
        return this.$emit('emptyClick');
      }
      return;
    },
    deleteClick() {
      this.$emit('deleteClick');
    },
    onChange({
      target: { checked: finished },
    }: {
      target: { checked: boolean };
    }) {
      this.$emit('change', { id: this.id, finished });
    },
  },
  computed: {
    finishedLabel(): string {
      return this.finished ? '完成' : '未完成';
    },
  },
});
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
  .empty {
    width: 100%;
    height: 100%;
    line-height: 4rem;
    text-align: center;
  }
  .action-container {
    flex: 0 0 5rem;
    line-height: 4rem;
    font-size: 1rem;
    padding: 0 1rem;
    border-right: 1px solid #333;
    .cursor-pointer {
      cursor: pointer;
    }
  }
  .close-container {
    flex: 0 0 2rem;
    line-height: 4rem;
    font-size: 1rem;
    .close {
      cursor: pointer;
      line-height: 1rem;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
      background: #f56c6c;
      padding: 0;
      border: none;
      border-radius: 0.3rem;
      color: #fff;
    }
  }
}
</style>
