<template>
  <div class="about">
    <h1>This is add todo</h1>
    <label for="">标题:</label><input type="text"/>
    <label for="">详情</label><textarea name="" id="" cols="30" rows="10"/>
    <button>保存</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AddTodo extends Vue {
  @Prop()
  private title: string = "这是测试啊";

  @Prop()
  private details: string = "测试的描述啊，比较长的一段文字用浮窗形式展现";

  @Prop()
  private time: string = "2019-5-29 10:22:31";

  private formItem = {
    weight: 0,
    title: "",
    details: "",
    create_time: "",
    end_time: ""
  };

}
</script>
