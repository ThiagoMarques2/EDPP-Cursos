const { Pool } = require('pg');
const config = require('./database');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const pool = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

pool.on('error', (err) => {
  console.error('Erro inesperado no pool de conexão:', err);
});

module.exports = pool;