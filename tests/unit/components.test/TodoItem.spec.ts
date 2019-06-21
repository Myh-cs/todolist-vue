import { shallowMount } from '@vue/test-utils';
import TodoItem from '@/components/TodoItem.vue';

describe('TodoItem.vue', () => {
  it('renders action-container content  when passed', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { empty: false },
    });
    expect(wrapper.contains('.action-container')).toBe(true);
    expect(wrapper.contains('.content')).toBe(true);
    expect(wrapper.contains('.empty')).toBe(false);
  });
  it('renders title,time when passed', () => {
    const title = 'new message';
    const time = '2019-01-04';
    const wrapper = shallowMount(TodoItem, {
      propsData: { title, empty: false, time },
    });
    expect(wrapper.find('.title').text()).toMatch(title);
    expect(wrapper.find('.time').text()).toMatch(`创建时间: ${time}`);
  });
  it('renders item with title equal details when passed', () => {
    const details = 'detailssss';
    const wrapper = shallowMount(TodoItem, {
      propsData: { details, empty: false },
    });
    expect(wrapper.find('.item').attributes('title')).toMatch(details);
  });
  it('renders label text equal 完成 when passed', () => {
    const finished = true;
    const wrapper = shallowMount(TodoItem, {
      propsData: { finished, empty: false },
    });
    expect(wrapper.find('label').text()).toMatch('完成');
  });
  it('render label text equal 未完成 when passed', () => {
    const finished = false;
    const wrapper = shallowMount(TodoItem, {
      propsData: { finished, empty: false },
    });
    expect(wrapper.find('label').text()).toMatch('未完成');
  });
  it('render addbutton when passed', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { empty: true },
    });
    const addButton = wrapper.find('.empty');
    expect(wrapper.contains('.action-container')).toBe(false);
    expect(wrapper.contains('.content')).toBe(false);
    expect(wrapper.contains('.empty')).toBe(true);
    expect(addButton.text()).toBe('+');
  });
  it('emitted emptyClick when passed', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { empty: true },
    });
    const addButton = wrapper.find('.empty');
    addButton.trigger('click');
    expect(wrapper.emitted().emptyClick).toBeTruthy();
  });
  it('emitted click when passed', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { empty: false },
    });
    const content = wrapper.find('.content');
    content.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
  it('emitted deleteClick when passed', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { empty: false },
    });
    const close = wrapper.find('.close');
    close.trigger('click');
    expect(wrapper.emitted().deleteClick).toBeTruthy();
  });
  it('emitted change and args equal {finished: true, id: 0} when passed', () => {
    const id = 0;
    const finished = false;
    const wrapper = shallowMount(TodoItem, {
      propsData: { empty: false, id, finished },
    });
    const label = wrapper.find('label');
    label.trigger('click');
    expect(wrapper.emitted('change')[0][0]).toEqual({finished: true, id: 0});

  });
  it('emitted change and args equal {finished: false, id: 2} when passed', () => {
    const id = 2;
    const finished = true;
    const wrapper = shallowMount(TodoItem, {
      propsData: { empty: false, id, finished },
    });
    const label = wrapper.find('label');
    label.trigger('click');
    expect(wrapper.emitted('change')[0][0]).toEqual({finished: false, id: 2});

  });
});
