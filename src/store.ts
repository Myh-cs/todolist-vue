import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todolist: [
      {
        sort: 3,
        title: '练习vue',
        details: '学习vue以至于可以快速参与项目',
        create_time: '2019-5-29 10:46:32',
        end_time: '2019-6-7 00:00:00',
      },
    ],
  },
  mutations: {

  },
  actions: {
  },
});
