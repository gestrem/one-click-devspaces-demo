const { test, before, after } = require('node:test');
const assert = require('node:assert');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  database: process.env.POSTGRES_DB || 'todoapp',
  password: process.env.POSTGRES_PASSWORD || 'password',
  port: process.env.POSTGRES_PORT || 5432,
});

const text = `test-${Date.now()}`;
let id;

before(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
});

after(async () => {
  if (id) {
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  }
  await pool.end();
});

test('ajoute un task, vérifie qu\'il existe puis le supprime', async () => {
  const inserted = await pool.query(
    'INSERT INTO todos (text) VALUES ($1) RETURNING *',
    [text]
  );
  assert.strictEqual(inserted.rowCount, 1);
  id = inserted.rows[0].id;
  assert.strictEqual(inserted.rows[0].text, text);

  const found = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  assert.strictEqual(found.rowCount, 1);
  assert.strictEqual(found.rows[0].text, text);

  const deleted = await pool.query(
    'DELETE FROM todos WHERE id = $1 RETURNING *',
    [id]
  );
  assert.strictEqual(deleted.rowCount, 1);
  assert.strictEqual(deleted.rows[0].id, id);

  const gone = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  assert.strictEqual(gone.rowCount, 0);
});
