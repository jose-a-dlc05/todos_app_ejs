// Import DB
const todosDb = require('../db/todosDb');

class TodosDAO {
	async getTodos() {
		return await todosDb;
	}

	async getTodo(id) {
		const todo = await todosDb.find((todo) => todo.id === id);
		return todo;
	}

	async addTodo(todo) {
		todosDb.push(todo);
		return todo;
	}

	async updateTodo(id) {
		const index = todosDb.findIndex((todo) => todo.id === id);
		return todosDb[index];
	}

	async deleteTodo(id) {
		const todos = todosDb.filter((todo) => todo.id !== id);
		return todos;
	}
}

// export TodosDAO
module.exports = new TodosDAO();
