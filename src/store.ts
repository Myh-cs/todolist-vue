import Vue from 'vue';
import Vuex from 'vuex';

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
        id: state.todolist.length ? state.todolist[state.todolist.length - 1].id + 1 : 0,
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
