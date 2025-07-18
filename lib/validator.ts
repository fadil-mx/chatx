import { z } from 'zod';

export const UserSchemaValidator=z.object({
    name:z.string().min(3, "Name is required"),
    email:z.string().min(1, "Email is required").email("Invalid email format"),
    password:z.string().min(5, "Password must be at least 5 characters long")
})


export const  UserSignInValidator = z.object({
    email:z.string().min(1, "Email is required").email("Invalid email format"),
    password:z.string().min(5, "Password must be at least 5 characters long")
})

export const UserSignUpValidator =UserSignInValidator.extend({
    name:z.string().min(3, "Name is required"),
    confirmPassword:z.string().min(5, "Confirm Password must be at least 5 characters long")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})