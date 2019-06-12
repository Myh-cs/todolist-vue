import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todolist: [
      {
        id: 0,
        weight: 0,
        title: '练习vue',
        details: '学习vue以至于可以快速参与项目',
        finished: false,
        create_time: '2019-5-29 10:46:32',
        end_time: '2019-6-7 00:00:00',
      },
      {
        id: 1,
        weight: 0,
        title: '练习vue1',
        details: '学习vue以至于可以快速参与项目1',
        finished: true,
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
