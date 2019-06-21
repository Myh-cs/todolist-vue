import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import AddTodo from '@/views/AddTodo.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TodoList',
    },
  ],
});

let mutations: any;
let store: any;

beforeEach(() => {
  mutations = {
    addTodoItem: jest.fn(),
  };
  store = new Vuex.Store({
    state: {},
    mutations,
  });
});
describe('Views: AddTodo.vue', () => {
  it('render div.addTodo when passed', () => {
    const warper = shallowMount(AddTodo);
    expect(warper.contains('.addTodo')).toBe(true);
  });
  it('vuex test', () => {
    const wraper = shallowMount(AddTodo, { router, store, localVue });
    const button = wraper.find('button');
    button.trigger('click');
    expect(mutations.addTodoItem).toHaveBeenCalled();
    expect(router.currentRoute.name).toBe('TodoList');
  });
});
