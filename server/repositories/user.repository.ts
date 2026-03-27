import { db } from "#shared/database/connection.js";

export const findByEmail = async (email: string) => {
  const result = await db.query(
    `SELECT * FROM users WHERE email = $1 LIMIT 1`,
    [email],
  );

  return result.rows[0] || null;
};

export const findById = async (id: string) => {
  const result = await db.query(`SELECT * FROM users WHERE id = $1 LIMIT 1`, [
    id,
  ]);

  return result.rows[0] || null;
};
