const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    //config to talk to postgres
    database: 'music_library',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of connections
    idleTimeoutMillis: 30000 // 30 seconds to give up
});

// Get visibility on whether pg is functioning
pool.on('connect', () => {
    console.log('PG Connected');
});

pool.on('error', (err) => {
    console.log('PG Error', err);
});

module.exports = pool;