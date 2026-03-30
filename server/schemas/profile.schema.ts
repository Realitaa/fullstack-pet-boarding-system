import { z } from "zod";
import { profilePicture } from "#shared/const/profilePicture";

export const updateProfilePictureSchema = z.object({
  pfp_id: z.number().int().min(1).max(profilePicture.length),
});

export type UpdateProfilePictureDTO = z.infer<
  typeof updateProfilePictureSchema
>;
