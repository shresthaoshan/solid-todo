import TodoForm from "./components/Form/TodoForm";
import { For } from "solid-js";

import use_todo from "./hooks/use_todo";
import Todo from "./components/Shared/Todo";

import "./styles/App.css";

function App() {
	const { todos } = use_todo();

	return (
		<>
			<div class="todo_app">
				<div class="todo_form">
					<TodoForm />
				</div>
				<div class="todo_items">
					{!todos.length ? (
						<div class="no_content">
							<div class="wrapper">
								<h3>List is empty.</h3>
								<p>Add a todo item.</p>
							</div>
						</div>
					) : (
						<></>
					)}
					<div class="todo_items_list">
						<For each={todos}>{(todo) => <Todo todo={todo} />}</For>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
