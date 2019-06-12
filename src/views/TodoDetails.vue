<template>
  <div class="item">
    <div class="content">
      <button @click="changeEdit">编辑</button>
      <div class="title">
        标题:
        <input v-if="edit" type="text" v-model="details.title">
        <span v-else>{{details.title}}</span>
      </div>
      <div class="details">
        详情:
        <textarea v-if="edit" name id cols="30" rows="10" v-model="details.details"/>
        <span v-else>{{details.details}}</span>
      </div>
      <div class="time">创建时间: {{details.create_time}}</div>
    </div>
    <div class="radio-container">
      <label for="finished">{{finishedLabel}}</label>
      <input type="checkbox" name="finished" id="finished" v-model="details.finished">
    </div>
    <button v-if="needSave" @click="saveChange" class="save">保存</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  data() {
    const details = { ...this.getDetailsFromStore() };
    return { details, edit: false };
  },
  computed: {
    needSave() {
      const details = this.getDetailsFromStore();
      const storeDetailsString = JSON.stringify(details);
      const localDetailsString = JSON.stringify(this.details);
      return storeDetailsString !== localDetailsString;
    },
    finishedLabel() {
      return this.details.finished ? '完成' : '未完成';
    },
  },
  methods: {
    getDetailsFromStore() {
      const { todolist } = this.$store.state;
      const { id } = this.$route.params;
      const details = todolist.find((val) => val.id === id - 0);
      return details;
    },
    saveChange() {
      this.$store.commit('editTodoItem', this.details);
      this.edit = false;
    },
    changeEdit() {
      this.edit = !this.edit;
    },
  },
})
export default class TodoDetails extends Vue {}
</script>
