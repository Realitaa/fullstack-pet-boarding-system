import { ZodObject } from "zod";
import { BadRequestError } from "#server/utils/exceptions";

export const validateSchema = <T>(schema: ZodObject, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new BadRequestError(
      result.error.flatten((issue) => issue.message).fieldErrors as Record<
        string,
        string[]
      >,
      "Validasi gagal",
    );
  }
  return result.data as T;
};
