module.exports = {
    api_url: process.env.API_URL || 'http://localhost:3000/api',
    port: process.env.APP_PORT || 3000,
    database: process.env.DB_NAME || 'todolist',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'postgres',
}