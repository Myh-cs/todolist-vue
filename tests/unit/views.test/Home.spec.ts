
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import TodoItem from '@/components/TodoItem.vue';
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: 'value'})),
}));
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/create',
      name: 'AddTodo',
    },
    {
      path: '/details/:id',
      name: 'TodoDetails',
    },
  ],
});

let mutations: any;
let store: any;

beforeEach(() => {
  mutations = {
    deleteTodoItem: jest.fn(),
    editTodoItem: jest.fn(),
  };
  store = new Vuex.Store({
    state: {
      todolist: [
        {
          weight: 0,
          title: '123',
          details: '123',
          finished: false,
          create_time: '2019-06-14 14:52:07',
          end_time: '',
          id: 2,
        },
        {
          weight: 0,
          title: '123',
          details: '123',
          finished: true,
          create_time: '2019-06-14 14:52:06',
          end_time: '',
          id: 1,
        },
      ],
    },
    mutations,
  });
});

describe('Views: Home.vue', () => {
  it('axios render test', (done) => {
    const warper = shallowMount(Home, {router, store, localVue });
    warper.vm.$nextTick().then(
      () => {
    expect(warper.find('span').text()).toBe('value');
    done();
      }
    )

  });
  it('render div.home when passed', () => {
    const warper = shallowMount(Home, { router, store, localVue });
    expect(warper.contains('.home')).toBe(true);
  });
  it('router.currentruter is create when passed', () => {
    const warper = shallowMount(Home, { router, store, localVue });
    const todoList = warper.findAll(TodoItem);
    todoList.wrappers[todoList.length - 1].vm.$emit('emptyClick');
    expect(router.currentRoute.name).toBe('AddTodo');
  });
  it('router.currentruter is details when passed', () => {
    const warper = shallowMount(Home, { router, store, localVue });
    warper.find(TodoItem).vm.$emit('click', 2);
    expect(router.currentRoute.name).toBe('TodoDetails');
  });
  it('editTodoItem is called when passed', () => {
    const warper = shallowMount(Home, { router, store, localVue });
    warper.find(TodoItem).vm.$emit('change', { finished: true, id: 2 });
    expect(mutations.editTodoItem).toHaveBeenCalled();
  });
  it('deleteTodoItem is called when passed', () => {
    const warper = shallowMount(Home, { router, store, localVue });
    warper.find(TodoItem).vm.$emit('deleteClick', { id: 2 });
    expect(mutations.deleteTodoItem).toHaveBeenCalled();
  });
});
