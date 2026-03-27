import { clearUserSession, getUserSession } from "#imports";
import { deleteSession } from "#server/repositories/session.repository";
import { ApiResponse } from "~~/server/utils/response";

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event);

  if (session?.sessionId) {
    await deleteSession(session.sessionId as string);
  }

  await clearUserSession(event);

  return ApiResponse.success(null, "Anda berhasil keluar.");
});
