import { mutations, TodoItemWithId, TodoItem } from '@/store';

describe('store test', () => {
    it('"addTodoItem" test', () => {
        const state: { todolist: TodoItemWithId[] } = {
            todolist: [],
        };
        mutations.addTodoItem(state, {title: 'test1'});
        mutations.addTodoItem(state, {title: 'test0'});
        expect(state.todolist[1].title).toBe('test1');
        // tslint:disable-next-line: no-unused-expression
        expect(state.todolist[1].id).toBeTruthy;
        expect(state.todolist[0].title).toBe('test0');
        // tslint:disable-next-line: no-unused-expression
        expect(state.todolist[0].id).toBeTruthy;
    });
    it('"editTodoItem" test', () => {
        const state: { todolist: TodoItemWithId[] } = {
            todolist: [{
                id: 123, title: '张三', details: '张三的测试', finished: false,
            }],
        };
        mutations.editTodoItem(state, { id: 123, title: '张三长大' });
        expect(state.todolist[0].id).toBe(123);
        expect(state.todolist[0].title).toBe('张三长大');
        expect(state.todolist[0].details).toBe('张三的测试');
    });
    it('"deleteTodoItem" test', () => {
        const state: { todolist: TodoItemWithId[] } = {
            todolist: [{
                id: 123, title: '张三', details: '张三的测试', finished: false,
            }, {
                id: 223, title: '李四', details: '李四的测试', finished: true,
            }, {
                id: 222, title: '王五', details: '王五的测试', finished: true,
            }],
        };
        mutations.deleteTodoItem(state, { id: 223 });
        expect(state.todolist[0].id).toBe(123);
        expect(state.todolist[1].id).toBe(222);
        expect(state.todolist.length).toBe(2);
    });
});
