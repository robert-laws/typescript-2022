const myToDos: ToDoItem[] = [];

interface ToDoItem {
  id: number;
  title: string;
  status: ToDoStatus;
  completedOn?: Date;
}

enum ToDoStatus {
  ToDo = 'todo',
  InProgress = 'in-progress',
  Done = 'done',
}

function addToDoItem(todo: string, allToDos: ToDoItem[]): ToDoItem {
  const id = getNextId(allToDos);

  const newToDo: ToDoItem = {
    id,
    title: todo,
    status: ToDoStatus.ToDo,
  };

  allToDos.push(newToDo);

  return newToDo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const FirstToDo = addToDoItem('Find some food', myToDos);
const SecondToDo = addToDoItem('Walk the Dog', myToDos);
