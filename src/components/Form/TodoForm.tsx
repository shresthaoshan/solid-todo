import use_todo from "../../hooks/use_todo";

export default function TodoForm() {
	const { addTodo } = use_todo();

	const onSubmit = (ev: FormSubmitEvent) => {
		ev.preventDefault();
		ev.stopPropagation();
		const titleElement = ev.currentTarget.firstChild as HTMLInputElement;

		if (!titleElement?.value) return;

		addTodo({
			title: titleElement.value,
		});
		titleElement.value = "";
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" maxLength={50} placeholder="Todo item" required />
			<button type="submit">Add Todo</button>
		</form>
	);
}
