import { createSignal } from "solid-js";

import { TodoItem } from "../../../stores/main_store";
import use_todo from "../../../hooks/use_todo";

import "./styles.css";

const Todo = ({ todo }: { todo: TodoItem }) => {
	const [isActive, setIsActive] = createSignal<boolean>(false);

	const { resolveTodo, deleteTodo } = use_todo();

	const resolveThisTodo = () => {
		setTimeout(() => resolveTodo(todo.id), 300);
	};
	const deleteThisTodo = () => {
		setTimeout(() => deleteTodo(todo.id), 300);
	};

	return (
		<div class="todo_item">
			<div onClick={() => setIsActive(!isActive())} class={`wrapper ${isActive() ? "active" : ""}`}>
				<div class="content">
					<h4>{todo.status === "RESOLVED" ? <s>{todo.title}</s> : todo.title}</h4>
				</div>
				<div class="handlers">
					<button onClick={deleteThisTodo}>&cross;</button>
					<button onClick={resolveThisTodo}>&check;</button>
				</div>
			</div>
		</div>
	);
};

export default Todo;
