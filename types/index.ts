import {
  UserSchemaValidator,
  UserSignInValidator,
  UserSignUpValidator,
} from '@/lib/validator'
import z from 'zod'

export type UserValidator = z.infer<typeof UserSchemaValidator>
export type UserSignUPValidator = z.infer<typeof UserSignUpValidator>
export type UserSignINValidator = z.infer<typeof UserSignInValidator>
