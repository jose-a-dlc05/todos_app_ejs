// Import DAO
const TodosDAO = require('../dao/Todos');

const { v4 } = require('uuid');

class TodosService {
	async getTodos() {
		try {
			return await TodosDAO.getTodos();
		} catch (err) {
			console.error(err);
		}
	}

	async getTodo(id) {
		try {
			const todoId = id;
			return await TodosDAO.getTodo(todoId);
		} catch (err) {
			console.error(err);
		}
	}

	async addTodo(title) {
		try {
			const todo = {
				id: v4(),
				title: title,
				completed: false,
			};
			return await TodosDAO.addTodo(todo);
		} catch (err) {
			console.error(err);
		}
	}

	async updateTodo(id) {
		try {
			const todo = await TodosDAO.updateTodo(id);
			todo.completed = !todo.completed;
			return todo;
		} catch (err) {
			console.error(err);
		}
	}

	async deleteTodo(id) {
		try {
			return await TodosDAO.deleteTodo(id);
		} catch (err) {
			console.error(err);
		}
	}
}

// Export TodosService
module.exports = new TodosService();
