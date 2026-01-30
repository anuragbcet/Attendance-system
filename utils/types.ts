import z from 'zod'

export const signUpSchema=z.object({
    name:z.string().min(3,"name is too short"),
    email:z.email("Invalid email"),
    password:z.string().min(6,"pass is too small"),
    role:z.enum(['Teacher','Student'])
})

export const signInSchema=z.object({
    email:z.email("Invalid email"),
    password:z.string().min(6,"pass is too small")
})