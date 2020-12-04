module.exports = {
    api_url: process.env.API_URL || 'http://localhost:3000/api',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'd33m63q7jpj2uf',
    username: process.env.DB_USERNAME || 'xfycpuoessqtxb',
    password: process.env.DB_PASSWORD || '00dc61041b53c921ae8279a711f56b7c308820f542bd3bcfa95259f1d686c606',
    host: process.env.DB_HOST || 'ec2-34-237-247-76.compute-1.amazonaws.com',
    dialect: process.env.DB_DIALECT || 'postgres',
    connectionString: process.env.DATABASE_URL || 'postgres://xfycpuoessqtxb:00dc61041b53c921ae8279a711f56b7c308820f542bd3bcfa95259f1d686c606@ec2-34-237-247-76.compute-1.amazonaws.com:5432/d33m63q7jpj2uf'
}