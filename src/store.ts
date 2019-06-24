import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const todolistString = localStorage.getItem('todolist') as string;

export interface TodoItem {
  weight?: number;
  title?: string;
  details?: string;
  finished?: boolean;
  create_time?: string;
  end_time?: string;
}
export interface TodoItemWithId extends TodoItem {
  id?: number;
}

export const mutations = {
  addTodoItem(state: any, payload: TodoItem ) {
    state.todolist.unshift({
      ...payload,
      id: new Date().valueOf(),
    });
  },
  editTodoItem(state: any, payload: TodoItemWithId) {
    const index = state.todolist.findIndex(
      (val: { id: number }) => val.id === payload.id,
    );
    const oldValue = state.todolist.find(
      (val: { id: number }) => val.id === payload.id,
    );
    state.todolist.splice(index, 1);
    state.todolist.unshift({ ...oldValue, ...payload });
  },
  deleteTodoItem(state: any, payload: { id: number }) {
    const index = state.todolist.findIndex(
      (val: { id: number }) => val.id === payload.id,
    );
    state.todolist.splice(index, 1);
  },
};

export const stateData = {
  todolist: JSON.parse(todolistString) || [],
};
const store = new Vuex.Store({
  state: stateData,
  mutations,
});
store.watch(
  (state) => state.todolist,
  () => {
    localStorage.setItem('todolist', JSON.stringify(store.state.todolist));
  },
);

export default store;
