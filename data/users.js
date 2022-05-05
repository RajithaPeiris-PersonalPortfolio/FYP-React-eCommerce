import bcrypt from 'bcryptjs'

const users = [
	// Admin user
	{
		name: 'Rajitha Peiris',
		email: 'rajitha@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
		isAdmin: true,
	},
	// Standard users
	{
		name: 'Bella Swan',
		email: 'bella@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
	{
		name: 'Edward Cullen',
		email: 'edward@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
]

export default users
