import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().trim(),
  password: z.string().trim().min(1)
})

export type TSignInSchema = z.infer<typeof signInSchema>
