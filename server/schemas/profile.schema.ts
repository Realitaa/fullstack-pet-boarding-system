import { z } from "zod";

export const updateProfilePictureSchema = z.object({
  id: z.number().int().min(1),
});

export type UpdateProfilePictureDTO = z.infer<
  typeof updateProfilePictureSchema
>;
