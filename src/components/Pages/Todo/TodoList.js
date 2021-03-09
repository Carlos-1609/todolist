import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="p-5 flex bg-white border rounded shadow items-center justify-between">
    <span className={myClass}>{descripcion}</span>
    <div className="flex">
      <MdDone onClick={onClick} color={"green"} size={"1.5em"}></MdDone>
      <MdDelete onClick={onDeleteClick} color={"red"} size={"1.5em"}></MdDelete>
    </div>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <div className="">
    <section className="TodoList mx-3">
      <ul>
          {todoItems}
      </ul>
    </section>
    </div>
  );
}

export default TodoList;
