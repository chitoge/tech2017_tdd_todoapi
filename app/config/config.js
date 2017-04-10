var config = {
	port: process.env.PORT || 3000,
	db: "mongodb://localhost/node_assignment_tdd_todo",
	test_port: 2001,
	test_db: "mongodb://localhost/todoapi_test"
}
module.exports = config;