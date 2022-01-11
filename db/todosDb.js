const { v4 } = require('uuid');

const todoItems = [
	{
		id: '4f21b8ed-4d43-4c5e-a32d-fd236fd5a568',
		title: 'Clean the kitchen',
		completed: false,
	},
	{
		id: '767e0d5b-fdbd-48e3-92b3-51e2daaceda7',
		title: 'Clean the bathroom',
		completed: false,
	},
	{
		id: 'eccf8aa8-1eb5-4559-8bf5-843b02a6d738',
		title: 'Pet the cat',
		completed: false,
	},
	{
		id: '61e26ad6-9288-42f8-a5ee-3b9a39cf2587',
		title: 'Fix the backyard',
		completed: false,
	},
];

// Export todoItems
module.exports = todoItems;
