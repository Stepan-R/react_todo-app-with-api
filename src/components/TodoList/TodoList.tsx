/* eslint-disable jsx-a11y/label-has-associated-control */
import { Todo } from '../../types/types';
import { TempTodo } from '../TempTodo/TempTodo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  filteredTodos: Todo[];
  deleteTodo: (value: number) => void;
  deletingId: number | null;
  tempTodo: Todo | null;
  updateTodo: (todo: Todo) => void;
  updatingId: number | null;
  inputRef: React.RefObject<HTMLInputElement>;
  loadAll: boolean;
};

export const TodoList: React.FC<Props> = ({
  filteredTodos,
  deleteTodo,
  deletingId,
  tempTodo,
  updateTodo,
  updatingId,
  inputRef,
  loadAll,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          deletingId={deletingId}
          updateTodo={updateTodo}
          updatingId={updatingId}
          inputRef={inputRef}
          loadAll={loadAll}
        />
      ))}

      {tempTodo && <TempTodo tempTodo={tempTodo} />}
    </section>
  );
};
