import { createEffect } from "solid-js";
import MainStore from "../stores/main_store";
import { TodoItem } from "../stores/main_store";
import { nanoid } from "nanoid";

const use_todo = () => {
	const [todos, setTodos] = MainStore;

	createEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	});

	const addTodo = (item: Pick<TodoItem, "title">) => {
		const id = nanoid(18);
		const created = new Date();
		const modified = new Date();

		const new_item: TodoItem = {
			created,
			modified,
			status: "PENDING",
			id,
			...item,
		};

		setTodos([new_item, ...todos]);
	};

	const resolveTodo = (id: string) => {
		const _todos = [...todos].map((todo) => {
			if (todo.id === id)
				return {
					...todo,
					status: "RESOLVED",
				} as TodoItem;
			return todo;
		});

		setTodos(_todos);
	};

	const deleteTodo = (id: string) => {
		const _todos = [...todos].filter((todo) => todo.id !== id);

		setTodos(_todos);
	};

	return {
		todos,
		addTodo,
		deleteTodo,
		resolveTodo,
	};
};

export default use_todo;
