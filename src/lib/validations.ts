import { z } from "zod";

const requiredString = z.string().trim().min(1, "required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters,numbers, - and _ allowed",
  ),
  password: requiredString.min(8, "Must be atleast 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>; //it will automatically generate typescript type corresponds to the structure defined in signupschema

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type loginValues = z.infer<typeof loginSchema>;
