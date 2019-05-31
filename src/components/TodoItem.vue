<template>
  <div class="item" :title="details">
    <div class="content">
      <div class="title">这是测试啊</div>
      <div class="time">结束时间: {{time}}</div>
    </div>
    <div @click="changeCheck" class="radio">{{ checked ? '●' : '○' }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private title: string = '这是测试啊';

  @Prop()
  private details: string = '测试的描述啊，比较长的一段文字用浮窗形式展现';

  @Prop()
  private time: string = '2019-5-29 10:22:31';

  private checked = false;

  private changeCheck() {
    this.checked = !this.checked;
  }
}
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
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0.5rem #333;
  }
  .content {
    display: flex;
    flex: 1 1;
    flex-flow: column;
    .title {
      flex: 1 1;
      font-size: 1.2rem;
      height: 2.4rem;
      line-height: 2.4rem;
    }
    .time {
      flex: 1 1;
      font-size: 0.8rem;
      height: 1.6rem;
      line-height: 1.6rem;
    }
  }
  .radio {
    flex: 0 0 2rem;
    line-height: 4rem;
    font-size: 3rem;
    padding: 0 1rem;
    &:hover {
      cursor: pointer;
      color: aqua;
    }
  }
}
</style>
