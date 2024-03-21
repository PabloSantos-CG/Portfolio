import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(5, "*Mínimo 5 caracteres"),
  email: z
    .string()
    .email("*E-mail inválido")
    .regex(
      /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]{3,}@[a-z]{3,}\.[a-z]{3,}(\.[a-z]+)?/,
      "*Formato deve ser xxx@xxx.com ou xxx@xxx.com.br"
    ),
  subject: z.string().min(5, "*Mínimo 5 caracteres"),
  message: z.string().min(5, "*Mínimo 5 caracteres"),
});
