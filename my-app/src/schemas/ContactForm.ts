import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string({
      invalid_type_error:
        "*Nome não deve conter caracteres que não sejam letras",
      required_error: "*Campo obrigatório",
    })
    .length(3, "*Mínimo 3 caracteres"),
  email: z
    .string()
    .email("*E-mail inválido")
    .regex(
      /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]{3,}@[a-z]{3,}\.[a-z]{3,}(\.[a-z]+)?/,
      "*Formato errado"
    ),
  subject: z.string().length(5, "*Mínimo 5 caracteres"),
  message: z.string().length(6, "*Mínimo 6 caracteres"),
});
