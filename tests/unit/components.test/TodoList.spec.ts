import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList.vue', () => {
  it('render div.todolist when pass', () => {
    const warp = shallowMount(TodoList);
    expect(warp.contains('.todolist')).toBe(true);
  });
});
