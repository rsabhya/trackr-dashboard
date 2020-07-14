const Pool = require("pg").Pool;

const pool = new Pool({
	user: "sabhya",
	password: "buildup2020",
	host: "localhost",
	port: 5432,
	database: "Trackr"

});

module.exports = pool;
