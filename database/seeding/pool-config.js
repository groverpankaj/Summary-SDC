const { Pool } = require('pg');


module.exports.pool = new Pool({
  user: 'postgres',
  host: '13.57.25.149',
  database: 'zillowsummary',
  password: 'airbnbIMAGE',
  port: 5432
});

