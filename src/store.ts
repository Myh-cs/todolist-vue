import Vue from 'vue';
import Vuex from 'vuex';

const IDcreater = () => {
  const radom = Math.random();
  const dateNumber = new Date().valueOf();
  return parseInt((radom * dateNumber).toFixed(0), 10);
};

Vue.use(Vuex);
const todolistString = localStorage.getItem('todolist') as string;

const store = new Vuex.Store({
  state: {
    todolist: JSON.parse(todolistString) || [],
  },
  mutations: {
    addTodoItem(state, payload) {
      state.todolist.unshift({
        ...payload,
        id: new Date().valueOf(),
      });
    },
    editTodoItem(state, payload) {
      const index = state.todolist.findIndex((val: { id: number }) => val.id === payload.id);
      const oldValue = state.todolist.find((val: { id: number }) => val.id === payload.id);
      state.todolist.splice(index, 1);
      state.todolist.unshift({ ...oldValue, ...payload });
    },
    deleteTodoItem(state, payload) {
      const index = state.todolist.findIndex((val: { id: number }) => val.id === payload.id);
      state.todolist.splice(index, 1);
    },
  },
});

store.watch((state) => state.todolist, () => {
  localStorage.setItem('todolist', JSON.stringify(store.state.todolist));
});

export default store;
