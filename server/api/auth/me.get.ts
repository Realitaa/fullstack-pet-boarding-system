import { getCurrentUser } from "#server/utils/getCurrentUser";
import { UnauthorizedError } from "#server/utils/exceptions";
import { ApiResponse } from "~~/server/utils/response";

export default defineEventHandler(async (event) => {
  const user = await getCurrentUser(event);

  if (!user) {
    throw new UnauthorizedError("Anda belum masuk.");
  }

  return ApiResponse.success(user);
});
