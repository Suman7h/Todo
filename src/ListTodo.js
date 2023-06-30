export function ListTodo({todos, toogleTodo, deleteTodo}){
    return(
        <ul className='list'>
        {todos.map(todo=>{
          return(
            <li key={todo.id} className="flex flex-row ml-11 mt-4 items-center ">
              <label className="flex items-center text-xl gap-2 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" checked={todo.completed} 
                onChange={e=>toogleTodo(todo.id,e.target.checked)} 
                />   {todo.title}
              </label>
              <button 
              onClick={()=>deleteTodo(todo.id)} 
              className="ml-3 w-16 text-red-500 border-2 border-red-500 rounded-md hover:bg-red-500 hover:bg-opacity-40">Delete</button>
            </li>
          )
        }
        )}
        </ul>
    )
}