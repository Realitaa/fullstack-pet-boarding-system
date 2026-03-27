import { getUserSession } from "#imports";
import { getSession, deleteSession } from "../repositories/session.repository";
import { findById } from "../repositories/user.repository";
import { transformUser } from "./transformers";

export const getCurrentUser = async (event: any) => {
  const session = await getUserSession(event);

  if (!session?.sessionId) {
    return null;
  }

  const dbSession = await getSession(session.sessionId as string);

  if (!dbSession) {
    return null;
  }

  if (now().isAfter(dbSession.expires_at)) {
    await deleteSession(session.sessionId as string);
    return null;
  }

  const user = await findById(dbSession.user_id);

  if (!user) {
    return null;
  }

  return transformUser(user);
};
