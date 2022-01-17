const Pool = require("pg").Pool

const pool = new Pool ({
    user: "postgress",
    password: "5050",
    host: "localhost",
    port: 5432,
    database: "bestchoice"
})