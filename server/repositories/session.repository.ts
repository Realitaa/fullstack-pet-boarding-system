import { db } from "#shared/database/connection";
import { randomUUID } from "crypto";

export const createSession = async (userId: string) => {
  const id = randomUUID();

  await db.query(
    `INSERT INTO sessions (id, user_id, expires_at)
     VALUES ($1, $2, NOW() + interval '7 days')`,
    [id, userId],
  );

  return id;
};

export const getSession = async (sessionId: string) => {
  const { rows } = await db.query(`SELECT * FROM sessions WHERE id = $1`, [
    sessionId,
  ]);

  return rows[0];
};

export const deleteSession = async (sessionId: string) => {
  await db.query(`DELETE FROM sessions WHERE id = $1`, [sessionId]);
};
