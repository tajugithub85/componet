import React from 'react'
import Todo from "./components/Todo"
import ToDoList from './components/Todolist'
class App extends React.Component {
 

	render() {
		const todoComponet = ToDoList.map(todo => <Todo key={todo.id} Question={todo.Question} Answer={todo.Answer}/>)
		return (
			<div>
		      
                {todoComponet}
			</div>
		) 
	}
}


export default App;

