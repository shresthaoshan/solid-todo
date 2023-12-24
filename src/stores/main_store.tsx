import { createStore } from "solid-js/store";

export interface TodoItem {
	status: "PENDING" | "RESOLVED" | "DISCARDED";
	created: Date;
	modified: Date;
	title: string;
	id: string;
}

const persisted_todos_raw = localStorage.getItem("todos");

const persisted_todos = (persisted_todos_raw ? JSON.parse(persisted_todos_raw) ?? [] : []) as TodoItem[];

const MainStore = createStore<TodoItem[]>(persisted_todos);

export default MainStore;
