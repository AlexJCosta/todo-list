/*module.exports = {
    api_url: process.env.API_URL || 'https://todo-list-be.herokuapp.com/api',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'dc2lnnrb8c2p4n',
    username: process.env.DB_USERNAME || 'mecbbxbkwklxtz',
    password: process.env.DB_PASSWORD || 'e73c7381397a6ec5813eedaaffce9165c0027e37511fd5b31b9ccf9601a5de13',
    host: process.env.DB_HOST || 'ec2-3-218-123-191.compute-1.amazonaws.com',
    dialect: process.env.DB_DIALECT || 'postgres',
    connectionString: process.env.DATABASE_URL || 'postgres://mecbbxbkwklxtz:e73c7381397a6ec5813eedaaffce9165c0027e37511fd5b31b9ccf9601a5de13@ec2-3-218-123-191.compute-1.amazonaws.com:5432/dc2lnnrb8c2p4n'
}*/

module.exports = {
    api_url_prod: process.env.API_URL || 'http://51.79.58.217',
    api_url: process.env.API_URL || 'http://localhost:3000/api',
    database: process.env.DB_NAME || 'todolist',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'postgres',
    port: process.env.APP_PORT || 3001
}