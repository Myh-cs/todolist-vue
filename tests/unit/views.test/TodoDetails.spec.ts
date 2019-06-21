import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TodoDetails from '@/views/TodoDetails.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let mutations: any;
let store: any;

beforeEach(() => {
  mutations = {
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
          create_time: '2019-06-14 14:52:07',
          end_time: '',
          id: 0,
        },
      ],
    },
    mutations,
  });
});

describe('Views: TodoDetails', () => {
  it('render .details-container when passed', () => {
    const warper = shallowMount(TodoDetails, {
      store,
      localVue,
      mocks: {
        $route: { params: { id: 2 } },
      },
    });
    expect(warper.contains('.details-container')).toBe(true);
  });
  it('render .radio-container label 未完成 when passed', () => {
    const warper = shallowMount(TodoDetails, {
      store,
      localVue,
      mocks: {
        $route: { params: { id: 2 } },
      },
    });
    expect(warper.find('.radio-container label').text()).toBe('未完成');
  });
  it('render .radio-container label 完成 when passed', () => {
    const warper = shallowMount(TodoDetails, {
      store,
      localVue,
      mocks: {
        $route: { params: { id: 0 } },
      },
    });
    expect(warper.find('.radio-container label').text()).toBe('完成');
  });
  it('render item when passed', () => {
    const warper = shallowMount(TodoDetails, {
      store,
      localVue,
      mocks: {
        $route: { params: { id: 2 } },
      },
    });
    const editButton = warper.find('.content button');
    expect(editButton.text()).toBe('编辑');
    editButton.trigger('click');
    expect(warper.contains('.title input')).toBe(true);
    expect(warper.contains('.title span')).toBe(false);
  });

  it('save called when passed', () => {
    const warper = shallowMount(TodoDetails, {
      store,
      localVue,
      mocks: {
        $route: { params: { id: 2 } },
      },
    });
    const editButton = warper.find('.content button');
    expect(editButton.text()).toBe('编辑');
    editButton.trigger('click');
    const input = warper.find('.title input');
    input.setValue('asd');
    const savebutton = warper.find('.details-container > button');
    savebutton.trigger('click');
    expect(mutations.editTodoItem).toHaveBeenCalled();
  });
});
