// Import Service
const TodosService = require('../services/TodosService');

class TodosController {
	getTodos = async (req, res) => {
		try {
			// const todosArray = await TodosService.getTodos();
			// return res.status(200).json(await TodosService.getTodos());
			return res
				.status(200)
				.render('pages/tasks', { todosArray: await TodosService.getTodos() });
		} catch (err) {
			console.error(err);
		}
	};

	getTodo = async (req, res) => {
		try {
			const { id } = req.params;
			return res.status(200).json(await TodosService.getTodo(id));
		} catch (err) {
			console.error(err);
		}
	};

	addTodo = async (req, res) => {
		try {
			const { title } = req.body;
			return res.status(200).json(await TodosService.addTodo(title));
		} catch (err) {
			console.error(err);
		}
	};

	updateTodo = async (req, res) => {
		try {
			const { id } = req.params;
			return res.status(200).json(await TodosService.updateTodo(id));
		} catch (err) {
			console.error(err);
		}
	};

	deleteTodo = async (req, res) => {
		try {
			const { id } = req.params;
			return res.status(200).json(await TodosService.deleteTodo(id));
		} catch (err) {
			console.error(err);
		}
	};
}

// Export TodosController
module.exports = new TodosController();

/**
 * (req, res) => {
	const { id } = req.params;
	todos = todos.filter((todo) => {
		return todo.id !== id;
	});
	return res.json(todos);
}
 */
